import * as fs from 'fs' //importo solamente promesas  
import { deleteModel } from 'mongoose';

class ProductManager{

    constructor(){
        this.path = this.path //mediante el path hago todas las operaciones del txt
        this.products = [];
        // id autoincrementable para cada producto con getProductById 
        this.id = 0;
    }
    validate(product){
        if(
            !product.title ||
            !product.description ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock ||
            typeof product.title !== "string" ||
            typeof product.description !== "string" ||
            typeof product.code !== "string" ||
            typeof product.thumbnail !== "string" ||
            typeof product.price !== "number" ||
            typeof product.stock !== "number"
          )
            return console.log("Not Validate");
        }

 async  addProduct (product) {
        this.validate(product)
        this.products.length === 0 ? (id = 1) : (id = this.products[this.products.length - 1].id + 1);

    if (this.products.some((e) => e.code === product.code)) {
      console.log("code already entered ");
     } else {
        const newProduct = {
            id: this.id,
            title: product.title,
            description: product.description,
            price: product.price,
            thumbnail: product.thumbnail,
            code: product.code,
            stock: product.stock,
      };
      this.products.push(newProduct);
      return newProduct;
      }
    }
    
   async getProduct(){
        const products = await fs.readFile(this.path, 'utf-8')
         
        const prods = JSON.parse(products)
        
        return products;
    }

    getProductById(id){
     const productById = this.products.find((idProduct)=> idProduct.id === id);
     !productById ? console.log("Not found") : console.log(productById);
       
      return productById;
    }
  async  updateProduct()
   
 async deleteProduct (id) {
}
  }


const product = new ProductManager('./products.txt'); //inserte la ruta al archivo txt, esta me permite guardar y ejecutar mis archivos

product.addProduct({
    title: "Remera",
    description: "Remera de algodon",
    price: 1000,
    thumbnail: "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/remera-negra-remera-hombre-remera-basica-21-6952776c38b5e6844216537450098865-640-0.webp",
    stock: 10
  },
);

product.addProduct({

  title:"camisa",
  description: "camisa larga",
  price: 2000,
  thumbnail: "https://http2.mlstatic.com/D_NQ_NP_852996-MLA53168359304_012023-W.jpg",
  stock: 14
});

product.addProduct({
  title:"pantalon",
  description: "pantalon de jean",
  price: 3000,
  thumbnail: "https://http2.mlstatic.com/D_NQ_NP_637588-MLA49328528400_032022-W.jpg",
  stock: 20
});

const products = []
 
const queryTxt = async (path) => {
  try{
    await fs.writeFile(path, JSON.stringify(products))
    let content = await fs.readFile(path, 'utf-8')
    const aux = JSON.parse(content)
    aux.push(prod1)
    console.log (aux)
    await fs.appendFile(path, JSON.stringify(aux))
    content =  await fs.readFile (path, 'utf-8')
    console.log(content1)
    // await fs.unlink(path)
  }
  catch(error){
    await fs.writeFile(ruta, JSON.stringify((products)))
    let content = await JSON.parse(fs)
  }
  
}

queryTxt(products.txt)

// const ProductManager = new ProductManager ('./info.txt')
// ProductManager.addProduct(product)
// console.log (ProductManager.addProduct(product))
// console.log(ProductManager.getProductById(2))
// console.log(ProductManager.getProductById(4))
// console.log(ProductManager.getProduct())

await ProductManager.getProducts()
