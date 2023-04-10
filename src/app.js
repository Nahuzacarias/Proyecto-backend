import express from "express"
import productManager from '../src/components/ProductManager.js'

const productmanager = new productManager()
const PORT = 8080;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(PORT, () => {

    console.log("server up " + PORT)


})

app.get("/products", async (req, res,) => {

const limit = req.query.limit ? parseInt(req.query.limit) : undefined

    const product1 = await productmanager.getProducts(limit);

    res.send(product1);


})

app.get("/products/:pid", async (req, res,) => {

    const id_producto= req.params.pid

    const product = await productmanager.getProductsById(id_producto);

    res.send(product);


})

