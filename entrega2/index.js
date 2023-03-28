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
    }

    let result = await productos.addProduct(producto);

    console.log(result)

let produc = await productos.consultarProductos()
console.log (produc)

}
env()