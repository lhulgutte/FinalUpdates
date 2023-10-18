let submitBtn = document.getElementById('submit1');
let form = document.getElementById('form');
let users = [];

// Load users from Local Storage (if available)
if (axios
    .get('https://crudcrud.com/api/92cfedf95c1e4982bc44adbad81936ae/updateData')
   .then(res =>console.log(res))
   .catch(err => console.error(err)))
    {
         displayUsers();
    }

// Add user to the users array and update the UI
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
    .post('https://crudcrud.com/api/92cfedf95c1e4982bc44adbad81936ae/updateData', obj)
    .then(res =>console.log(res))
    .catch(err => console.error(err))
    //localStorage.setItem('obj', JSON.stringify(users));
    //console.log(JSON.stringify(users));
   // alert("Your details are stored in localStorage");

    // Clear input fields
    document.getElementById('username').value = '';
    document.getElementById('useremail').value = '';
  }
});

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
     // localStorage.setItem('obj', JSON.stringify(users));
     /*axios
     //.patch
     .put('https://crudcrud.com/api/92cfedf95c1e4982bc44adbad81936ae/updateData/652f8ff82e0fb203e853fa17',
     {users:{
         title :'updated Todo',
         completed : true
     }})
     .then(res =>console.log(res))
     .catch(err => console.error(err))*/
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
   // localStorage.setItem('obj', JSON.stringify(users));
   axios
   .delete('https://crudcrud.com/api/92cfedf95c1e4982bc44adbad81936ae/updateData')
   .then(res =>console.log(res))
   .catch(err => console.error(err))
  }
}
}
