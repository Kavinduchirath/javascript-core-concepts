const xbutton = document.getElementById("xbutton");

xbutton.onclick = function name(params) {
    console.log("First Click")
}

xbutton.onclick = function name(params) {
    console.log("Second Click")
}

xbutton.onclick = function name(params) {
    alert("Second Click")
}

//in this case overide the fucntion 