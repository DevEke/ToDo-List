function newItem() {
  let list = $('#list');
  let li = $('<li></li>');
  let input = $('input');

// Creates a list item with entry
  let inputValue = input.val();
  let newItem = li.append(inputValue);

// Checks if input is empty and adds item to list
  if (!inputValue) {
    alert('Sorry, You should try to type something in.')
  }
  else {
    list.append(newItem);
  }
// Crosses an item off if its doubel clicked
  li.on('dblclick', function() {
    li.toggleClass('strike');
  })

//Adds a Delete button to each list item
  let deleteButton = $('<button class="close"></button>');
  let closeIcon = $('<img src="img/close-icon2.svg" alt="close icon">');
  deleteButton.append(closeIcon);
  li.append(deleteButton);
  deleteButton.on('click', function() {
    li.remove();
  })
//use to reorder list
  list.sortable();

//Clears input when item is entered
  input.val('');

}

//Allows enter button to function the same as the "Add" button.
$('input').keypress( function(e) {
  if (e.keyCode == '13') {
    e.preventDefault();
    newItem();
  }
});
