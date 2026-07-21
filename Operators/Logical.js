let a = 2
let b = 3
let c = 4

//And operator
if (a==2 && b==2) {
    console.log("True")
} else {
    console.log(("False"))
}

//OR operator
if (a==2 || b==2) {
    console.log("True")
} else {
    console.log(("False"))
}

//Not operator
if (!(a==2 && b==2)) {
    console.log("True")
} else {
    console.log(("False"))
}

//Nullish 
const sometextu = ""
const u = sometextu || "Hi"
console.log(u)

const sometext = ""
const x = sometext ?? "Hi"
console.log(x)