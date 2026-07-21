// setTimeout(() => {
//     console.log("3 seconds have passed!" );
//     setTimeout(() => {
//         console.log("3 seconds have passed!" );
//         setTimeout(() => {
//             console.log("3 seconds have passed!" );
//             setTimeout(() => {
//                 console.log("3 seconds have passed!" );
//             }, 3000);
//         }, 1000);
//     }, 500);
// }, 1000);

let order = () => {
    setTimeout(() => {
        console.log("First");
        setTimeout(() => {
            console.log("2")
        }, 1000);
    },1000)
}
order()
