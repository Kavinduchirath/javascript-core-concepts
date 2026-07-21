const myJSON = '{"name":"John", "age":30, "car":null, "status":true}';
const myObj = JSON.parse(myJSON);

x = myObj["name"];
console.log(x);

y = myObj["status"];
console.log(y);

mycar = myObj.car;
console.log(mycar);

console.log("type of myObj:", typeof myObj);
console.log("myObj:", myObj);