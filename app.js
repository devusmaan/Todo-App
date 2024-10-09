let addUserBtnText = document.querySelectorAll("#adduser");

let usernameTextField = document.querySelector("#username");
let userArray = [];
let recordsOfUsers = document.querySelector("#records");
let null_id = null;

// let objStr = localStorage.getItem('users');
// userArray = JSON.parse(objStr);
// console.log(userArray);



function addUserBtn() {

    const name = usernameTextField.value.trim();

    if (null_id !== null){
        userArray.splice(null_id, 1 , usernameTextField.value);
        null_id = null;
    }
    else {
        if (name === "") return
        userArray.push(name); 
    }
    
    displayInfo(); 
    usernameTextField.value = ""; 

}



function displayInfo() {
    recordsOfUsers.innerHTML = "";

    for (let i = 0; i < userArray.length; i++) {
        recordsOfUsers.innerHTML += `
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${userArray[i]}</td>
            <td>
                <button class="btn text-white btn-info mx-2" onclick="editInfo(${i})">Edit</button> 
                <button class="btn btn-danger text-white" onclick="deleteInfo(${i})">Delete</button>
            </td>
          </tr>
    `
    }
}

function deleteInfo(index) {
    userArray.splice(index, 1);
    displayInfo();  
}


function editInfo(i) {
    null_id = i;
    usernameTextField.value = userArray[i];
    console.log(userArray[i], addUserBtnText);
    // addUserBtnText.nodeValue = "Save Changes";
    // addUserBtnText.value = "Save Changes"
    // addUserBtnText.textContent = "Save Changes"
    addUserBtnText.innerText = "Save Changes";
    
}

// function deleteInfo() {

// }

