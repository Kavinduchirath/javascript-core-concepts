const myName = "Kavindu"
console.log(myName)

let myArray = [10,20,30,40,55,60,80]

console.log()

let sum = 0;

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    sum = sum + element
}

function calcSum(sum) {
    for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    sum = sum + element
    }
    console.log(sum)
}

function myAge() {
    const age = 22
    return age;
}

const result = myAge()
console.log(result)