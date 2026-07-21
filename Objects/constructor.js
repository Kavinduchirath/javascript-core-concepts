function Dog(name,age,bark){
    this.name = name;
    this.age = age;
    this.bark = bark;
}

const myDog = new Dog('tommy',12,()=>{console.log('Woof')})

console.log(myDog)
console.log(myDog.bark())