const cars = ["Ford","Audi","toyota","byd"]

const items = cars.toString()
console.log(items)

console.log(cars.at(1))

//convert array to string
console.log(cars.join(" "))

//insert new element to array
cars.push("benz")
console.log(cars)

//remove an element of array
cars.pop()

const bikes = ["honda","yamaha","tvs"]

const vehicals = cars.concat(bikes)
console.log(vehicals)

