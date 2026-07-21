let variable = "JavaScripts";

function demoFuncOne(params) {
    let variable = "TypeScript"; //local variable
    console.log(variable);
}

function demoFuncTwo(params) {
    variable = "React";
    console.log(variable) ;
}

demoFuncOne()
console.log(variable) //Output will be  JavaScripts no Change value of variable
console.log()
demoFuncTwo() //Variable value will be change beacase override the variable in the function
console.log(variable)

