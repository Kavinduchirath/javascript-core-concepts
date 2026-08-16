// const output = document.getElementById("out");

const getAllBooks = async (params) => {
    try {
        const res = await fetch("http://localhost:4000/api/books")
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

const result = async (params) => {
    try {
        const books = await getAllBooks()
        const filter = books.filter((record) => {
            if (record.is_available == true) {
                console.log(record.title)
                return record.title
            }
        })
    } catch (error) {
        console.log(error)
    }
}

result();

// const data = async (params) => {
//     const final = await result()
//     const res = final.map((item)=>{
//         output.innerHTML = item;
//         // console.log(item)
//     })
// }

// data()

// let value = data.map((item)=>{
//     output.innerHTML = item
// })


