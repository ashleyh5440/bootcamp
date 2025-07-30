console.log("Test connection");
const formEl = document.querySelector("#speech-form");
const endEl = document.querySelector("#end");
const resultEl = document.querySelector("#result");

let recognition = new webkitSpeechRecognition();

recognition.lang = window.navigator.language;
recognition.interimResults = true;
recognition.continuous = true;

formEl.addEventListener('submit', (event) => { 
  event.preventDefault();
  recognition.start();
});

endEl.addEventListener('click', (event) => { 
  event.preventDefault();
  event.stopPropagation();
  recognition.stop(); 
});

recognition.addEventListener('result', (event) => {
  const result = event.results[event.results.length - 1][0].transcript;
  resultEl.textContent = result;
});