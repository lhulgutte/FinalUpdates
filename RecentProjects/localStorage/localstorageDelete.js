let submitBtn = document.getElementById('submit1');
let form = document.getElementById('form');
let users = [];

// Load users from Local Storage (if available)
if (localStorage.getItem('obj')) {
  users = JSON.parse(localStorage.getItem('obj')) || [];
  displayUsers();
}

// Add user to the users array and update the UI
document.getElementById("submit1").addEventListener('click', (e) => {
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
    localStorage.setItem('obj', JSON.stringify(users));
    console.log(JSON.stringify(users));
    alert("Your details are stored in localStorage");

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
        <td><button onclick="deleteUser(${index})">Delete</button></td>
      </tr>
    `;
    $("#result").append(res);
  });
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
