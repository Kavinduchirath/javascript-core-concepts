const myCar = {
    brand:"Ford",
    model:"mustang",
    year:2025
}

Object.seal(myCar)

//We can modify value of property
myCar.year = 2024

//But we can't modify or add a new property by seal method
myCar.origin = "USA";

Object.freeze(myCar)
//Both aren't work no modify value or add property

//iterate among object

const keys = Object.keys(myCar)
const values = Object.values(myCar)