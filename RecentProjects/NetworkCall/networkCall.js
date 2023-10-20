
let users = [];

// Load users from Local Storage (if available)
const apiUrl = 'https://crudcrud.com/api/99bd602b5c6943f8ab6bd7d857402069/product';

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


function createUser(name, email) {
  axios.post(apiUrl, { name, email })
    .then(() => {
      fetchUsers(); // Refresh the data from the API
      alert('User created successfully.');
    })
    .catch((error) => {
      console.error('Error creating user:', error);
    });
}
 
  function editUser(index) {
    if (index >= 0 && index < users.length) {
      const newName = prompt('Enter new name:', users[index].name);
      const newEmail = prompt('Enter new email:', users[index].email);
      if (newName && newEmail) {
        axios.put(`${apiUrl}/${users[index].id}`, { name: newName, email: newEmail })
          .then(() => {
            fetchData(); // Refresh the data from the API
            alert('User updated successfully.');
          })
          .catch((error) => {
            console.error('Error updating user:', error);
          });
      }
    }
  }

  function deleteUser(index) {
    if (index >= 0 && index < users.length) {
      if (confirm('Are you sure you want to delete this user?')) {
        axios.delete(`${apiUrl}/${users[index].id}`)
          .then(() => {
            fetchData(); // Refresh the data from the API
            alert('User deleted successfully.');
          })
          .catch((error) => {
            console.error('Error deleting user:', error);
          });
      }
    }
  }

      // Display users in the table
      function displayUsers() {
        const resultTable = document.getElementById('result');
        resultTable.innerHTML = '';

        users.forEach((user, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
              <button onclick="editUser(${index})">Edit</button>
              <button onclick="deleteUser(${index})">Delete</button>
            </td>
          `;
          resultTable.appendChild(row);
        });
      }

      // Attach event listeners
      document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const useremail = document.getElementById('useremail').value;
        if (username && useremail) {
          createUser(username, useremail);
          document.getElementById('username').value = '';
          document.getElementById('useremail').value = '';
        }
      });

      document.getElementById('getData').addEventListener('click', (e) => {
        fetchData();
      });

      // Initial data fetch
      fetchUsers();
  