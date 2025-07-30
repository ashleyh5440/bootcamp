var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event){
  // preventing a refresh of the page
  event.preventDefault();
  console.log(event.target);// see our event listener is working
  console.log($('input[name=shopping-input]').val());

  var value = $('input[name=shopping-input]').val();

  // $(event.target).get(0).reset();
  $('input[name=shopping-input]').val('');

  //create
  var liEl = $('<li>');

  //text
  liEl.text(value);

  //append
  shoppingListEl.append(liEl);
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
// event listener for submitting a form
shoppingFormEl.on('submit', handleFormSubmit);
