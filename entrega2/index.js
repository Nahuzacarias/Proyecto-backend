import ProductManager from "./ProductManager.js";

const manager = new ProductManager();

const env = async() =>{    
    
    //let carga = await manager.addProduct("ryzen", "ryzen 7 ", 82900,"no imagen", 1, 20);
    
    //let productos = await manager.getProducts(); console.log(productos)
    
    //let id = await manager.getProductsById(3); console.log(id)
    
    //let borrar = await manager.deleteProduct(4); console.log(borrar)

    let modificar = await manager.updateProduct(5, "ryzen","ryzen3", 10, "sin imagen",4,10); console.log(modificar)
}

env()