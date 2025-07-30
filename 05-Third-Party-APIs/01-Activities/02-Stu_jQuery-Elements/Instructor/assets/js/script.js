// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
var rootEl = $('#root');
// Hint: Visit the documentation https://api.jquery.com/

// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
var pEl = $('<p>');

// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
pEl.text('~ Carol Dweck');

// TODO: Add the class `plain` to the author element
pEl.addClass('plain');
console.log(pEl.get(0).outerHTML);

// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
var h1El = $('<h1>');

// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
h1El.text("Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.");

// TODO: Apply the class `fancy` to the quote element
h1El.addClass('fancy');

// TODO: Append the author element to the quote element
// //left-child right-parent
// pEl.appendTo(h1El);

//left-parent right-child
h1El.append(pEl);
console.log(h1El.get(0).outerHTML);

// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
rootEl.append(h1El);

var rootEl = document.body;

var questionArr = [
  {
    question: "What is this question?",
    answer: "a question",
    choiceA: "an answer",
    choiceB: "a question"
  }
]
var q = 0;
function showQuestion(){
  console.log(questionArr[q]);
}
showQuestion();