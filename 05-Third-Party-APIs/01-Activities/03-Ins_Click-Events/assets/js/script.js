var alertButtonEl = $('#alert-btn');
var themeButtonEl = $('#theme-btn');
var lotteryButtonEl = $('#lottery-btn');
var lotteryNumberEl = $('#lottery-number');
var refreshButtonEl = $('#refresh-btn');
var clickTestButtonEl = $('.click-test'); // select 2 buttons

// light theme state
var isDark = true;

// Click event causes alert "Hello World"
// Vanilla JS equivalent: `addEventListener`
alertButtonEl.on('click', function () {
  alert('Hello World');
});
// instead of addEventListener, use "on"
// Click event causes alert light theme toggle
themeButtonEl.on('click', function () {
  if (isDark) {
    $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
  } else {
    $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
  }
  isDark = !isDark;
});

// Click event causes random number
lotteryButtonEl.on('click', function () {
  var random = Math.floor(Math.random() * 100000000) + 10000000;
  console.log(random);
  lotteryNumberEl.text(random);
});

// Click event causes refresh
refreshButtonEl.on('click', function () {
  location.reload();
});

function runClickTest(event){
  console.log(event.target);
  // event.target what we are clicking on
  // what triggered the event???
  // convert event.target to a jquery selector
  var buttonEl = $(event.target);
  console.log(buttonEl);

  // attr will GET a value if there is only 1 param input
  var num = buttonEl.attr("data-number");
  num = parseInt(num); // ensure that it is a number
  if(num === 2){
    alert("Correct");
  }
  else{
    alert("Incorrect");
  }
}

clickTestButtonEl.on("click", runClickTest);
