import express from "express"
import productosRouter from "./routes/productos.js"
import carroRouter from "./routes/carrito.js"
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import {Server} from "socket.io";
import viewRouter from "/components/carritosManager.js"

const PORT =  process.env.PORT || 8080;

const app = express();
const server = app.listen (PORT,()=>{

    console.log ('servidor funcionando en el puerto: ' + PORT )
})

app.engine('handlebars',handlebars.engine());
app.set('views', __dirname+'/views');
app.set('view engine' , 'handlebars');

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+ '/public'))
app.use ('/' , viewRouter)

const io = new Server(server);

io.on ('connection',socket => {

console.log ('Socket connected');

})



app.use("/api/products" ,productosRouter)
app.use("/api/carrito" ,carroRouter)
