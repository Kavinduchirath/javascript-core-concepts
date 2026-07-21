for( let i=1;i<10;i++){
    console.log(i)
}

console.log();

for( let i=1;i<10;i++){
    if (i===5) {
        continue;
    }
    if (i===7) {
        break;  
    }
    console.log(i)
}