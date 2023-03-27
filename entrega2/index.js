import ProductManager from "./ProductManager.js";

const productos = new ProductManager();


const env = async () => {

    let producto = {
        title: "notebook",
        description: "i3",
        price: "210000",
        thumbnail: "thumbnail",
        code: "1",
        stock: "5",
        id: "1",
    }

    let result = await productos.addProduct(producto);

    console.log(result)

let produc =await productos.consultarProducto()
console.log (produc)


}


env()