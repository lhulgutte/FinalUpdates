/*Svar form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }  
  });
}*/
var itemList=document.querySelector('#items');
//parent node
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4'
//console.log(itemList.parentNode.parentNode);

//parent Element
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#f4f4f4'
//console.log(itemList.parentElement.parentElement);

//ChileNodes
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='yellow'
//console.log(itemList.childNodes.childNodes);


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();
  // Get input value
  var newItem = document.getElementById('item').value;
  // Create new li element
  var li = document.createElement('li');
 
  var newItem1 = document.getElementById('item1').value;
  var li = document.createElement('li');

   // Add class
  li.className = 'list-group-item';

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem1));

  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-danger btn-sm float-right delete ';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);
  // Append li to list
  itemList.appendChild(li);
  
  // Create del button element
  var deleteBtn = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete mr-2';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var itemDesc=item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || itemDesc.toLowerCase().indexOf(text)!=-1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

const deleteButtons = document.querySelectorAll('.delete');

for (const deleteButton of deleteButtons) {
  const editButton = document.createElement('button');
  editButton.addEventListener('click', function() {
    // Add your code for what should happen when the edit button is clicked here
  Array.from(items).forEach(function(item){
    var itemName = item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }

  });
});
}

function test(){
  var name=document.getElementById("item").value;
  var email=document.getElementById("item1").value;
  
  //storing data
  var userName=localStorage.setItem("username",name);
  var userEmail=localStorage.setItem("useremail",email);
  
  //retrieving data
  var userName=localStorage.getItem("username",name);
  var userEmail=localStorage.getItem("useremail",email);
}  