let myArray = [10,20,30,40,50,60,70,80];

// for (let index = 0; index < myArray.length; index++) {
//     console.log(myArray[index])
// }

function sumOfElements(params) {
    let sum = 0;
     for (let i = 0; i < params.length; i++) {
        sum = sum + params[i]
    }
    return sum
}

const logResult = async () => {
let result = await sumOfElements(myArray)
console.log(result)
}

function sumToHunred(params) {
    let sum = 0;
    for (let index = 0; index < 100; index++) {
       sum += index
    }
    return sum
}

const logHundred = async (params) => {
    let result = await sumToHunred()
    console.log(result)
}

function sumTothousand(params) {
    let sum = 0;
    for (let index = 0; index < 1000; index++) {
       sum += index
    }
    return sum
}

const logThounsand = async (params) => {
    let result = await sumTothousand()
    console.log(result)
}


console.log(sumOfElements(myArray))
logThounsand()
logHundred()
logResult()



