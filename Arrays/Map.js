const myArray = [10,20,30,40,50]

const result = myArray.map((element,index,array)=>{
    return(element*2)
})

console.log(result)
// This will be print [ 20, 40, 60, 80, 100 ]

const products = [
  { id: 1, title: "Laptop", price: 1200, category: "electronics", stock: 5 },
  { id: 2, title: "T-Shirt", price: 30, category: "clothing", stock: 20 },
  { id: 3, title: "Phone", price: 900, category: "electronics", stock: 10 },
  { id: 4, title: "Shoes", price: 80, category: "clothing", stock: 0 },
  { id: 5, title: "Book", price: 20, category: "books", stock: 15 }
];

const items = products.map((item,index)=>{
    console.log(item.title,index)
})