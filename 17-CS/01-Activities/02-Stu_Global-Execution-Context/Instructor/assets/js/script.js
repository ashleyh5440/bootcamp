// 1) Where is carNoise stored?
// global scope
const carNoise = 'Honk';
// 2) Where is goFast stored?
// global scope function
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // speed is local and it is assigned the value 80
  
  // 5) Where is makeNoise stored?
  // stored locally
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // give the value Honk to the function makeNoise and console.log
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// cancel = F, will not call goFast, ok = T, this will call goFast
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
