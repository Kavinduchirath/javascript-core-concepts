const dog = {
    name:"Zone",
    age:26,
    bark: ()=>{
        console.log("Woof")
    }
}

console.log(dog.age)
console.log(dog.bark())

//Access values by using squre brackets
console.log(dog['name'])

//Acecess by variable
const accessVarible = 'name'
console.log(dog[accessVarible])

//Adding a new property 
dog.location = "Galle"
console.log(dog)

//Nested Objects
const cars = {
    car1:{
        model:"Mustang",
        origin:"America"
    },
    car2:{
        model:"toyota",
        origin:"japan"
    },
    car3:{
        model:"Audi",
        origin:"Germeny"
    }
}

console.log(cars.car1.model)