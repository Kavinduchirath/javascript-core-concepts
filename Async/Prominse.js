const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Fullfilled After 3 sec");
    reject("Fullfilled After 3 sec");
  }, 3000);
});

console.log(myPromise);

// myPromise.then((res) => {
//   console.log(res);
// });

myPromise.then((res) => {
  document.getElementById("result").textContent = res;
}).catch((err) => {
    document.getElementById("result").textContent = err;
})
