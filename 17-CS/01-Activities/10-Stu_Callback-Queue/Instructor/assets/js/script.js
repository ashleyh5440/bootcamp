// function to block the stack for x number of milliseconds
const pause = milliSeconds => {
  // get the current time
  // var startTime = new Date().getTime(); 
  // block stack until time's up
  // while (new Date().getTime() < startTime + milliSeconds); 

  // document.querySelector("form").style.display = 'none';
  document.querySelector("button").disabled = true;
  setTimeout(() => {
    
    document.querySelector("button").disabled = false;
    // document.querySelector("form").style.display = 'block';
    console.log("waited 8s")
  }, milliSeconds)
}

pause(8000);
