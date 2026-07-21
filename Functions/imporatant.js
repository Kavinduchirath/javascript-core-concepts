//if we want to get return value to console we should follow following instructions.we must put () bracket after function name.Like  line number 44 and 47
function Notify() {
    return "Hellow"
}

get = Notify()
console.log(get)

console.log(Notify())

//Another type using Arrow fucntion don't need
let WithOut = () => {
    console.log("Test")
}

let With = () => {
    return("Testg")
}

With() //No work becase return
console.log(With())

WithOut()

function Hi() {
    console.log("hhhhhhh")
}

Hi()