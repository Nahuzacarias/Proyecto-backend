import {Router} from "express"
import productManager from '../components/ProductManager.js'

const productmanager = new productManager()

const router= Router () ;

router.get("/", async (req, res,) => {

    const limit = req.query.limit ? parseInt(req.query.limit) : undefined
    
        const product1 = await productmanager.getProducts(limit);
    
        res.send(product1);
    
    
    })
    
    router.get("/:id", async (req, res,) => {
    
        const id_producto= req.params.id
    
        const product = await productmanager.getProductsById(id_producto);
    
        res.send(product);
    
    
    })

        
    router.post('/', async (req, res) => {
        const agregarprod = req.body
      
        const id_producto = await addProduct(agregarprod)
        const nuevoProducto = {
          id: id_producto,
          title: "ryzen 9",
          description: "procesador x",
          code: "1",
          price: "150000",
          status: true,
          stock: 10,
          category: "procesadores",
          thumbnail: "img",
        };
      
        res.send({
          status: true,
          data: nuevoProducto,
        });
      });

      router.put("/:id", async (req, res) => {
        const id_producto = req.params.id;
      
        const { title, description, code, price, status, stock, category, thumbnail } = req.body;
      
        const updatedProduct = await productmanager.updateProduct(id_producto, {
          title,
          description,
          code,
          price,
          status,
          stock,
          category,
          thumbnail,
        });
      
        res.send(updatedProduct);
      });

      router.delete("/:id", async (req, res) => {
        const id_producto = req.params.id;
      
        const deletedProduct = await productmanager.deleteProduct(id_producto);
      
        res.send(deletedProduct);
      });


export default router