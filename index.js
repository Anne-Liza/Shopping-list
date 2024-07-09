// Select elements from the HTML
const addItemForm = document.getElementById('shopping-form');
const addInput = document.querySelector('form input[type="text"]');
const removeButton = document.getElementById('remove');
const list = document.querySelector('.list');

// add a new item to the shopping list
function addNewItem(item) {
  // Create a new list item element
  const listItem = document.createElement('li');

  // Create a checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Add items to the list
  listItem.appendChild(checkbox);
  listItem.appendChild(document.createTextNode(' ' + item));
  list.appendChild(listItem);

  // Clear the input field
  addInput.value = '';
}

// Add event listener to the form for adding items
addItemForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  // Check if the input is not empty
  const newItem = addInput.value.trim(); 
    if (newItem) { 
    addNewItem(newItem);
  }
});


