// 1) Where is carNoise stored?
//global scope

const carNoise = 'Honk';
// 2) Where is goFast stored?
// global scope

const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // local scope, stored in the template literal in makeNoise
  
  // 5) Where is makeNoise stored?
  //local scope
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // function makeNoise is called and passed carNoise
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// when pop up appears, ok = true cancel = false
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
