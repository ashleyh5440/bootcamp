// Select the container which holds our buttons that we want to add our event listener too.
const containerEl = document.getElementById('container');


function ClickFactory(button){
  let count = 0; // closure variable (private)
  return {
    handleIt: () => {
      count++;
      button.setAttribute('data-count', count);
      button.textContent = `Clicks: ${count}`;
    }
  }
}

let clicks = [];

const clickHandler = function(event) {
  // Check to see if the element is a button.
  if (event.target.matches('button')) { // .matches('childselector')
    const button = event.target;
    console.log("clicked a button");
    let id = button.id;
    if(id){
      clicks[parseInt(id.replace("button-", ""))].handleIt();
    }
    else{
      button.id = "button-" + clicks.length;
      clicks.push(ClickFactory(button));
      clicks[button.id.replace("button-", "")].handleIt()
      console.log(button.id.replace("button-", ""));
    }
  }


};

// Add the click handler to the container that holds our buttons.
containerEl.addEventListener('click', clickHandler);





