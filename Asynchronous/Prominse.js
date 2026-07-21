const myProminse = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Fullfiled")
        // reject("Rejected")
    }, 2000);
})

// console.log(myProminse)

myProminse.then((res)=>{
    document.getElementById("result").textContent = res
}).catch((err)=>{
    document.getElementById("result").textContent = err
})