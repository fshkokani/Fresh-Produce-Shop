let listProductTable = document.querySelector('tbody');
let allProductButton= document.getElementById("allProducts");
let addProductButton = document.getElementById("addProductButton");
let editProductButton = document.getElementById("editProduct");
let url;

// Loading the product list from the database

// Get All items
const makeRequest = async () => {
    let response = await fetch(url);
    // if the response is bad
    if(!response.ok){
        throw new Error(`There is an error with status ${response.status}`)
    }
    let usersJson = response.json();
    console.log(usersJson);
    return usersJson;
}

const loadProductsFromDatabase = async () => {
    url = "http://localhost:8080/api/item";
    listProductTable.innerHTML = "";
let items = await makeRequest();

items.forEach(item => {
        let newrowHTML = ` 
              <tr>
              <th scope="row">${item.id}</th>
                      <td>${item.name}</td>
                      <td>
                      <div class="col-md-3">
                      <img
                      src="/assets/${item.imageUrl.split('\\')[2]}" alt="" class="img-fluid d-none d-md-block rounded mb-2 shadow" /></td>
                      </div>
                      <td>${item.quantity}</td>
                      <td>${item.price}</td>
                      <td><input class="btn btn-primary" type="button" value="Delete Product"></td>
                      </tr>
            `;
            // add cards without removing the old cards
            listProductTable.innerHTML += newrowHTML;

    });}

const editProcuctFromDatabase = async () =>{
    url="http://localhost:8080/api/item/add";
    let items = await makeRequest();
    items.forEach(item => {
        let newrowHTML = ` 
              <tr>
              <th scope="row">${item.id}</th>
                      <td>${item.name}</td>
                      <td>
                      <div class="col-md-3">
                      <img
                      src="/assets/${item.imageUrl.split('\\')[2]}" alt="" class="img-fluid d-none d-md-block rounded mb-2 shadow" /></td>
                      </div>
                      <td>${item.quantity}</td>
                      <td>${item.price}</td>
                      <td><input class="btn btn-primary" type="button" value="Delete Product"></td>
                      </tr>
            `;
            // add cards without removing the old cards
            listProductTable.innerHTML += newrowHTML;

        });}

allProductButton.addEventListener('click', loadProductsFromDatabase);
addProductButton.addEventListener('click', editProcuctFromDatabase)
//editProductButton.addEventListener('click', loadProductsFromDataBase);