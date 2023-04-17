import {Router} from "express"
import CarritosManager from "../components/carritosManager.js"

const router= Router () ;
const manager = new CarritosManager();


router.post('/',async (req,res)=>{
    try{
        return res.status(200).send(await manager.addCarrito());
    }catch(err){
        res.status(400).send({
            status: "Error",
            msg: `El total de carritos no se puede visualizar.`
  });
}
});



router.get('/:cid',async (req,res)=>{
    const id = parseInt(req.params.cid);
    let carrito = await manager.getCarrito(id)
    
    res.send ({carrito});
    
});



router.post('/:cid/product/:pid',async (req,res)=>{

try{

    const idCart= req.params.cid;
    const idProd = req.params.pid;

    const resultado = await manager.addproductIncart(idCart,idProd)



    res.send(resultado) ;
    }
catch(error){


    res.status(500).send({error:"error interno"})
}



})

export default router