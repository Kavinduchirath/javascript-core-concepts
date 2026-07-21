const myProminse = new Promise((resolve,reject) => {
    const myRandomNumber = Math.round()
    console.log(myRandomNumber)
    if (myRandomNumber > 0.5) {
        resolve("Accespted")
    } else {
        reject("Rejected")
    }
})

myProminse.then((res) => {
    document.getElementById("result").textContent = res
}).catch((err) =>{
    document.getElementById("result").textContent = err
})