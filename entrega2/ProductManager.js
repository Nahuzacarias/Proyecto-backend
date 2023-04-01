import fs from "fs";

export default class ProductManager {
    constructor() {
        this.path = "./entrega2/productos.json";
    }

    getProducts = async () => {
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, "utf8");
                const products = JSON.parse(data);
                return products
            } else {
                return [];
            }
        } catch (error) {
            console.log(error)
        }
    }

    addProduct = async (title, description, price, thumbnail, code, stock) => {
        try {
            const products = await this.getProducts();
            let producto = {
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock,
            };
            let id_producto = producto.id;
            if (products.length === 0) {
                producto.id = 1;
            } else {
                producto.id = products[products.length - 1].id + 1;
            }
            if (
                Object.values(producto).includes(" ") ||
                Object.values(producto).includes("")
            ) {
                return console.log("Todos los campos son obligatorios");
            }
            let codigo = products.find((ele) => ele.code == producto.code);
            if (codigo) {
                return console.log(
                    "El 'code' del producto ya existe, intente cambiarlo."
                );
            } else {
                products.push(producto);
                await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));
                console.log(producto);
                return producto;
            }
        } catch (error) {
            console.log(error)
        }
    }

    getProductsById = async (id_producto) => {
        try {
            const products = await this.getProducts();
            const producto = products.find((producto) => producto.id == id_producto);
            if (producto) {
                return console.log(producto);
            } else {
                return "not found";
            }
        } catch (error) {
            console.log(error)
        }
    };

    deleteProduct = async (id_producto) => {
        try {
            const products = await this.getProducts();
            const indexProducto = products.findIndex(producto => producto.id == id_producto);
            if (indexProducto !== -1) {
                const deleteP = products.splice(indexProducto, 1)[0];
                await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t")
                );
                console.log("El producto fue eliminado");
                return deleteP
            } else {
                return "El producto que quiere eliminar no existe";
            }
        } catch (error) {
            console.log(error)
        }
    };

    updateProduct = async (id_producto, title, description, price, thumbnail, code, stock) => {
        try {
            let producto = {
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock,
                id: id_producto
            };
            const products = await this.getProducts();
            const indexProducto = products.findIndex(producto => producto.id === id_producto);
            if (indexProducto !== -1) {
                if (Object.values(producto).includes(" ") ||
                    Object.values(producto).includes("")) {
                    return console.log("Todos los campos son obligatorios");
                }
                let codigo = products.find((ele) => ele.code == producto.code);
                if (codigo) {
                    return console.log(
                        "El 'code' del producto ya existe, intente cambiarlo."
                    );
                } else {
                    const deleteP = products.splice(indexProducto, 1)[0];
                    await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));
                    deleteP;
                    products.push(producto);
                    await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));
                    console.log("El producto se modificó con exito")
                    return producto;
                }
            } else {
                return "El producto que quiere modificar no existe"
            }
        } catch (error) {
            console.log(error)
        }
    }
}