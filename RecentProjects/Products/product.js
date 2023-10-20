let users = [];
const apiUrl = 'https://crudcrud.com/api/99bd602b5c6943f8ab6bd7d857402069/product';

function selectItem() {
  let category = document.getElementById('category').value;
  let selling_price = document.getElementById('selling_price').value;
  let product_name = document.getElementById('product_name').value;

  if (selling_price && product_name && category) {
    let obj = {
      category: category,
      selling_price: selling_price,
      product_name: product_name,
    };

    // Send a POST request to your API to add the item
    axios.post(apiUrl, obj)
      .then(() => {
        fetchData(); // Refresh the data from the API
        alert('Item added successfully.');
      })
      .catch((error) => {
        console.error('Error adding item:', error);
      });
  }
}

function fetchData() {
  // Fetch data from the API and populate the table
  axios.get(apiUrl)
    .then((response) => {
      users = response.data;
      displayUsers();
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

function displayUsers() {
  const resultTable = document.getElementById('result');
  resultTable.innerHTML = '';

  users.forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <th>${user.category}</th>
      <td>${user.selling_price}</td>
      <td>${user.product_name}</td>
      <td>
        <button onclick="editUser(${index})">Edit</button>
        <button onclick="deleteUser(${index})">Delete</button>
      </td>
    `;
    resultTable.appendChild(row);
  });
}

function editUser(index) {
  if (index >= 0 && index < users.length) {
    let newSellingPrice = prompt('Enter new Price:', users[index].selling_price);
    let newProductName = prompt('Enter new Product Name:', users[index].product_name);
    let newCategory = prompt('Enter new Category:', users[index].category);
    
    if (newSellingPrice && newProductName && newCategory) {
      axios.put(`${apiUrl}/${users[index]._id}`, {
        category: newCategory,
        selling_price: newSellingPrice,
        product_name: newProductName
      })
        .then(() => {
          fetchData(); // Refresh the data from the API
          alert('Item updated successfully.');
        })
        .catch((error) => {
          console.error('Error updating item:', error);
        });
    }
  }
}

function deleteUser(index) {
  if (index >= 0 && index < users.length) {
    if (confirm('Are you sure you want to delete this item?')) {
      axios.delete(`${apiUrl}/${users[index]._id}`)
        .then(() => {
          fetchData(); // Refresh the data from the API
          alert('Item deleted successfully.');
        })
        .catch((error) => {
          console.error('Error deleting item:', error);
        });
    }
  }
}

// Attach event listeners
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  selectItem();
});

// Initial data fetch
fetchData();

