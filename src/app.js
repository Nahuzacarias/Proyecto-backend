import express from "express"
import productManager from '../src/components/ProductManager.js'

const productmanager = new productManager()
const PORT = 8080;

const app = express();

app.listen(PORT, () => {

    console.log("server up " + PORT)


})

app.get("/products", async (req, res,) => {

    const product1 = await productmanager.getProducts();

    res.send(product1);


})

app.get("/products/:id", async (req, res,) => {

    const id_producto= req.params.id

    const product = await productmanager.getProductsById(id_producto);

    res.send(product);


})