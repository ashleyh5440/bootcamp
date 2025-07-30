const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
  // closure variable - private (cannot be seen)
  let count = 0;

  // returning a function(object) (fits the factory definition)
  return function () {
   // local to clickHandler, (closure) refers to line 5
    count++;
   // this count shows up on the page, and textContent is an attribute on the button
    this.textContent = `Clicks: ${count}`;
  };
};

// this loop will attach a factory object (event handler function with its own closure) to each button
for (let i = 0; i < buttons.length; i++) {
  // create
  // attr/text
  // append

  // addEventListener
  buttons[i].addEventListener('click', clickHandler());
}
