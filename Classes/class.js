class Animal{
    constructor(name,type,age){
        this.name = name;
        this.type = type;
        this.age = age;
    }

    speak(){
        console.log(this.type + ' ' + "makes noice") 
    }
}

//inheritance
class dog extends Animal {
    speak(){
        console.log(this.type + ' ' + "makes noice") 
    }
}

const myAnimal = new Animal("animal","reguler",10)
console.log(myAnimal)
console.log(myAnimal.speak())


const myDog = new dog('rex','dog',5)
console.log(myDog.speak())

//Overide the parent class method in child class

