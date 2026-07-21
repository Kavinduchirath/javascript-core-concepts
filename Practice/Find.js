const numbers = [5, 10, 15, 20];

const result = numbers.find(num => num === 10);

console.log(result);

const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 }
];

const product = products.find(p => p.id === 2);
console.log(product);