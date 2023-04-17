import { promises as fs } from 'fs' //importo solamente promesas  
class ProductManager{

    constructor(){
        this.path = this.path //mediante el path hago todas las operaciones del txt
        this.products = [];
        
    }
      
    validate(title, description, thumbnail, price, code, stock, id){
        
            this.title = title;
            this.description = description;
            this.price = price;
            this.thumbnail = thumbnail;
            this.code = code;
            this.stock = stock;

        } 

  static incrementId() {
    if (this.incrementId) {
       this.incrementId++
          } else {
           this.incrementId = 1
          }
          return this.incrementId
       }
     
//poner el await en el addproduct y modificar para que ande bien el id
async addProduct (product) {

    if (this.products.find((product.code == product.code)) ) {
     return("product already exist ");
     } else {
      const prodsJSON = await fs.readFile(this.path, 'utf-8')
      const product = JSON.parse(prodsJSON)
      product.id = ProductManager.incrementId() //al añadir un producto hacemos que incremente el id 
      prods.push(products)
      await fs.writeFile(this.path, JSON.stringify(prods))
      return 'product was created';
      }
      
    }
    
    //getProduct debe devolver un arreglo vacio
   async getProduct(){
        //consulto el array del txt 
       const products = await fs.readFile(this.path, 'utf-8')
       const prods = JSON.parse(products)
       console.log(prods)
        
       return products
    }

   async   getProductById(id){
     const prodsJSON =   await fs.readFile(this.path, 'utf-8')
     const prods = JSON.parse(prodsJSON)
     const product = this.products.find(producto => producto.id == id);

     product ? console.log("Not found") : console.log(product);
       
      return productById;
    }


    async updateProduct (id,{title, description, price, code, thumbnail, stock}){
      const prodsJSON = await fs.readFile(this.path, 'utf-8')
      const prods = JSON.parse(prodsJSON)

      if (prods.some(prod => prod.id == parseInt(id))) {
        let index = prods.findIndex (prod => prod.id == parseInt(id))
        prods[index].title = title
        prods[index].description = description
        prods[index].price = price 
        prods[index].thumbnail = thumbnail
        prods[index].code = code
        prods[index].stock = stock
        await fs.writeFile(this.path, JSON.stringify, (prods))
        return 'product updated'
      } else {
        return 'product was not updated'
      }
      
   }

   async delateProduct(product){
    const prodsJSON = await fs.readFile(this.path, 'utf-8')
    const prods = JSON.parse(prodsJSON)
    if(prods.some(prod => prod.id === parseInt(id))){
      const prodsFiltrados = prods.filter(prod !== parseint)
        await fs.writeFile(this.path, JSON.stringify(prodsFiltrados))
    
    return 'product delated'
       }else{
         return 'product was not deleted'
   }
  
  }
}

const product = new ProductManager('./info.txt') //inserte la ruta al archivo txt, esta me permite guardar y ejecutar mis archivos

product.getProduct().then(prods => console.log(prods))

ProductManager.addProduct(product1)
ProductManager.addProduct(product2)
const product1 = {
    title: "Remera",
    description: "Remera de algodon",
    price: 1000,
    thumbnail: "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/remera-negra-remera-hombre-remera-basica-21-6952776c38b5e6844216537450098865-640-0.webp",
    stock: 10
 
};

const product2 = {

  title:"camisa",
  description: "camisa larga",
  price: 2000,
  thumbnail: "https://http2.mlstatic.com/D_NQ_NP_852996-MLA53168359304_012023-W.jpg",
  stock: 14
};

const product3 = {
  title:"pantalon",
  description: "pantalon de jean",
  price: 3000,
  thumbnail: "https://http2.mlstatic.com/D_NQ_NP_637588-MLA49328528400_032022-W.jpg",
  stock: 20
};

 