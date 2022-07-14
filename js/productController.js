//  create a ProductController class
class productsController {
    constructor(){
        this.currentId = 0;
        //this.createdAt = this.createdAt;
        this.products = [];
    }
    // a method when called will define a new product object and push it to the product list
    addProduct(name, description, quantity, price, img){
        this.currentId++;
        let product = {
            id: this.currentId,
            name: name, 
            description: description,
            quantity: quantity,
            price: price,
            img:img,
            // createdAt: this.createdAt,
        };
        this.products.push(product)
    }
//    // get currentId(){
//         return this.currentId;
//     }
}

let newProduct = new productsController();

// task 10

let save =({name, imageUrl, quantity, price})=> {
    const data = { name, imageUrl,quantity, price};
    fetch('http://localhost:8080/item', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });

}
// add form events and data
let eventHandlerFunc = (event)=>{
    event.preventDefault();
    newProduct.addProduct(myForm.productName.value, myForm.productDescription.value, myForm.quantity.value, myForm.price.value, myForm.productImage.value);
    let storedProduct=localStorage.setItem("products", JSON.stringify(newProduct.products));
    save(newProduct.products);
    // console.log(newProduct)
    // console.log(newProduct.products)
    return storedProduct;
};




myForm = document.getElementById('form');
myForm.addEventListener('submit',eventHandlerFunc);

