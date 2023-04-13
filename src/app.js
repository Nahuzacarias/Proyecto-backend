import express from "express"
import productosRouter from "./routes/productos.router.js"
import carroRouter from "./routes/carrito.router.js"

const PORT = 8080;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(PORT, () => {

    console.log("server up " + PORT)


})



app.use("/api/products" ,productosRouter)
app.use("/api/carrito" ,carroRouter)
