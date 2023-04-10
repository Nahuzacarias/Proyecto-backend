import ProductManager from "../src/components/ProductManager.js";

const manager = new ProductManager();

const env = async() =>{    
    
    let carga = await manager.addProduct("ryzen", "ryzen 8 ", 82900,"no imagen", 2, 20);
    
    //let productos = await manager.getProducts(); console.log(productos)
    
    //let id = await manager.getProductsById(3); console.log(id)
    
    //let borrar = await manager.deleteProduct(4); console.log(borrar)

    //let modificar = await manager.updateProduct(5, "ryzen","ryzen3", 10, "sin imagen",4,10); console.log(modificar)
    console.log(carga)
}

env()