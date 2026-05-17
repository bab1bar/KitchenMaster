


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
  { "name": "Milk", "urdu": "دودھ", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "other" }
];

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

















// let urdu=false;

// const data=[


// // {"name":"Basmati Rice",urdu:"باسمتی چاول",time:"8-10 min",pressure:"3-4 min",ratio:1.8,cat:"rice"},
// // {"name":"Sella Rice",urdu:"سیلہ چاول",time:"11-12 min",pressure:"5-6 min",ratio:2.2,cat:"rice"},
// // {"name":"Pulao Rice",urdu:"پلاؤ چاول",time:"10 min",pressure:"4 min",ratio:1.75,cat:"rice"},
// // {"name":"Boiled Rice",urdu:"ابلے چاول",time:"10 min",pressure:"3 min",ratio:2,cat:"rice"},
// // {"name":"Fried Rice",urdu:"فرائیڈ رائس",time:"12 min",pressure:"-",ratio:1.5,cat:"rice"},
// // {"name":"Dal Masoor",urdu:"مسور دال",time:"20 min",pressure:"6-8 min",ratio:2,cat:"dal"},
// // {"name":"Dal Moong",urdu:"مونگ دال",time:"20 min",pressure:"5-7 min",ratio:2,cat:"dal"},
// // {"name":"Dal Chana",urdu:"چنا دال",time:"35 min",pressure:"8-10 min",ratio:3,cat:"dal"},
// // {"name":"Dal Mash",urdu:"ماش دال",time:"30 min",pressure:"10-12 min",ratio:2.5,cat:"dal"},
// // {"name":"Mixed Dal",urdu:"مکس دال",time:"25 min",pressure:"8 min",ratio:2.5,cat:"dal"},
// // {"name":"Chicken",urdu:"چکن",time:"15 min",pressure:"4-6 min",ratio:1,cat:"meat"},
// // {"name":"Chicken Qeema",urdu:"چکن قیمہ",time:"10 min",pressure:"3-5 min",ratio:0.5,cat:"meat"},
// // {"name":"Chicken Karahi",urdu:"چکن کڑاہی",time:"25 min",pressure:"8 min",ratio:0.8,cat:"meat"},
// // {"name":"Mutton",urdu:"بکرا گوشت",time:"25 min",pressure:"10-12 min",ratio:1,cat:"meat"},
// // {"name":"Mutton Karahi",urdu:"مٹن کڑاہی",time:"35 min",pressure:"12 min",ratio:0.8,cat:"meat"},
// // {"name":"Beef",urdu:"گائے کا گوشت",time:"40 min",pressure:"30-40 min",ratio:1.2,cat:"meat"},
// // {"name":"Beef Nihari",urdu:"نہاری",time:"90 min",pressure:"40 min",ratio:2,cat:"meat"},
// // {"name":"Beef Paya",urdu:"پائے",time:"120 min",pressure:"50 min",ratio:2,cat:"meat"},
// // {"name":"Chana",urdu:"چنے",time:"60 min",pressure:"12-15 min",ratio:3,cat:"other"},
// // {"name":"Lobia",urdu:"لوبیا",time:"50 min",pressure:"18-20 min",ratio:3,cat:"other"},
// // {"name":"Rajma",urdu:"راجما",time:"55 min",pressure:"20 min",ratio:3,cat:"other"},
// // {"name":"White Chana",urdu:"سفید چنے",time:"60 min",pressure:"15 min",ratio:3,cat:"other"},
// // {"name":"Black Chana",urdu:"کالے چنے",time:"65 min",pressure:"15 min",ratio:3,cat:"other"},
// // {"name":"Potato",urdu:"آلو",time:"20 min",pressure:"5-7 min",ratio:1,cat:"veg"},
// // {"name":"Potato Fry",urdu:"آلو فرائی",time:"15 min",pressure:"-",ratio:0,cat:"veg"},
// // {"name":"Spinach",urdu:"پالک",time:"10 min",pressure:"2-3 min",ratio:0.5,cat:"veg"},
// // {"name":"Brinjal",urdu:"بینگن",time:"15 min",pressure:"5 min",ratio:0.7,cat:"veg"},
// // {"name":"Carrot",urdu:"گاجر",time:"15 min",pressure:"6 min",ratio:0.7,cat:"veg"},
// // {"name":"Turnip",urdu:"شلجم",time:"18 min",pressure:"8 min",ratio:0.8,cat:"veg"},
// // {"name":"Peas",urdu:"مٹر",time:"10 min",pressure:"3 min",ratio:0.5,cat:"veg"},
// // {"name":"Cabbage",urdu:"بند گوبھی",time:"12 min",pressure:"4 min",ratio:0.5,cat:"veg"},
// // {"name":"Cauliflower",urdu:"پھول گوبھی",time:"15 min",pressure:"5 min",ratio:0.6,cat:"veg"},
// // {"name":"Okra",urdu:"بھنڈی",time:"12 min",pressure:"-",ratio:0.4,cat:"veg"},
// // {"name":"Egg",urdu:"انڈا",time:"8 min",pressure:"3 min",ratio:0,cat:"other"},
// // {"name":"Half Fry Egg",urdu:"ہاف فرائی",time:"3 min",pressure:"-",ratio:0,cat:"other"},
// // {"name":"Tea",urdu:"چائے",time:"5 min",pressure:"-",ratio:1,cat:"other"},
// // {"name":"Milk",urdu:"دودھ",time:"5 min",pressure:"-",ratio:1,cat:"other"},
// // {"name":"Noodles",urdu:"نوڈلز",time:"5 min",pressure:"-",ratio:2,cat:"other"},
// // {"name":"Maggi",urdu:"میگی",time:"2 min",pressure:"-",ratio:1.5,cat:"other"},
// // {"name":"Soup Chicken",urdu:"چکن سوپ",time:"20 min",pressure:"6 min",ratio:3,cat:"other"},
// // {"name":"Soup Veg",urdu:"ویج سوپ",time:"15 min",pressure:"5 min",ratio:3,cat:"other"},
// // {"name":"Dough",urdu:"آٹا",time:"-",pressure:"-",ratio:0.5,cat:"other"},
//   { "id": 1, "name": "Biryani", "urduName": "بریانی", "time": 40, "flavor": "spicy", "type": "dinner" },
//   { "id": 2, "name": "Pakoray", "urduName": "پکوڑے", "time": 15, "flavor": "spicy", "type": "evening" },
//   { "id": 3, "name": "Aloo Pakora", "urduName": "آلو پکوڑا", "time": 15, "flavor": "spicy", "type": "evening" },
//   { "id": 4, "name": "Onion Pakora", "urduName": "پیاز پکوڑا", "time": 12, "flavor": "spicy", "type": "evening" },
//   { "id": 5, "name": "Bread Pakora", "urduName": "بریڈ پکوڑا", "time": 10, "flavor": "savory", "type": "evening" },
//   { "id": 6, "name": "Chicken Pakora", "urduName": "چکن پکوڑا", "time": 18, "flavor": "spicy", "type": "evening" },
//   { "id": 7, "name": "Puri", "urduName": "پوری", "time": 20, "flavor": "savory", "type": "evening" },
//   { "id": 8, "name": "Halwa Puri", "urduName": "حلوہ پوری", "time": 35, "flavor": "sweet", "type": "evening" },
//   { "id": 9, "name": "Kachori", "urduName": "کچوری", "time": 25, "flavor": "spicy", "type": "evening" },
//   { "id": 10, "name": "Daal Kachori", "urduName": "دال کچوری", "time": 30, "flavor": "spicy", "type": "evening" },
//   { "id": 11, "name": "Chicken Kachori", "urduName": "چکن کچوری", "time": 30, "flavor": "savory", "type": "evening" },
//   { "id": 12, "name": "Samosa", "urduName": "سموسہ", "time": 25, "flavor": "spicy", "type": "evening" },
//   { "id": 13, "name": "Aloo Samosa", "urduName": "آلو سموسہ", "time": 20, "flavor": "spicy", "type": "evening" },
//   { "id": 14, "name": "Chicken Samosa", "urduName": "چکن سموسہ", "time": 25, "flavor": "savory", "type": "evening" },
//   { "id": 15, "name": "Vegetable Samosa", "urduName": "سبزی سموسہ", "time": 22, "flavor": "savory", "type": "evening" },
//   { "id": 16, "name": "Spring Rolls", "urduName": "اسپرنگ رول", "time": 20, "flavor": "savory", "type": "evening" },
//   { "id": 17, "name": "Chicken Spring Rolls", "urduName": "چکن اسپرنگ رول", "time": 25, "flavor": "savory", "type": "evening" },
//   { "id": 18, "name": "Vegetable Rolls", "urduName": "ویجیٹیبل رول", "time": 18, "flavor": "savory", "type": "evening" },
//   { "id": 19, "name": "French Fries", "urduName": "فرنچ فرائز", "time": 15, "flavor": "salty", "type": "evening" },
//   { "id": 20, "name": "Loaded Fries", "urduName": "لوڈڈ فرائز", "time": 20, "flavor": "savory", "type": "evening" },
//   { "id": 21, "name": "Masala Fries", "urduName": "مسالہ فرائز", "time": 18, "flavor": "spicy", "type": "evening" },
//   { "id": 22, "name": "Chicken Nuggets", "urduName": "چکن نگٹس", "time": 15, "flavor": "savory", "type": "evening" },
//   { "id": 23, "name": "Chicken Wings", "urduName": "چکن ونگز", "time": 25, "flavor": "spicy", "type": "evening" },
//   { "id": 24, "name": "Shami Kabab", "urduName": "شامی کباب", "time": 20, "flavor": "spicy", "type": "evening" },
//   { "id": 25, "name": "Chapli Kabab", "urduName": "چپلی کباب", "time": 25, "flavor": "spicy", "type": "evening" },
//   { "id": 26, "name": "Seekh Kabab", "urduName": "سیخ کباب", "time": 20, "flavor": "spicy", "type": "evening" },
//   { "id": 27, "name": "Bun Kabab", "urduName": "بن کباب", "time": 15, "flavor": "savory", "type": "evening" },
//   { "id": 28, "name": "Anda Bun", "urduName": "انڈا بن", "time": 10, "flavor": "savory", "type": "evening" },
//   { "id": 29, "name": "Club Sandwich", "urduName": "کلب سینڈوچ", "time": 15, "flavor": "savory", "type": "evening" },
//   { "id": 30, "name": "Chicken Sandwich", "urduName": "چکن سینڈوچ", "time": 12, "flavor": "savory", "type": "evening" },
//   { "id": 31, "name": "Vegetable Sandwich", "urduName": "ویجیٹیبل سینڈوچ", "time": 10, "flavor": "light", "type": "evening" },
//   { "id": 32, "name": "Cheese Sandwich", "urduName": "چیز سینڈوچ", "time": 8, "flavor": "creamy", "type": "evening" },
//   { "id": 33, "name": "Egg Sandwich", "urduName": "انڈا سینڈوچ", "time": 10, "flavor": "savory", "type": "evening" },
//   { "id": 34, "name": "Cake", "urduName": "کیک", "time": 35, "flavor": "sweet", "type": "evening" },
//   { "id": 35, "name": "Chocolate Cake", "urduName": "چاکلیٹ کیک", "time": 40, "flavor": "sweet", "type": "evening" },
//   { "id": 36, "name": "Vanilla Cake", "urduName": "وینیلا کیک", "time": 35, "flavor": "sweet", "type": "evening" },
//   { "id": 37, "name": "Cupcakes", "urduName": "کپ کیکس", "time": 30, "flavor": "sweet", "type": "evening" },
//   { "id": 38, "name": "Cake Rusk", "urduName": "کیک رسک", "time": 5, "flavor": "sweet", "type": "evening" },
//   { "id": 39, "name": "Plain Rusk", "urduName": "سادہ رسک", "time": 3, "flavor": "light", "type": "evening" },
//   { "id": 40, "name": "Biscuits", "urduName": "بسکٹ", "time": 2, "flavor": "sweet", "type": "evening" },
//   { "id": 41, "name": "Butter Cookies", "urduName": "بٹر کوکیز", "time": 20, "flavor": "sweet", "type": "evening" },
//   { "id": 42, "name": "Chocolate Cookies", "urduName": "چاکلیٹ کوکیز", "time": 25, "flavor": "sweet", "type": "evening" },
//   { "id": 43, "name": "Donuts", "urduName": "ڈونٹس", "time": 30, "flavor": "sweet", "type": "evening" },
//   { "id": 44, "name": "Glazed Donut", "urduName": "گلیزڈ ڈونٹ", "time": 25, "flavor": "sweet", "type": "evening" },
//   { "id": 45, "name": "Brownies", "urduName": "براونیز", "time": 30, "flavor": "sweet", "type": "evening" },
//   { "id": 46, "name": "Chocolate Brownie", "urduName": "چاکلیٹ براونی", "time": 35, "flavor": "sweet", "type": "evening" },
//   { "id": 47, "name": "Pancakes", "urduName": "پین کیکس", "time": 15, "flavor": "sweet", "type": "evening" },
//   { "id": 48, "name": "Waffles", "urduName": "وافلز", "time": 20, "flavor": "sweet", "type": "evening" },
//   { "id": 49, "name": "Custard", "urduName": "کسٹرڈ", "time": 15, "flavor": "sweet", "type": "evening" },
//   { "id": 50, "name": "Fruit Chaat", "urduName": "فروٹ چاٹ", "time": 10, "flavor": "sweet", "type": "evening" },
//   { "id": 51, "name": "Chana Chaat", "urduName": "چنا چاٹ", "time": 15, "flavor": "spicy", "type": "evening" },
//   { "id": 52, "name": "Dahi Bhalla", "urduName": "دہی بھلے", "time": 20, "flavor": "tangy", "type": "evening" },
//   { "id": 53, "name": "Gol Gappa", "urduName": "گول گپے", "time": 15, "flavor": "tangy", "type": "evening" },
//   { "id": 54, "name": "Papri Chaat", "urduName": "پاپڑی چاٹ", "time": 15, "flavor": "tangy", "type": "evening" },
//   { "id": 55, "name": "Namak Para", "urduName": "نمک پارے", "time": 25, "flavor": "salty", "type": "evening" },
//   { "id": 56, "name": "Mathri", "urduName": "مٹھری", "time": 30, "flavor": "salty", "type": "evening" },
//   { "id": 57, "name": "Suji Halwa", "urduName": "سوجی حلوہ", "time": 20, "flavor": "sweet", "type": "evening" },
//   { "id": 58, "name": "Gajar Halwa", "urduName": "گاجر حلوہ", "time": 40, "flavor": "sweet", "type": "evening" },
//   { "id": 59, "name": "Jalebi", "urduName": "جلیبی", "time": 25, "flavor": "sweet", "type": "evening" },
//   { "id": 60, "name": "Gulab Jamun", "urduName": "گلاب جامن", "time": 30, "flavor": "sweet", "type": "evening" },
//   { "id": 61, "name": "Barfi", "urduName": "برفی", "time": 35, "flavor": "sweet", "type": "evening" },
//   { "id": 62, "name": "Ladoo", "urduName": "لڈو", "time": 30, "flavor": "sweet", "type": "evening" },

//   { "name": "Biryani / بریانی", "time": 40, "flavor": "spicy", "type": "dinner" },
//   { "name": "Kheer / کھیر", "time": 35, "flavor": "sweet", "type": "dessert" },
//   { "name": "Custard / کسٹرڈ", "time": 20, "flavor": "sweet", "type": "dessert" },
//   { "name": "Trifle / ٹرائفل", "time": 25, "flavor": "sweet", "type": "dessert" },
//   { "name": "Gulab Jamun / گلاب جامن", "time": 30, "flavor": "sweet", "type": "dessert" },
//   { "name": "Jalebi / جلیبی", "time": 25, "flavor": "sweet", "type": "dessert" },
//   { "name": "Barfi / برفی", "time": 35, "flavor": "sweet", "type": "dessert" },
//   { "name": "Rasgulla / رس گلہ", "time": 30, "flavor": "sweet", "type": "dessert" },
//   { "name": "Halwa / حلوہ", "time": 20, "flavor": "sweet", "type": "dessert" },
//   { "name": "Suji Halwa / سوجی کا حلوہ", "time": 15, "flavor": "sweet", "type": "dessert" },

//   { "name": "Pakoray / پکوڑے", "time": 15, "flavor": "spicy", "type": "snack" },
//   { "name": "Samosa / سموسہ", "time": 25, "flavor": "spicy", "type": "snack" },
//   { "name": "Spring Rolls / اسپرنگ رولز", "time": 30, "flavor": "savory", "type": "snack" },
//   { "name": "Shami Kebab / شامی کباب", "time": 35, "flavor": "spicy", "type": "snack" },
//   { "name": "Chapli Kebab / چپلی کباب", "time": 25, "flavor": "spicy", "type": "snack" },
//   { "name": "Fries / فرنچ فرائز", "time": 15, "flavor": "salty", "type": "snack" },
//   { "name": "Chicken Nuggets / چکن نگٹس", "time": 20, "flavor": "savory", "type": "snack" },
//   { "name": "Sandwich / سینڈوچ", "time": 10, "flavor": "savory", "type": "snack" },
//   { "name": "Chaat / چاٹ", "time": 15, "flavor": "tangy", "type": "snack" },
//   { "name": "Dahi Bhalla / دہی بھلے", "time": 20, "flavor": "tangy", "type": "snack" },

//   { "name": "Tea / چائے", "time": 10, "flavor": "mild", "type": "drink" },
//   { "name": "Green Tea / سبز چائے", "time": 5, "flavor": "mild", "type": "drink" },
//   { "name": "Kashmiri Chai / کشمیری چائے", "time": 20, "flavor": "mild", "type": "drink" },
//   { "name": "Coffee / کافی", "time": 10, "flavor": "bitter", "type": "drink" },
//   { "name": "Milkshake / ملک شیک", "time": 10, "flavor": "sweet", "type": "drink" },
//   { "name": "Lassi / لسی", "time": 10, "flavor": "sweet", "type": "drink" },
//   { "name": "Rooh Afza Drink / روح افزا", "time": 5, "flavor": "sweet", "type": "drink" },
//   { "name": "Lemonade / لیمونیڈ", "time": 5, "flavor": "tangy", "type": "drink" },

//   { "name": "Cake / کیک", "time": 40, "flavor": "sweet", "type": "dessert" },
//   { "name": "Chocolate Cake / چاکلیٹ کیک", "time": 45, "flavor": "sweet", "type": "dessert" },
//   { "name": "Cupcakes / کپ کیکس", "time": 30, "flavor": "sweet", "type": "dessert" },
//   { "name": "Cake Rusk / کیک رسک", "time": 35, "flavor": "sweet", "type": "snack" },
//   { "name": "Biscuits / بسکٹ", "time": 20, "flavor": "sweet", "type": "snack" },
//   { "name": "Donuts / ڈونٹس", "time": 35, "flavor": "sweet", "type": "dessert" },
//   { "name": "Brownies / براؤنی", "time": 30, "flavor": "sweet", "type": "dessert" },

//   { "name": "Pulao / پلاؤ", "time": 30, "flavor": "mild", "type": "dinner" },
//   { "name": "Karahi / کڑاہی", "time": 35, "flavor": "spicy", "type": "dinner" },
//   { "name": "Nihari / نہاری", "time": 120, "flavor": "spicy", "type": "dinner" },
//   { "name": "Haleem / حلیم", "time": 90, "flavor": "spicy", "type": "dinner" },
//   { "name": "Daal Chawal / دال چاول", "time": 25, "flavor": "mild", "type": "dinner" },
//   { "name": "Chana Masala / چنا مصالحہ", "time": 30, "flavor": "spicy", "type": "dinner" },

//   { "name": "Paratha / پراٹھا", "time": 15, "flavor": "savory", "type": "breakfast" },
//   { "name": "Omelette / آملیٹ", "time": 10, "flavor": "savory", "type": "breakfast" },
//   { "name": "Boiled Egg / اُبلا انڈا", "time": 8, "flavor": "mild", "type": "breakfast" },
//   { "name": "Halwa Puri / حلوہ پوری", "time": 25, "flavor": "sweet", "type": "breakfast" },
//   { "name": "Cholay / چنے", "time": 30, "flavor": "spicy", "type": "breakfast" },

//   { "name": "Ice Cream / آئس کریم", "time": 5, "flavor": "sweet", "type": "dessert" },
//   { "name": "Falooda / فالودہ", "time": 15, "flavor": "sweet", "type": "dessert" },
//   { "name": "Kulfi / قلفی", "time": 240, "flavor": "sweet", "type": "dessert" },

//   { "name": "Fruit Salad / فروٹ چاٹ", "time": 15, "flavor": "sweet", "type": "snack" },
//   { "name": "Popcorn / پاپ کارن", "time": 10, "flavor": "salty", "type": "snack" },
//   { "name": "Roasted Chana / بھنے چنے", "time": 10, "flavor": "salty", "type": "snack" },
//   { "name": "Corn Chat / مکئی چاٹ", "time": 15, "flavor": "tangy", "type": "snack" },

//   { "name": "Bread Butter / بریڈ بٹر", "time": 5, "flavor": "mild", "type": "breakfast" },
//   { "name": "Jam Toast / جام ٹوسٹ", "time": 5, "flavor": "sweet", "type": "breakfast" },
//   { "name": "Honey Toast / شہد ٹوسٹ", "time": 5, "flavor": "sweet", "type": "breakfast" }
// ];





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


