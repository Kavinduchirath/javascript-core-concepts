const content = document.getElementById("content");

const products = [
  { id: 1, title: "Laptop", price: 1200, category: "electronics", stock: 5 },
  { id: 2, title: "T-Shirt", price: 30, category: "clothing", stock: 20 },
  { id: 3, title: "Phone", price: 900, category: "electronics", stock: 10 },
  { id: 4, title: "Shoes", price: 80, category: "clothing", stock: 0 },
  { id: 5, title: "Book", price: 20, category: "books", stock: 15 }
];

const result = products.filter((product)=>{
    return product.category === "electronics" && product.price > 100
});

content.innerHTML = result.map((product)=>{
    return `
    <div>
        <p>${product.title}</p>
        <p>${product.price}</p>
        <p>${product.category}</p>
        <p>${product.stock}</p>
    </div>
    `
}).join("");

