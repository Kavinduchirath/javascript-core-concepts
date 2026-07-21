function getProducts(params) {
    fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => console.log(data)).catch((err)=>{
                console.log(err)
            })
}

//avoid then channing by using async await

// getProducts()

//Traditional function
async function getProductsNew() {
    try {
        const res = await  fetch('https://fakestoreapi.com/products')
        // console.log(res)
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
}

// getProductsNew()

const getProductsArr = async (params) => {
    try {
        const res = await  fetch('https://fakestoreapi.com/products')
        // console.log(res)
        const data = await res.json()
        console.log(data)
        console.log(params)
        // alert(params)
    } catch (error) {
        console.log(error)
    }
}

getProductsArr("hellow from parameter")