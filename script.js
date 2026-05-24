
document.addEventListener("DOMContentLoaded", function () {

let urdu = false;






const data = [
  // 🍚 RICE
  { name: "Basmati Rice", urdu: "باسمتی چاول", time: "8-10 min", pressure: "3-4 min", ratio: 1.8, cat: "rice" },
  { name: "Sella Rice", urdu: "سیلہ چاول", time: "11-12 min", pressure: "5-6 min", ratio: 2.2, cat: "rice" },
  { name: "Pulao Rice", urdu: "پلاؤ چاول", time: "10 min", pressure: "4 min", ratio: 1.75, cat: "rice" },
  { name: "Boiled Rice", urdu: "ابلے چاول", time: "10 min", pressure: "3 min", ratio: 2, cat: "rice" },
  { name: "Fried Rice", urdu: "فرائیڈ رائس", time: "12 min", pressure: "-", ratio: 1.5, cat: "rice" },

  // 🥣 DAAL
  { name: "Dal Masoor", urdu: "مسور دال", time: "20 min", pressure: "6-8 min", ratio: 2, cat: "dal" },
  { name: "Dal Moong", urdu: "مونگ دال", time: "20 min", pressure: "5-7 min", ratio: 2, cat: "dal" },
  { name: "Dal Chana", urdu: "چنا دال", time: "35 min", pressure: "8-10 min", ratio: 3, cat: "dal" },
  { name: "Dal Mash", urdu: "ماش دال", time: "30 min", pressure: "10-12 min", ratio: 2.5, cat: "dal" },

  // 🍗 MEAT
  { name: "Chicken", urdu: "چکن", time: "15 min", pressure: "4-6 min", ratio: 1, cat: "meat" },
  { name: "Mutton", urdu: "مٹن", time: "25 min", pressure: "10-12 min", ratio: 1, cat: "meat" },
  { name: "Beef", urdu: "گائے کا گوشت", time: "40 min", pressure: "30-40 min", ratio: 1.2, cat: "meat" },
  { name: "Beef Nihari", urdu: "نہاری", time: "90 min", pressure: "40 min", ratio: 2, cat: "meat" },

  // 🥬 VEG
  { name: "Potato", urdu: "آلو", time: "20 min", pressure: "5-7 min", ratio: 1, cat: "veg" },
  { name: "Spinach", urdu: "پالک", time: "10 min", pressure: "2-3 min", ratio: 0.5, cat: "veg" },
  { name: "Carrot", urdu: "گاجر", time: "15 min", pressure: "6 min", ratio: 0.7, cat: "veg" },
  { name: "Cauliflower", urdu: "پھول گوبھی", time: "15 min", pressure: "5 min", ratio: 0.6, cat: "veg" },
  { name: "Peas", urdu: "مٹر", time: "10 min", pressure: "3 min", ratio: 0.5, cat: "veg" },
  { name: "Okra", urdu: "بھنڈی", time: "12 min", pressure: "-", ratio: 0.4, cat: "veg" },

  // 🍛 OTHER
  { name: "Egg", urdu: "انڈا", time: "8 min", pressure: "3 min", ratio: 0, cat: "other" },
  { name: "Tea", urdu: "چائے", time: "5 min", pressure: "-", ratio: 1, cat: "other" },
  { name: "Milk", urdu: "دودھ", time: "5 min", pressure: "-", ratio: 1, cat: "other" },
  { name: "Noodles", urdu: "نوڈلز", time: "5 min", pressure: "-", ratio: 2, cat: "other" },
  { name: "Dough", urdu: "آٹا", time: "-", pressure: "-", ratio: 0.5, cat: "other" },

  // 🍟 SNACKS
  { name: "Samosa", urdu: "سموسہ", time: "25 min", pressure: "-", ratio: 1.5, cat: "snack" },
  { name: "Pakora", urdu: "پکوڑے", time: "15 min", pressure: "-", ratio: 1.2, cat: "snack" },
  { name: "Fries", urdu: "فرنچ فرائز", time: "15 min", pressure: "-", ratio: 1, cat: "snack" },
  { name: "Nuggets", urdu: "چکن نگٹس", time: "20 min", pressure: "-", ratio: 1, cat: "snack" },
  { name: "Sandwich", urdu: "سینڈوچ", time: "10 min", pressure: "-", ratio: 0.8, cat: "snack" },
  { name: "Chaat", urdu: "چاٹ", time: "15 min", pressure: "-", ratio: 1.2, cat: "snack" },
  { name: "Spring Rolls", urdu: "اسپرنگ رولز", time: "20 min", pressure: "-", ratio: 1.5, cat: "snack" },
  { name: "Dahi Bhalla", urdu: "دہی بھلے", time: "20 min", pressure: "-", ratio: 1.5, cat: "snack" },

  // 🥤 DRINKS
  { name: "Tea", urdu: "چائے", time: "5 min", pressure: "-", ratio: 1, cat: "drink" },
  { name: "Coffee", urdu: "کافی", time: "10 min", pressure: "-", ratio: 1, cat: "drink" },
  { name: "Lassi", urdu: "لسی", time: "10 min", pressure: "-", ratio: 1, cat: "drink" },
  { name: "Milkshake", urdu: "ملک شیک", time: "10 min", pressure: "-", ratio: 1, cat: "drink" },
  { name: "Lemonade", urdu: "لیمونیڈ", time: "5 min", pressure: "-", ratio: 1, cat: "drink" },
  { name: "Green Tea", urdu: "سبز چائے", time: "5 min", pressure: "-", ratio: 1, cat: "drink" },

  // 🍰 DESSERTS
  { name: "Kheer", urdu: "کھیر", time: "35 min", pressure: "-", ratio: 1, cat: "dessert" },
  { name: "Custard", urdu: "کسٹرڈ", time: "20 min", pressure: "-", ratio: 1, cat: "dessert" },
  { name: "Gulab Jamun", urdu: "گلاب جامن", time: "30 min", pressure: "-", ratio: 1, cat: "dessert" },
  { name: "Jalebi", urdu: "جلیبی", time: "25 min", pressure: "-", ratio: 1, cat: "dessert" },
  { name: "Barfi", urdu: "برفی", time: "35 min", pressure: "-", ratio: 1, cat: "dessert" },
  { name: "Halwa", urdu: "حلوہ", time: "20 min", pressure: "-", ratio: 1, cat: "dessert" },
  { name: "Cake", urdu: "کیک", time: "40 min", pressure: "-", ratio: 1, cat: "dessert" },
  { name: "Donuts", urdu: "ڈونٹس", time: "35 min", pressure: "-", ratio: 1, cat: "dessert" },

  // 🍳 BREAKFAST
  { name: "Paratha", urdu: "پراٹھا", time: "15 min", pressure: "-", ratio: 1, cat: "breakfast" },
  { name: "Omelette", urdu: "آملیٹ", time: "10 min", pressure: "-", ratio: 1, cat: "breakfast" },
  { name: "Boiled Egg", urdu: "اُبلا انڈا", time: "8 min", pressure: "-", ratio: 1, cat: "breakfast" },
  { name: "Halwa Puri", urdu: "حلوہ پوری", time: "25 min", pressure: "-", ratio: 1, cat: "breakfast" },
  { name: "Cholay", urdu: "چنے", time: "30 min", pressure: "-", ratio: 1, cat: "breakfast" },
  { "name": "Basmati Rice", "urdu": "باسمتی چاول", "time": "8-10 min", "pressure": "3-4 min", "ratio": 1.8, "cat": "rice" },
  { "name": "Sella Rice", "urdu": "سیلہ چاول", "time": "11-12 min", "pressure": "5-6 min", "ratio": 2.2, "cat": "rice" },
  { "name": "Pulao Rice", "urdu": "پلاؤ چاول", "time": "10 min", "pressure": "4 min", "ratio": 1.75, "cat": "rice" },
  { "name": "Boiled Rice", "urdu": "ابلے چاول", "time": "10 min", "pressure": "3 min", "ratio": 2, "cat": "rice" },
  { "name": "Fried Rice", "urdu": "فرائیڈ رائس", "time": "12 min", "pressure": "-", "ratio": 1.5, "cat": "rice" },

  { "name": "Dal Masoor", "urdu": "مسور دال", "time": "20 min", "pressure": "6-8 min", "ratio": 2, "cat": "dal" },
  { "name": "Dal Moong", "urdu": "مونگ دال", "time": "20 min", "pressure": "5-7 min", "ratio": 2, "cat": "dal" },
  { "name": "Dal Chana", "urdu": "چنا دال", "time": "35 min", "pressure": "8-10 min", "ratio": 3, "cat": "dal" },

  { "name": "Chicken", "urdu": "چکن", "time": "15 min", "pressure": "4-6 min", "ratio": 1, "cat": "meat" },
  { "name": "Mutton", "urdu": "مٹن", "time": "25 min", "pressure": "10-12 min", "ratio": 1, "cat": "meat" },
  { "name": "Beef", "urdu": "گائے کا گوشت", "time": "40 min", "pressure": "30-40 min", "ratio": 1.2, "cat": "meat" },

  { "name": "Chana", "urdu": "چنے", "time": "60 min", "pressure": "12-15 min", "ratio": 3, "cat": "other" },
  { "name": "Lobia", "urdu": "لوبیا", "time": "50 min", "pressure": "18-20 min", "ratio": 3, "cat": "other" },

  { "name": "Potato", "urdu": "آلو", "time": "20 min", "pressure": "5-7 min", "ratio": 1, "cat": "veg" },
  { "name": "Spinach", "urdu": "پالک", "time": "10 min", "pressure": "2-3 min", "ratio": 0.5, "cat": "veg" },

  { "name": "Egg", "urdu": "انڈا", "time": "8 min", "pressure": "3 min", "ratio": 0, "cat": "other" },
  { "name": "Tea", "urdu": "چائے", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "other" },
  { "name": "Milk", "urdu": "دودھ", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "other" },
{ "name": "Biryani", "urdu": "بریانی", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dinner" },
{ "name": "Pakoray", "urdu": "پکوڑے", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Aloo Pakora", "urdu": "آلو پکوڑا", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Onion Pakora", "urdu": "پیاز پکوڑا", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Bread Pakora", "urdu": "بریڈ پکوڑا", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Pakora", "urdu": "چکن پکوڑا", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Puri", "urdu": "پوری", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Halwa Puri", "urdu": "حلوہ پوری", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Kachori", "urdu": "کچوری", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Daal Kachori", "urdu": "دال کچوری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Kachori", "urdu": "چکن کچوری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Samosa", "urdu": "سموسہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Aloo Samosa", "urdu": "آلو سموسہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Samosa", "urdu": "چکن سموسہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Vegetable Samosa", "urdu": "سبزی سموسہ", "time": "22 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Spring Rolls", "urdu": "اسپرنگ رول", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Spring Rolls", "urdu": "چکن اسپرنگ رول", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Vegetable Rolls", "urdu": "ویجیٹیبل رول", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "French Fries", "urdu": "فرنچ فرائز", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Loaded Fries", "urdu": "لوڈڈ فرائز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Masala Fries", "urdu": "مسالہ فرائز", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Nuggets", "urdu": "چکن نگٹس", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Wings", "urdu": "چکن ونگز", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Shami Kabab", "urdu": "شامی کباب", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chapli Kabab", "urdu": "چپلی کباب", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Seekh Kabab", "urdu": "سیخ کباب", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Bun Kabab", "urdu": "بن کباب", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Anda Bun", "urdu": "انڈا بن", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Club Sandwich", "urdu": "کلب سینڈوچ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Sandwich", "urdu": "چکن سینڈوچ", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Vegetable Sandwich", "urdu": "ویجیٹیبل سینڈوچ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Cheese Sandwich", "urdu": "چیز سینڈوچ", "time": "8 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Egg Sandwich", "urdu": "انڈا سینڈوچ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Cake", "urdu": "کیک", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chocolate Cake", "urdu": "چاکلیٹ کیک", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Vanilla Cake", "urdu": "وینیلا کیک", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Cupcakes", "urdu": "کپ کیکس", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Cake Rusk", "urdu": "کیک رسک", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Plain Rusk", "urdu": "سادہ رسک", "time": "3 min", "pressure": "-", "ratio": 1, "cat": "light" },
{ "name": "Biscuits", "urdu": "بسکٹ", "time": "2 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Butter Cookies", "urdu": "بٹر کوکیز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chocolate Cookies", "urdu": "چاکلیٹ کوکیز", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Donuts", "urdu": "ڈونٹس", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Glazed Donut", "urdu": "گلیزڈ ڈونٹ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Brownies", "urdu": "براونیز", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chocolate Brownie", "urdu": "چاکلیٹ براونی", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Pancakes", "urdu": "پین کیکس", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Waffles", "urdu": "وافلز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Custard", "urdu": "کسٹرڈ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Fruit Chaat", "urdu": "فروٹ چاٹ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chana Chaat", "urdu": "چنا چاٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Dahi Bhalla", "urdu": "دہی بھلے", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "tangy" },
{ "name": "Gol Gappa", "urdu": "گول گپے", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "tangy" },
{ "name": "Papri Chaat", "urdu": "پاپڑی چاٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "tangy" },
{ "name": "Namak Para", "urdu": "نمک پارے", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "salty" },
{ "name": "Mathri", "urdu": "مٹھری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "salty" },
{ "name": "Suji Halwa", "urdu": "سوجی حلوہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Gajar Halwa", "urdu": "گاجر حلوہ", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Jalebi", "urdu": "جلیبی", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Gulab Jamun", "urdu": "گلاب جامن", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Barfi", "urdu": "برفی", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Ladoo", "urdu": "لڈو", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Basmati Rice", "urdu": "باسمتی چاول", "time": "8-10 min", "pressure": "3-4 min", "ratio": 1.8, "cat": "rice" },
{ "name": "Sella Rice", "urdu": "سیلہ چاول", "time": "11-12 min", "pressure": "5-6 min", "ratio": 2.2, "cat": "rice" },
{ "name": "Pulao Rice", "urdu": "پلاؤ چاول", "time": "10 min", "pressure": "4 min", "ratio": 1.75, "cat": "rice" },
{ "name": "Boiled Rice", "urdu": "ابلے چاول", "time": "10 min", "pressure": "3 min", "ratio": 2, "cat": "rice" },
{ "name": "Fried Rice", "urdu": "فرائیڈ رائس", "time": "12 min", "pressure": "-", "ratio": 1.5, "cat": "rice" },

{ "name": "Dal Masoor", "urdu": "مسور دال", "time": "20 min", "pressure": "6-8 min", "ratio": 2, "cat": "dal" },
{ "name": "Dal Moong", "urdu": "مونگ دال", "time": "20 min", "pressure": "5-7 min", "ratio": 2, "cat": "dal" },
{ "name": "Dal Chana", "urdu": "چنا دال", "time": "35 min", "pressure": "8-10 min", "ratio": 3, "cat": "dal" },
{ "name": "Dal Mash", "urdu": "ماش دال", "time": "30 min", "pressure": "10-12 min", "ratio": 2.5, "cat": "dal" },
{ "name": "Mixed Dal", "urdu": "مکس دال", "time": "25 min", "pressure": "8 min", "ratio": 2.5, "cat": "dal" },

{ "name": "Chicken", "urdu": "چکن", "time": "15 min", "pressure": "4-6 min", "ratio": 1, "cat": "meat" },
{ "name": "Chicken Qeema", "urdu": "چکن قیمہ", "time": "10 min", "pressure": "3-5 min", "ratio": 0.5, "cat": "meat" },
{ "name": "Chicken Karahi", "urdu": "چکن کڑاہی", "time": "25 min", "pressure": "8 min", "ratio": 0.8, "cat": "meat" },
{ "name": "Mutton", "urdu": "بکرا گوشت", "time": "25 min", "pressure": "10-12 min", "ratio": 1, "cat": "meat" },
{ "name": "Mutton Karahi", "urdu": "مٹن کڑاہی", "time": "35 min", "pressure": "12 min", "ratio": 0.8, "cat": "meat" },
{ "name": "Beef", "urdu": "گائے کا گوشت", "time": "40 min", "pressure": "30-40 min", "ratio": 1.2, "cat": "meat" },
{ "name": "Beef Nihari", "urdu": "نہاری", "time": "90 min", "pressure": "40 min", "ratio": 2, "cat": "meat" },
{ "name": "Beef Paya", "urdu": "پائے", "time": "120 min", "pressure": "50 min", "ratio": 2, "cat": "meat" },

{ "name": "Chana", "urdu": "چنے", "time": "60 min", "pressure": "12-15 min", "ratio": 3, "cat": "other" },
{ "name": "Lobia", "urdu": "لوبیا", "time": "50 min", "pressure": "18-20 min", "ratio": 3, "cat": "other" },
{ "name": "Rajma", "urdu": "راجما", "time": "55 min", "pressure": "20 min", "ratio": 3, "cat": "other" },
{ "name": "White Chana", "urdu": "سفید چنے", "time": "60 min", "pressure": "15 min", "ratio": 3, "cat": "other" },
{ "name": "Black Chana", "urdu": "کالے چنے", "time": "65 min", "pressure": "15 min", "ratio": 3, "cat": "other" },

{ "name": "Potato", "urdu": "آلو", "time": "20 min", "pressure": "5-7 min", "ratio": 1, "cat": "veg" },
{ "name": "Spinach", "urdu": "پالک", "time": "10 min", "pressure": "2-3 min", "ratio": 0.5, "cat": "veg" },
{ "name": "Brinjal", "urdu": "بینگن", "time": "15 min", "pressure": "5 min", "ratio": 0.7, "cat": "veg" },
{ "name": "Carrot", "urdu": "گاجر", "time": "15 min", "pressure": "6 min", "ratio": 0.7, "cat": "veg" },
{ "name": "Turnip", "urdu": "شلجم", "time": "18 min", "pressure": "8 min", "ratio": 0.8, "cat": "veg" },
{ "name": "Peas", "urdu": "مٹر", "time": "10 min", "pressure": "3 min", "ratio": 0.5, "cat": "veg" },
{ "name": "Cabbage", "urdu": "بند گوبھی", "time": "12 min", "pressure": "4 min", "ratio": 0.5, "cat": "veg" },
{ "name": "Cauliflower", "urdu": "پھول گوبھی", "time": "15 min", "pressure": "5 min", "ratio": 0.6, "cat": "veg" },
{ "name": "Okra", "urdu": "بھنڈی", "time": "12 min", "pressure": "-", "ratio": 0.4, "cat": "veg" },

{ "name": "Egg", "urdu": "انڈا", "time": "8 min", "pressure": "3 min", "ratio": 0, "cat": "other" },
{ "name": "Half Fry Egg", "urdu": "ہاف فرائی", "time": "3 min", "pressure": "-", "ratio": 0, "cat": "other" },

{ "name": "Noodles", "urdu": "نوڈلز", "time": "5 min", "pressure": "-", "ratio": 2, "cat": "other" },
{ "name": "Maggi", "urdu": "میگی", "time": "2 min", "pressure": "-", "ratio": 1.5, "cat": "other" },
{ "name": "Soup Chicken", "urdu": "چکن سوپ", "time": "20 min", "pressure": "6 min", "ratio": 3, "cat": "other" },
{ "name": "Soup Veg", "urdu": "ویج سوپ", "time": "15 min", "pressure": "5 min", "ratio": 3, "cat": "other" },
{ "name": "Dough", "urdu": "آٹا", "time": "-", "pressure": "-", "ratio": 0.5, "cat": "other" },

{ "name": "Paratha", "urdu": "پراٹھا", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Aloo Paratha", "urdu": "آلو پراٹھا", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Anda Paratha", "urdu": "انڈا پراٹھا", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Methi Paratha", "urdu": "میتھی پراٹھا", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Lacha Paratha", "urdu": "لاچھا پراٹھا", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },

{ "name": "Roti", "urdu": "روٹی", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Butter Roti", "urdu": "مکھن روٹی", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Puri", "urdu": "پوری", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Halwa Puri", "urdu": "حلوہ پوری", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Chana Puri", "urdu": "چنا پوری", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },

{ "name": "Naan", "urdu": "نان", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Sheermal", "urdu": "شیرمال", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Kulcha", "urdu": "کلچہ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Chana Kulcha", "urdu": "چنا کلچہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Tandoori Roti", "urdu": "تندوری روٹی", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },

{ "name": "Fried Egg", "urdu": "فرائی انڈا", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Boiled Egg", "urdu": "ابلہ انڈا", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Omelette", "urdu": "آملیٹ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Masala Omelette", "urdu": "مسالہ آملیٹ", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Cheese Omelette", "urdu": "چیز آملیٹ", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },

{ "name": "French Toast", "urdu": "فرنچ ٹوسٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Bread Butter", "urdu": "بریڈ مکھن", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Bread Jam", "urdu": "بریڈ جام", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Toast", "urdu": "ٹوسٹ", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Milk Bread", "urdu": "ملک بریڈ", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },

{ "name": "Nihari", "urdu": "نہاری", "time": "60 min", "pressure": "-", "ratio": 1, "cat": "main" },
{ "name": "Paya", "urdu": "پائے", "time": "90 min", "pressure": "-", "ratio": 1, "cat": "main" },
{ "name": "Haleem", "urdu": "حلیم", "time": "60 min", "pressure": "-", "ratio": 1, "cat": "main" },
{ "name": "Keema", "urdu": "قیمہ", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "main" },
{ "name": "Anda Keema", "urdu": "انڈا قیمہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "main" },

{ "name": "Chana Masala", "urdu": "چنا مسالہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "main" },
{ "name": "Daal Chana", "urdu": "دال چنا", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "main" },
{ "name": "Daal Mash", "urdu": "دال ماش", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "main" },
{ "name": "Daal Fry", "urdu": "دال فرائی", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "main" },
{ "name": "Lobia", "urdu": "لوبیا", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "main" },

{ "name": "Suji Halwa", "urdu": "سوجی کا حلوہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Gajar Halwa", "urdu": "گاجر کا حلوہ", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Besan Halwa", "urdu": "بیسن حلوہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Kheer", "urdu": "کھیر", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Firni", "urdu": "فرنی", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

{ "name": "Lassi Sweet", "urdu": "میٹھی لسی", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "drink" },
{ "name": "Lassi Salted", "urdu": "نمکین لسی", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "drink" },
{ "name": "Milk", "urdu": "دودھ", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "drink" },
{ "name": "Tea", "urdu": "چائے", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "drink" },
{ "name": "Karak Chai", "urdu": "کڑک چائے", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "drink" },
{ "name": "Green Tea", "urdu": "سبز چائے", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "drink" },
{ "name": "Coffee", "urdu": "کافی", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "drink" },
{ "name": "Doodh Patti", "urdu": "دودھ پتی", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "drink" },


{ "name": "Biryani", "urdu": "بریانی", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dinner" },
{ "name": "Pakoray", "urdu": "پکوڑے", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Aloo Pakora", "urdu": "آلو پکوڑا", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Onion Pakora", "urdu": "پیاز پکوڑا", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Bread Pakora", "urdu": "بریڈ پکوڑا", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Pakora", "urdu": "چکن پکوڑا", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Puri", "urdu": "پوری", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Halwa Puri", "urdu": "حلوہ پوری", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Kachori", "urdu": "کچوری", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Daal Kachori", "urdu": "دال کچوری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Kachori", "urdu": "چکن کچوری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Samosa", "urdu": "سموسہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Aloo Samosa", "urdu": "آلو سموسہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Samosa", "urdu": "چکن سموسہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Vegetable Samosa", "urdu": "سبزی سموسہ", "time": "22 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Spring Rolls", "urdu": "اسپرنگ رول", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Spring Rolls", "urdu": "چکن اسپرنگ رول", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Vegetable Rolls", "urdu": "ویجیٹیبل رول", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "French Fries", "urdu": "فرنچ فرائز", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Loaded Fries", "urdu": "لوڈڈ فرائز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Masala Fries", "urdu": "مسالہ فرائز", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Nuggets", "urdu": "چکن نگٹس", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Wings", "urdu": "چکن ونگز", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Shami Kabab", "urdu": "شامی کباب", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chapli Kabab", "urdu": "چپلی کباب", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Seekh Kabab", "urdu": "سیخ کباب", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Bun Kabab", "urdu": "بن کباب", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Anda Bun", "urdu": "انڈا بن", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Club Sandwich", "urdu": "کلب سینڈوچ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Sandwich", "urdu": "چکن سینڈوچ", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Vegetable Sandwich", "urdu": "ویجیٹیبل سینڈوچ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Cheese Sandwich", "urdu": "چیز سینڈوچ", "time": "8 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Egg Sandwich", "urdu": "انڈا سینڈوچ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Cake", "urdu": "کیک", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chocolate Cake", "urdu": "چاکلیٹ کیک", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Vanilla Cake", "urdu": "وینیلا کیک", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Cupcakes", "urdu": "کپ کیکس", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Cake Rusk", "urdu": "کیک رسک", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Plain Rusk", "urdu": "سادہ رسک", "time": "3 min", "pressure": "-", "ratio": 1, "cat": "light" },
{ "name": "Biscuits", "urdu": "بسکٹ", "time": "2 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Butter Cookies", "urdu": "بٹر کوکیز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chocolate Cookies", "urdu": "چاکلیٹ کوکیز", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Donuts", "urdu": "ڈونٹس", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Glazed Donut", "urdu": "گلیزڈ ڈونٹ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Brownies", "urdu": "براونیز", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chocolate Brownie", "urdu": "چاکلیٹ براونی", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Pancakes", "urdu": "پین کیکس", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Waffles", "urdu": "وافلز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Custard", "urdu": "کسٹرڈ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Fruit Chaat", "urdu": "فروٹ چاٹ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chana Chaat", "urdu": "چنا چاٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "spicy" },
{ "name": "Dahi Bhalla", "urdu": "دہی بھلے", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "tangy" },
{ "name": "Gol Gappa", "urdu": "گول گپے", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "tangy" },
{ "name": "Papri Chaat", "urdu": "پاپڑی چاٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "tangy" },
{ "name": "Namak Para", "urdu": "نمک پارے", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "salty" },
{ "name": "Mathri", "urdu": "مٹھری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "salty" },
{ "name": "Suji Halwa", "urdu": "سوجی حلوہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Gajar Halwa", "urdu": "گاجر حلوہ", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Jalebi", "urdu": "جلیبی", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Gulab Jamun", "urdu": "گلاب جامن", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Barfi", "urdu": "برفی", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Ladoo", "urdu": "لڈو", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Biryani", "urdu": "بریانی", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dinner" },

{ "name": "Pakoray", "urdu": "پکوڑے", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Aloo Pakora", "urdu": "آلو پکوڑا", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Onion Pakora", "urdu": "پیاز پکوڑا", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Bread Pakora", "urdu": "بریڈ پکوڑا", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Chicken Pakora", "urdu": "چکن پکوڑا", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Puri", "urdu": "پوری", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Halwa Puri", "urdu": "حلوہ پوری", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Kachori", "urdu": "کچوری", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Daal Kachori", "urdu": "دال کچوری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Chicken Kachori", "urdu": "چکن کچوری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Samosa", "urdu": "سموسہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Aloo Samosa", "urdu": "آلو سموسہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Chicken Samosa", "urdu": "چکن سموسہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Vegetable Samosa", "urdu": "سبزی سموسہ", "time": "22 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Spring Rolls", "urdu": "اسپرنگ رول", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Chicken Spring Rolls", "urdu": "چکن اسپرنگ رول", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Vegetable Rolls", "urdu": "ویجیٹیبل رول", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "French Fries", "urdu": "فرنچ فرائز", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Loaded Fries", "urdu": "لوڈڈ فرائز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Masala Fries", "urdu": "مسالہ فرائز", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Chicken Nuggets", "urdu": "چکن نگٹس", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Chicken Wings", "urdu": "چکن ونگز", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Shami Kabab", "urdu": "شامی کباب", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Chapli Kabab", "urdu": "چپلی کباب", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Seekh Kabab", "urdu": "سیخ کباب", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Bun Kabab", "urdu": "بن کباب", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Anda Bun", "urdu": "انڈا بن", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Club Sandwich", "urdu": "کلب سینڈوچ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Chicken Sandwich", "urdu": "چکن سینڈوچ", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Vegetable Sandwich", "urdu": "ویجیٹیبل سینڈوچ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Cheese Sandwich", "urdu": "چیز سینڈوچ", "time": "8 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Egg Sandwich", "urdu": "انڈا سینڈوچ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Cake", "urdu": "کیک", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Chocolate Cake", "urdu": "چاکلیٹ کیک", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Vanilla Cake", "urdu": "وینیلا کیک", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

{ "name": "Cupcakes", "urdu": "کپ کیکس", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Cake Rusk", "urdu": "کیک رسک", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "sweet" },

{ "name": "Plain Rusk", "urdu": "سادہ رسک", "time": "3 min", "pressure": "-", "ratio": 1, "cat": "light" },
{ "name": "Biscuits", "urdu": "بسکٹ", "time": "2 min", "pressure": "-", "ratio": 1, "cat": "sweet" },

{ "name": "Butter Cookies", "urdu": "بٹر کوکیز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chocolate Cookies", "urdu": "چاکلیٹ کوکیز", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "sweet" },

{ "name": "Donuts", "urdu": "ڈونٹس", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Glazed Donut", "urdu": "گلیزڈ ڈونٹ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

{ "name": "Brownies", "urdu": "براونیز", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Chocolate Brownie", "urdu": "چاکلیٹ براونی", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

{ "name": "Pancakes", "urdu": "پین کیکس", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Waffles", "urdu": "وافلز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

{ "name": "Custard", "urdu": "کسٹرڈ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Fruit Chaat", "urdu": "فروٹ چاٹ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Chana Chaat", "urdu": "چنا چاٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Dahi Bhalla", "urdu": "دہی بھلے", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Gol Gappa", "urdu": "گول گپے", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Papri Chaat", "urdu": "پاپڑی چاٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Namak Para", "urdu": "نمک پارے", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "salty" },
{ "name": "Mathri", "urdu": "مٹھری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "salty" },

{ "name": "Suji Halwa", "urdu": "سوجی حلوہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Gajar Halwa", "urdu": "گاجر حلوہ", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

{ "name": "Jalebi", "urdu": "جلیبی", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Gulab Jamun", "urdu": "گلاب جامن", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

{ "name": "Barfi", "urdu": "برفی", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Lado", "urdu": "لڈو", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Biryani", "urdu": "بریانی", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dinner" },

  { "name": "Pakoray", "urdu": "پکوڑے", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Aloo Pakora", "urdu": "آلو پکوڑا", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Onion Pakora", "urdu": "پیاز پکوڑا", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Bread Pakora", "urdu": "بریڈ پکوڑا", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Chicken Pakora", "urdu": "چکن پکوڑا", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Puri", "urdu": "پوری", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Halwa Puri", "urdu": "حلوہ پوری", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Kachori", "urdu": "کچوری", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Daal Kachori", "urdu": "دال کچوری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Chicken Kachori", "urdu": "چکن کچوری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Samosa", "urdu": "سموسہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Aloo Samosa", "urdu": "آلو سموسہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Chicken Samosa", "urdu": "چکن سموسہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Vegetable Samosa", "urdu": "سبزی سموسہ", "time": "22 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Spring Rolls", "urdu": "اسپرنگ رول", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Chicken Spring Rolls", "urdu": "چکن اسپرنگ رول", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Vegetable Rolls", "urdu": "ویجیٹیبل رول", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "French Fries", "urdu": "فرنچ فرائز", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Loaded Fries", "urdu": "لوڈڈ فرائز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Masala Fries", "urdu": "مسالہ فرائز", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Chicken Nuggets", "urdu": "چکن نگٹس", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Chicken Wings", "urdu": "چکن ونگز", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Shami Kabab", "urdu": "شامی کباب", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Chapli Kabab", "urdu": "چپلی کباب", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Seekh Kabab", "urdu": "سیخ کباب", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Bun Kabab", "urdu": "بن کباب", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Anda Bun", "urdu": "انڈا بن", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Club Sandwich", "urdu": "کلب سینڈوچ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Chicken Sandwich", "urdu": "چکن سینڈوچ", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Vegetable Sandwich", "urdu": "ویجیٹیبل سینڈوچ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Cheese Sandwich", "urdu": "چیز سینڈوچ", "time": "8 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Egg Sandwich", "urdu": "انڈا سینڈوچ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Cake", "urdu": "کیک", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Chocolate Cake", "urdu": "چاکلیٹ کیک", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Vanilla Cake", "urdu": "وینیلا کیک", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Cupcakes", "urdu": "کپ کیکس", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Cake Rusk", "urdu": "کیک رسک", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Plain Rusk", "urdu": "سادہ رسک", "time": "3 min", "pressure": "-", "ratio": 1, "cat": "light" },
  { "name": "Biscuits", "urdu": "بسکٹ", "time": "2 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Butter Cookies", "urdu": "بٹر کوکیز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Chocolate Cookies", "urdu": "چاکلیٹ کوکیز", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Donuts", "urdu": "ڈونٹس", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Glazed Donut", "urdu": "گلیزڈ ڈونٹ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Brownies", "urdu": "براونیز", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Chocolate Brownie", "urdu": "چاکلیٹ براؤنی", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Pancakes", "urdu": "پین کیکس", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Waffles", "urdu": "وافلز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Custard", "urdu": "کسٹرڈ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Fruit Chaat", "urdu": "فروٹ چاٹ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Chana Chaat", "urdu": "چنا چاٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Dahi Bhalla", "urdu": "دہی بھلے", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Gol Gappa", "urdu": "گول گپے", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Papri Chaat", "urdu": "پاپڑی چاٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Namak Para", "urdu": "نمک پارے", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "salty" },
  { "name": "Mathri", "urdu": "مٹھری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "salty" },

  { "name": "Suji Halwa", "urdu": "سوجی حلوہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Gajar Halwa", "urdu": "گاجر حلوہ", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Jalebi", "urdu": "جلیبی", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Gulab Jamun", "urdu": "گلاب جامن", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Barfi", "urdu": "برفی", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Ladoo", "urdu": "لڈو", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Baingan Bharta", "urdu": "بینگن کا بھرتا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Aloo Bhujia", "urdu": "آلو کی بھجیا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Bhindi Masala", "urdu": "بھنڈی مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Karela Fry", "urdu": "کریلا فرائی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Shaljam Bhujia", "urdu": "شلجم کی بھجیا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Aloo Gobhi", "urdu": "آلو گوبھی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Tori Fry", "urdu": "توری کی بھجیا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Lauki Sabzi", "urdu": "لوکی کی سبزی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Mix Vegetable Curry", "urdu": "مکس سبزی سالن", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Palak Aloo", "urdu": "پالک آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Palak Paneer", "urdu": "پالک پنیر", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Methi Aloo", "urdu": "میتھی آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Matar Aloo", "urdu": "مٹر آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Chana Dal Lauki", "urdu": "چنے کی دال لوکی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Kadoo Sabzi", "urdu": "کدو کی سبزی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Aloo Tamatar", "urdu": "آلو ٹماٹر", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Bhindi Fry", "urdu": "بھنڈی فرائی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Karela Masala", "urdu": "کریلا مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Tinda Masala", "urdu": "ٹنڈا مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Arvi Fry", "urdu": "اروی فرائی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Arvi Masala", "urdu": "اروی مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Palak Sabzi", "urdu": "پالک سبزی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Sarson Ka Saag", "urdu": "سرسوں کا ساگ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Bathua Saag", "urdu": "بتھوا ساگ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Kaddu Chana", "urdu": "کدو چنا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Chana Masala", "urdu": "چنا مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Rajma Curry", "urdu": "راجما سالن", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Daal Tadka", "urdu": "دال تڑکا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Masoor Dal", "urdu": "مسور کی دال", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Moong Dal", "urdu": "مونگ کی دال", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Chana Dal", "urdu": "چنے کی دال", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Mix Dal", "urdu": "مکس دال", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Aloo Methi", "urdu": "آلو میتھی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Gobhi Masala", "urdu": "گوبھی مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Gobhi Fry", "urdu": "گوبھی فرائی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Capsicum Aloo", "urdu": "شملہ مرچ آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Capsicum Masala", "urdu": "شملہ مرچ مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Baingan Aloo", "urdu": "بینگن آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Baingan Curry", "urdu": "بینگن سالن", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Tori Aloo", "urdu": "توری آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Lauki Kofta", "urdu": "لوکی کوفتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Vegetable Kofta", "urdu": "سبزی کوفتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Paneer Butter Masala", "urdu": "پنیر بٹر مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Shahi Paneer", "urdu": "شاہی پنیر", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Paneer Bhurji", "urdu": "پنیر بھرجی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Vegetable Karahi", "urdu": "سبزی کڑاہی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Vegetable Jalfrezi", "urdu": "سبزی جلفریزی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Aloo Baingan Karahi", "urdu": "آلو بینگن کڑاہی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Bhindi Do Pyaza", "urdu": "بھنڈی دو پیازہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Karela Pyaz", "urdu": "کریلا پیاز", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },






{ "name": "Cucumber Raita", "urdu": "کھیرا رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Onion Raita", "urdu": "پیاز رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Carrot Raita", "urdu": "گاجر رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Beetroot Raita", "urdu": "چقندر رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Tomato Raita", "urdu": "ٹماٹر رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Spinach Raita", "urdu": "پالک رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Radish Raita", "urdu": "مولی رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Capsicum Raita", "urdu": "شملہ مرچ رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Cabbage Raita", "urdu": "بند گوبھی رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Corn Raita", "urdu": "مکئی رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },

{ "name": "Apple Raita", "urdu": "سیب رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Banana Raita", "urdu": "کیلا رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Mango Raita", "urdu": "آم رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Pomegranate Raita", "urdu": "انار رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Grapes Raita", "urdu": "انگور رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Pineapple Raita", "urdu": "انناس رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Strawberry Raita", "urdu": "اسٹرابیری رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Papaya Raita", "urdu": "پپیتا رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Watermelon Raita", "urdu": "تربوز رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Dates Raita", "urdu": "کھجور رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" }
]




const list = document.getElementById("list");

function show() {
  list.innerHTML = "";

  let s = document.getElementById("search").value.toLowerCase();
  let f = document.getElementById("filter").value;

  data.forEach(i => {
    let name = urdu ? i.urdu : i.name;

    if (name.toLowerCase().includes(s) && (f === "all" || i.cat === f)) {
      list.innerHTML += `
        <div class="card">
          <h3>${name}</h3>
          ⏱ ${urdu ? "وقت" : "Time"}: ${i.time}<br>
          ⚡ ${urdu ? "پریشر" : "Pressure"}: ${i.pressure}<br>
          💧 Ratio: ${i.ratio}
        </div>
      `;
    }
  });
}

function calc() {
  let t = document.getElementById("item").value;
  let a = document.getElementById("amount").value;

  if (!a) return;

  let r = 1;
  if (t === "rice") r = 1.8;
  if (t === "dal") r = 2;
  if (t === "meat") r = 1;
  if (t === "chana") r = 3;
  if (t === "dough") r = 0.5;

  let res = a * r;

  document.getElementById("result").innerHTML =
    (urdu ? "پانی: " : "Water: ") + res.toFixed(2);
}

function toggleLang() {
  urdu = !urdu;

  document.getElementById("title").innerText =
    urdu ? "🍳 کچن ماسٹر" : "🍳 Kitchen Master";

  document.getElementById("calcTitle").innerText =
    urdu ? "🧮 پانی کیلکولیٹر" : "🧮 Water Calculator";

  show();
}

window.onload = function () {
  document.getElementById("search").addEventListener("input", show);
  document.getElementById("filter").addEventListener("change", show);
  show();
};



const container = document.getElementById("card");
  

// 2. THIS is where your code goes 👇
data.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = item.name;

  const btn = document.createElement("button");
  btn.textContent = "Health benefits";
  btn.className = "benefit-btn";

  btn.addEventListener("click", () => {
    console.log("Clicked:", item.name);
  });

  card.appendChild(title);
  card.appendChild(btn);

  container.appendChild(card);
});
















// let urdu=false;

// const data=[





// const list=document.getElementById("list");

// function show(){
// list.innerHTML="";
// let s=document.getElementById("search").value.toLowerCase();
// let f=document.getElementById("filter").value;

// data.forEach(i=>{
// let name=urdu?i.urdu:i.name;
// if(name.toLowerCase().includes(s)&&(f==="all"||i.cat===f)){
// list.innerHTML+=`<div class="card">
// <h3>${name}</h3>
// ⏱ ${urdu?"عام وقت":"Normal"}: ${i.time}<br>
// ⚡ ${urdu?"پریشر":"Pressure"}: ${i.pressure}<br>
// 💧 Ratio: ${i.ratio}
// </div>`;
// }
// });
// }

// function calc(){
// let t=document.getElementById("item").value;
// let a=document.getElementById("amount").value;
// if(!a)return;
// let r=1;
// if(t==="rice")r=1.8;
// if(t==="dal")r=2;
// if(t==="meat")r=1;
// if(t==="chana")r=3;
// if(t==="dough")r=0.5;
// let res=a*r;
// document.getElementById("result").innerHTML=(urdu?"پانی: ":"Water: ")+res.toFixed(2);
// }

// function toggleLang(){
// urdu=!urdu;
// document.getElementById("title").innerText=urdu?"🍳 کچن ماسٹر":"🍳 Kitchen Master";
// document.getElementById("calcTitle").innerText=urdu?"🧮 پانی کیلکولیٹر":"🧮 Water Calculator";
// show();
// }
// {
// window.onload = function () {
//   document.getElementById("search").addEventListener("input", show);
//   document.getElementById("filter").addEventListener("change", show);
//   show();
//  }

});


