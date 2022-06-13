// Loading the product Array of local storage
// Coming from productController.js

const loadProductsFromLocalStorage = () => {
  const storageItems = localStorage.getItem("products")
  if (storageItems) {
      const items = JSON.parse(storageItems)
      return items;
      //TODO load the items into the local items structure (this.items)           
  }
}

let listProductDiv = document.getElementById('list-products');

// Function that add a new items to the list in HTML structure.
// used split to mitigate fake path in local storage

loadProductsFromLocalStorage().forEach(element => {
    let newCardHTML = ` 
  <div class=" col-sm-12 col-md-6 col-lg-4 card" style="width: 18rem;">
  <img src="/assets/${element.img.split('\\')[2]}" class="card-img-top" alt="...">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${element.name}</li>
    <li class="list-group-item">${element.description}:</li>
    <li class="list-group-item">$${element.price} per pound</li>
  </ul>
  <div class="input-group mb-3">
    <input type="number" max="10" min="0" class="form-control" placeholder="Quantity" aria-label="Quantity" aria-describedby="button-addon1">
    <button class="btn btn-warning" type="button" id="button-addon1">Add</button>
</div>
  </div>
  `;
  // add cards without removing the old cards
    listProductDiv.innerHTML += newCardHTML;
    console.log(element.img.split('\\'))
});