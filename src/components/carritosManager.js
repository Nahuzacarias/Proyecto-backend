import fs from "fs";


const path = "./routes/carrito.js"

export default class CarritosManager {

    addProductInCart = async (idCart, idProd) => {

        const carritos = await this.getCarritos();
        const carritosFiltrados = carritos.find((cart) => cart.id == idCart);


        let productosInCart = carritosFiltrados.products;
        const productoIndex = productosInCart.findIndex((u) => u.id == idProd);

        if (productoIndex !== -1) {

            productosInCart[productoIndex].quantity =
                productosInCart[productoIndex].quantity + 1


        } else {

            let producto = {

                id: idProd,
                quantity: 1
            };

            productosInCart.push(producto);
            console.log(productosInCart);

        }
        await fs.promises.writefile(path, JSON.stringify(carritos, null, "\t"));
        return carritosFiltrados;

    }


    getCarritos = async () => {


        if (fs.existsSync(path)) {

            const data = await fs.promises.readFile(path, "utf-8")
            const carritos = JSON.parse(data)
            return carritos;
        }

        else { return [] }

    }
};

getCarrito = async (idCart) => {

    const carritos = await this.getCarritos();
    console.log(carritos);
    const carrito = carritos.find((cart) => cart.id == idCart);

}
addCarrito = async () => {

    const carritos = await this.getCarritos()
        ;
    let carrito = {

        products: [],
    }



}

})


}


)

}


}