const numbers_array = [10,20,30,40,50,60]
console.log(numbers_array[1])

const [one,two,three,four,five,six] = numbers_array
console.log(one)

function useStateX() {
    return[10,20]
}

function useState(value) {
    return[value,() => {console.log("this is from function")}]
}

const [state,setState] = useState(55)

console.log(state)
console.log(setState)