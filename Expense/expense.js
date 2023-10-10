let submitBtn = document.getElementById('addExpenses');
let form = document.getElementById('form');
let users = [];

// Load users from Local Storage (if available)
if (localStorage.getItem('obj')) {
  users = JSON.parse(localStorage.getItem('obj')) || [];
  displayUsers();
}

// Add user to the users array and update the UI
submitBtn.addEventListener('click', (e) => {
  $("#result").empty();
  e.preventDefault();

  let chooseExpenseAmount = document.getElementById('chooseExpenseAmount').value;
  let chooseDescription = document.getElementById('chooseDescription').value;
  let chooseCategory=document.getElementById('chooseCategory').value;

  if (chooseExpenseAmount && chooseDescription && chooseCategory) {
    let obj = {
      chooseExpenseAmount: chooseExpenseAmount,
      chooseDescription: chooseDescription,
      chooseCategory: chooseCategory
    };

    users.push(obj);
    displayUsers();

    // Save updated users array to Local Storage
    localStorage.setItem('obj', JSON.stringify(users));
    console.log(JSON.stringify(users));
    alert("Your details are stored in localStorage");

    // Clear input fields
    document.getElementById('chooseExpenseAmount').value = '';
    document.getElementById('chooseDescription').value = '';
    document.getElementById('chooseCategory').value = '';
  }
});

function displayUsers() {
  users.forEach((obj, index) => {
    let res = `
      <tr>
        <td>${obj.chooseExpenseAmount}</td>
        <td>${obj.chooseDescription}</td>
        <td>${obj.chooseCategory}</td>
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
    let newExpenseAmount = prompt("Enter new Expense Amount:", users[index].expenseAmount);
    let newDescription = prompt("Enter new description:", users[index].description);
    let newCategory = prompt("Enter new category:", users[index].category);

    if (newExpenseAmount && newDescription && newCategory) {
        users[index].chooseExpenseAmount = newExpenseAmount;
        users[index].chooseDescription = newDescription;
        users[index].chooseCategory=newCategory;

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
