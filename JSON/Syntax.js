const details = '{"name":"John"}';
console.log(details.name);
console.log(typeof details);

person = {name:"John", age:31, city:"New York"};

// returns John
person.name;
console.log(person.name);
//It can also be accessed like this:

// returns John
person["name"];
console.log(person["name"]);

//Data can be modified like this:

person.name = "Gilbert";

// or like this:

person["name"] = "Gilbert";