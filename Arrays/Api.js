const getProductsArr = async (params) => {
    try {
        const res = await  fetch('https://fakestoreapi.com/products')
        // console.log(res)
        const data = await res.json()
        return data
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// getProductsArr()

const filterProducts = async () => {
    try {
        const products = await getProductsArr();
        const filtered = products.filter((product) => {
            return product.price > 50;
        });
        console.log(filtered);
    } catch (error) {
        console.log(error);
    }
};

filterProducts();