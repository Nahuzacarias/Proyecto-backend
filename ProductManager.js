class ProductManager {
    constructor() {

        this.products = []

    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, stock, code) {

        let id_producto = (this.getProducts()).length;

        let producto = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: ++id_producto,

        }

        this.products.push(producto);
        return this.products

    }


    validar(code, producto,) {

        if (producto.code === code || producto.code == null) {
            return "El código no debe ser el mismo o estar vacío,por favor ingrese otro."
        }
        else {


        }


    }
    getProductById(id_producto) {
        let producto = this.products.find(producto => producto.id === id_producto)

        if (producto) {
            return producto;
        } else {
            return console.log("not found")
        }

    }



}
const productos = new ProductManager()
productos.addProduct("Zinnia enana rosa", "Semiesfera de 2,5cm de diámetro con Zinnia enana rosada", 500, "", 1, 200);
productos.addProduct("Dije Alisso", "Inflorescencia de Alisso blanco Diámetro 3,2cm", 420, "", 2, 500);
productos.addProduct("Viola amarilla", "Semiesfera de Viola amarilla Medida 2,5cm diámetro", 420, "", 3, 300);
productos.addProduct("Faroles Chinos", "Flores de Farolito Chino, los ganchos NO son de acero,Medidas de flor: 4,5 *2,3cm", 700, "", 4, 250);
productos.addProduct("Petalos de Abutilon", "Con argollas de acero,Medida por pétalo: 2,5*3cm", 750, "", 5, 500);

console.log(productos.getProductById(1))