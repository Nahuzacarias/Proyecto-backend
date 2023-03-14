class ProductManager {
    constructor() {

        this.Products = []

    }

    getProducts(){
        return this.Products;
    }

    addProduct(title, description, price,thumbnail,code,stock) {

        let id_producto = (this.getProducts()).length;

        let Products = {
            title:title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            
        }

        this.Products.push(Products);
        return this.Products
    }
}


/*const zinnia = new ProductManager("Zinnia enana rosa", "Semiesfera de 2,5cm de diámetro con Zinnia enana rosada", 500,"", 1, 200);
const alisso = new ProductManager("Dije Alisso", "Inflorescencia de Alisso blanco Diámetro 3,2cm", 420,"", 2, 500);
const viola = new ProductManager("Viola amarilla", "Semiesfera de Viola amarilla Medida 2,5cm diámetro", 420,"", 3, 300);
const faroles = new ProductManager("Faroles Chinos", "Flores de Farolito Chino, los ganchos NO son de acero,Medidas de flor: 4,5 *2,3cm", 700,"", 4, 250);
const petalos = new ProductManager("Petalos de Abutilon", "Con argollas de acero,Medida por pétalo: 2,5*3cm", 750,"", 5, 500);
*/
