function name(value_one,value_two,callback) {
    let sum;
    sum = value_one + value_two
    callback(sum)
}

function Output(result) {
    console.log("The sum is : " + result ) 
}

name(25, 10, Output);

setTimeout(() => {
    console.log("This will be printed after 2 seconds");
}, 2000);

