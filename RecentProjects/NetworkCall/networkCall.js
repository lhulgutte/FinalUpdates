let submitBtn = document.getElementById('submit1');
let form = document.getElementById('form');
let users = [];

// Load users from Local Storage (if available)
const apiUrl = 'https://crudcrud.com/api/92cfedf95c1e4982bc44adbad81936ae/updateData'; 

// Function to fetch users from the API
async function fetchUsers() {
  try {
    const response = await axios.get(apiUrl);
    users = response.data;
    displayUsers();
  } catch (error) {
    console.error(error);
  }
}

// Function to display users
function displayUsers() {
  users.forEach((obj, index) => {
    let res = `
      <tr>
        <td>${obj.name}</td>
        <td>${obj.email}</td>
        <td>
          <button onclick="editUser(${index})">Edit</button>
          <button onclick="deleteUser(${index})">Delete</button>
        </td>
      </tr>
    `;
    $("#result").append(res);
  });
}


function updateUser(){
  submitBtn.addEventListener('click', (e) => {
    $("#result").empty();
    e.preventDefault();
  
    let name = document.getElementById('username').value;
    let email = document.getElementById('useremail').value;
  
    if (name && email) {
      let obj = {
        name: name,
        email: email
      };
  
      users.push(obj);
      displayUsers();
  
      // Save updated users array to Local Storage
      axios
      .post(apiUrl, obj)
      .then(res =>console.log(res))
      .catch(err => console.error(err))
  
      // Clear input fields
      document.getElementById('username').value = '';
      document.getElementById('useremail').value = '';
    }
  });
  }

fetchUsers();
updateUser();

function editUser(index) {
  if (index >= 0 && index < users.length) {
    let newName = prompt("Enter new name:", users[index].name);
    let newEmail = prompt("Enter new email:", users[index].email);

    if (newName && newEmail) {
      users[index].name = newName;
      users[index].email = newEmail;

      // Update the UI with the updated users array
      $("#result").empty();
      displayUsers();     

      // Save the updated users array to Local Storage
      localStorage.setItem('obj', JSON.stringify(users));
    }
  }
}

function deleteUser(index) {
  if (index >= 0 && index < users.length) {
    // Remove the user from the users array at the given index
    users.splice(index, 1);

    // Update the UI with the updated users array
    $("#result").empty();
    displayUsers();

    // Save the updated users array to Local Storage
    localStorage.setItem('obj', JSON.stringify(users));
  }
}
