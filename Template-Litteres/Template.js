let firstname = "Kavindu";
let surname = "Chirath";
let age = 24;

console.log(firstname +" "+ surname+" "+ age)
console.log(`${firstname} ${surname} is ${age}`)

let domElement = `<h2> My name is ${firstname} ${surname}  age is ${age}</h2>`
document.getElementById("element").innerHTML = domElement;

function HellowFucntion(params) {
    return "This From Hellow Function"
}

document.getElementById("text").textContent = `${HellowFucntion()}`

