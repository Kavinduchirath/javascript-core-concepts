//Variable Approach
const VarPromise = new Promise((resolve,reject) => {
    const randomNum = Math.random()
    if (randomNum > 0.5) {
        resolve("MORE THAN 0.5")
    } else {
        reject("LESS THAN 0.5")
    }
})

VarPromise.then((res)=>{
    document.getElementById("result").textContent = res
}).catch((err)=>{
    document.getElementById("result").textContent = err
}).finally(()=>{
    document.getElementById("final").textContent = "ALL DONE"
})

//Functional Approach
function FunProminse() {
    return new Promise((resolve,reject) => {
    const randomNum = Math.random()
    if (randomNum > 0.5) {
        resolve("MORE THAN 0.5")
    } else {
        reject("LESS THAN 0.5")
    }
})
}

//We must put () function name
FunProminse().then((res)=>{
    document.getElementById("fresult").textContent = res
}).catch((err)=>{
    document.getElementById("fresult").textContent = err
}).finally(()=>{
    document.getElementById("ffinal").textContent = "ALL DONE"
})

//Fix Callback hell
// document.getElementById("call").innerHTML = `<p>Hellow<p>`

function Delay(ms) {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve()
        },ms);
    })
}

function orderProminse() {
  Delay(2000).then(() => {
    document.getElementById("call").innerHTML = `<p>Seconds ${"1"}<p>`;
    return Delay(1000);
  }).then(() => {
    document.getElementById("call").innerHTML = `<p>Seconds ${"2"}<p>`;
    return Delay(1000);
  }).then(() => {
    document.getElementById("call").innerHTML = `<p>Seconds ${"3"}<p>`;
    return Delay(1000);
  }).then(() => {
    document.getElementById("call").innerHTML = `<p>Seconds ${"4"}<p>`;
    return Delay(1000);
  }).then(() => {
    document.getElementById("call").innerHTML = `<p>Seconds ${"5"}<p>`;
    return Delay(1000);
  }).then(() => {
    document.getElementById("call").innerHTML = `<p>Seconds ${"6"}<p>`;
    return Delay(1000);
  }).then(() => {
    document.getElementById("call").innerHTML = `<p>Seconds ${"7"}<p>`;
    return Delay(1000);
  }).then(() => {
    document.getElementById("call").innerHTML = `<p>Seconds ${"8"}<p>`;
    return Delay(1000);
  }).then(() => {
    document.getElementById("call").innerHTML = `<p>Seconds ${"9"}<p>`;
    return Delay(1000);
  })
}

orderProminse()
