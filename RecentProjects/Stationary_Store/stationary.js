let users = [];

    function selectItem() {
      let itemSelect = document.getElementById('item_name').value;
      let description = document.getElementById('item_description').value;
      let quantity = document.getElementById('quantity').value;
      let price = document.getElementById('price').value;
      let totalPrice = price * quantity;

      if (itemSelect && description && price && quantity) {
        let obj = {
          itemSelect: itemSelect,
          description: description,
          quantity: quantity,
          price: price,
          totalPrice: totalPrice,
        };

        users.push(obj);
        displayUsers();

        // Save updated users array to Local Storage
        localStorage.setItem('obj', JSON.stringify(users));
        alert('Your details are stored in localStorage');

        // Clear input fields
        document.getElementById('item_name').value = 'Choose';
        document.getElementById('item_description').value = '';
        document.getElementById('price').value = '';
        document.getElementById('quantity').value = '';
      }
    }

    function displayUsers() {
      const resultTable = document.getElementById('result');
      resultTable.innerHTML = '';

      users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.itemSelect}</td>
          <td>${user.description}</td>
          <td>${user.price}</td>
          <td>${user.quantity}</td>
          <td>${user.totalPrice}</td>
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
        let newSelectItem = prompt('Enter new item:', users[index].itemSelect);
        let newDescription = prompt('Enter new description:', users[index].description);
        let newPrice = prompt('Enter new QUANTITY:', users[index].quantity);
        let newQuantity = prompt('Enter new Price:', users[index].price);

        if (newSelectItem && newDescription && newPrice && newQuantity) {
          users[index].itemSelect = newSelectItem;
          users[index].description = newDescription;
          users[index].price = newPrice;
          users[index].quantity = newQuantity;
          users[index].totalPrice = newPrice * newQuantity;

          // Update the UI with the updated users array
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
        displayUsers();

        // Save the updated users array to Local Storage
        localStorage.setItem('obj', JSON.stringify(users));
      }
    }

    // Attach event listeners
    document.getElementById('form').addEventListener('submit', (e) => {
      e.preventDefault();
      selectItem();
    });

    // Load users from Local Storage (if available)
    if (localStorage.getItem('obj')) {
      users = JSON.parse(localStorage.getItem('obj')) || [];
      displayUsers();
    }