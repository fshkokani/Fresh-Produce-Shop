let signupForm = document.getElementById("signupForm");
let signupButton = document.getElementById("signupButton");


  
const addUserToDatabaseRequest = async (firstName, lastName, email, password) => {
    let response = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password
        }),
            });
    // if the response is bad
    if(!response.ok){
        throw new Error(`There is an error with status ${response.status}`)
    }
    let usersJson = response.json();
    console.log(usersJson)
    return usersJson;
}

const addUser = async () =>{
    url="http://localhost:8080/api/user/signup";
    let user = await addUserToDatabaseRequest(signupForm.FirstName.value, signupForm.LastName.value, signupForm.email.value, signupForm.password.value);
}

signupButton.addEventListener('click',addUser);
