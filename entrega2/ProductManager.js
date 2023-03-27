import fs from 'fs';


const path = './entrega2/Productos.json'

export default class ProductManager {

    consultarProductos = async () => {

        if (fs.existsSync(path)) {

            const data = await fs.promises.readFile(path, 'utf -8')

            const prod = JSON.parse(data);
            return prod;
        } else {


            return []
        }

    }
    addProduct = async (pro) => {


        const producto2 = await this.consultarProductos();

        if (producto2.lenght === 0) {
            pro.id = 1

        } else {

            pro.id = producto2[producto2.lenght-1].id+1;
        }

        producto2.push(pro);

await fs.promises.writeFile(path. JSON.stringify(producto2,null,'\t'))

return pro

    }


}