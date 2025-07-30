var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  var shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem);

  // add delete button to remove shopping list item
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

    // add delete button to remove shopping list item
    shoppingListItemEl.append(
      '<button class="btn btn-info btn-small duplicate-item-btn">Duplicate</button>'
    );

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val('');
}

// TODO: Create a function to handle removing a list item when `.delete-item-btn` is clicked
function handleRemove(event){
  console.log(event.target); // what I clicked, i can see now

  // use console debug (blue marker) to get these methods
  $(event.target).parent().remove();
}

// TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute the function created above
shoppingListEl.on('click', '.delete-item-btn', handleRemove);

function handleDuplicate(event){
  console.log(event.target); // what I clicked, i can see now

  //create
  var liEl = document.createElement("li");

  //attr/text
  var classes = event.target.parentElement.classList;
  liEl.classList.add(classes[0],classes[1],classes[2],classes[3],classes[4],classes[5]);
  // // if you prefer a for loop
  // for(var i = 0; i < classes.length; i++){
  //   liEl.classList.add(classes[i]);
  // }
  liEl.innerHTML = event.target.parentElement.innerHTML;

  //append
  shoppingListEl.append(liEl);

//   // duplicate in jQuery
//   var liEl = $(event.target.parentElement.outerHTML);

//   shoppingListEl.append(liEl);
}

shoppingListEl.on('click', '.duplicate-item-btn', handleDuplicate);

// directly attach the event listener
// $('.delete-item-btn').on('click', handleRemove);

shoppingFormEl.on('submit', handleFormSubmit);
