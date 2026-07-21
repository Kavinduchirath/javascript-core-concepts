//Use the JavaScript object in your page:

const txt = '{"name":"John", "age":30, "city":"New York"}'
const myObj = JSON.parse(txt);
console.log(typeof myObj);
console.log(myObj);

console.log();

//When using the JSON.parse() on a JSON derived from an array, 
//the method will return a JavaScript array, instead of a JavaScript object.

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(typeof myArr);
console.log(myArr);

console.log();
//Parsing Functions

//Functions are not allowed in JSON.
//If you need to include a function, write it as a string.
//You can convert it back into a function later:

const info = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj = JSON.parse(info);
obj.age = eval("(" + obj.age + ")");
console.log(obj.age());


console.log();
// Exceptions
// Parsing Dates
// Date objects are not allowed in JSON.

// If you need to include a date, write it as a string.

// You can convert it back into a date object later:

const details = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const objInfo = JSON.parse(details);
objInfo.birth = new Date(objInfo.birth);
console.log(objInfo.name + ", " + objInfo.birth);

//or another approach is to use the reviver parameter of the JSON.parse() method to convert the date string into a Date object:

const details = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const objDetail = JSON.parse(details, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});

console.log(objDetail.name + ", " + objDetail.birth);