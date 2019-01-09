var name = 'John';
var age = 26;

console.log('Is ' + name + ' married? ' + age);

// Functions
function calculateAge(birthdate) {
  return 2018 - birthdate;
}

let ageA = calculateAge(2012);
let ageB = calculateAge(1966);
let ageC = calculateAge(1911);

console.log(ageA, ageB, ageC);

/* Function Expression
value binding
whatdoyoudo is a binding, vlaue being the function declaration
*/
var whatDoYouDo = function (occupation, firstName) {
  switch (occupation) {
    case 'teaching':
      return firstName + ' teaches how to code';
    case 'firefighter':
      return firstName + ' fights fires';
    default:
      return 'God knows what ' + firstName + ' does';
  }
};

console.log(whatDoYouDo('teaching', 'Ravikanth'));
console.log(whatDoYouDo('hahaha', 'kanye'));
console.log(whatDoYouDo('firefighter', 'Anand'));

// 3rd way to declare function
const fn3 = (base, exponent) => {
  let result = base;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

console.log("power function", fn3(2, 5));

const fn4 = (base, exponent) => {
  let result = base;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

console.log("power function", fn3(2, 5));

// properties

name = "raci";
console.log(typeof name.toUpperCase);
console.log(typeof name.toUpperCase());

// arrays
let arr1 = ['ravi', 1];
console.log(arr1);

arr1.push('kanye', 'halamney', 32);
console.log(arr1);

arr1.pop();
console.log(arr1);

arr1.shift('hahahaha');
console.log(arr1);

arr1.unshift('dwq');
console.log(arr1);

delete name.toUpperCase;

console.log(name.toUpperCase());

let anOnbject = {
  name: "Ravikanth",
  "age is": 28
};

delete anOnbject["age is"];

console.log(anOnbject["age is"]);

console.log(Object.keys(anOnbject));

console.log(Object.keys(arr1));

// correlatioon example
/* journal : [
    { events : ... ,
      isSqurrel : boolean
    }
  ]
 */


var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

let journal = [];

function addEntry(entry, isSquirrel) {
  journal.push({entry, isSquirrel});
}

function phi(table) {
  let numerator = table[3] * table[0] - table[2] * table[1];
  let denominator = Math.sqrt(
      (table[3] + table[2]) * (table[3] + table[1]) * (table[1] + table[0])
      * (table[0] + table[2]));
  return numerator / denominator;
}

function extracted(journal) {
  let entries = [];
  for (let row of journal) {
    for (let e of row.events) {
      if (!entries.includes(e)) {
        entries.push(e);
      }
    }
  }
  return entries;
}

// get me all events
let allEntries = extracted(JOURNAL);


// get table for event
// 11, 10, 01, 00
function getTableDataForEvent(journal, event){
  let table = [0, 0, 0, 0];
  for (let row of journal) {
    if (!row.events.includes(event)){
      row.squirrel ? table[1]++ : table[0]++;
    }else {
      row.squirrel ? table[3]++ : table[2]++;
    }
  }
  return table;
}

for (let e of allEntries){
  console.log("Coefficient for event ", e, phi(getTableDataForEvent(JOURNAL, e)));
}


// add brushed teeth peanut
for (let row of JOURNAL){
  if (!row.events.includes("brushed teeth") && row.events.includes("peanuts")){
    row.events.push("bad smell peanuts");
  }
}

console.log("Coefficient for event ", "bad smell peanuts", phi(getTableDataForEvent(JOURNAL, "bad smell peanuts")));


// Strings

// unpack
// pass ... to unpack

let cmp = function (word, ... words) {
  for (w of words){
    if(w === (word)){
      return true;
    }
  }
  return false;
};

let myDict = [];
myDict.push("a");
myDict.push("b");
myDict.push("c");

console.log(cmp("hi", ... myDict, "hi", "hello"));

let fun = 1;

// Destructuring
/*
let {name} = {name : 'Ravi', age : 28 }
console.log(name)
 */
let {kaaya} = {kaaya:'Ravilantj', age : 1};
console.log(kaaya);

// js object stringify
let o1 = {
  high  : cmp("1")
};

let s = JSON.stringify(o1);
console.log(s);

// array reverse
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length/2; i++){
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}

console.log(arr);