var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li"); // dom nodes
var li2 = document.createElement("li");// dom nodes
var li3 = document.createElement("li");// dom nodes
var li4 = document.createElement("li");// dom nodes

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
// * It's done when an ordered list containing four favorite foods is visible in the HTML below the text "My favorite foods are:"

var list = [li1, li2, li3, li4]; // dom node list
var favoriteFoods = ["pizza", "chicken with rice and beans", "bbq chicken", "burgers with spaghetti and meatballs"];
var colors = ["red", "green", "blue", "brown"];

// listEl.appendChild(li1);
// listEl.appendChild(li2);
// listEl.appendChild(li3);
// listEl.appendChild(li4);

// very similar to 
// for(var i = 0; i < list.length; i++){
//     var item = list[i];
// }
for(item of list){
  // create already done above in lines 11-14

  // attributes/text/content
  item.textContent = favoriteFoods.shift();

// * It's done when each list item has a font color of `white`, padding of `5px`, and `margin-left` of `35px`.
  item.style.color = 'white';
  item.style.padding = '5px';
  item.style.marginLeft = '35px';
  // item.setAttribute("style", "color: white; padding: 5px; margin-left: 35px; ");

  // * It's done when each list item has a different background color.
  item.style.backgroundColor = colors.shift();

  // append
  listEl.appendChild(item);
}
// * It's done when the ordered list has a background color of `#333333` and padding of `20px`.
listEl.style.backgroundColor = '#333333';
listEl.style.padding = '20px';



