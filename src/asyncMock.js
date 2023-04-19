const products = [
    {
        id:'1',
        name:'Botines Adidas',
        price:23000,
        category:'Botines',
        img:'img/botinAdidas.jpg',
        stock:30,
        description:'Descripcion'
    },
    {
        id:'2',
        name:'Botines Nike',
        price:28000,
        category:'Botines',
        img:'img/botinNike.jpg',
        stock:10,
        description:'Descripcion'
    },
     {
        id:'3',
        name:'Pelota Adidas',
        price:10000,
        category:'Pelotas',
        img:'img/imagenPelota.jpg',
        stock:50,
        description:'Descripcion'
    }
]

export const getProducts = () => {
    return new Promise ((resolve)=>{
        setTimeout(()=> {
            resolve(products)
        }, 1000)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}