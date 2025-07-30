const birdChirp = () => 
  new Promise((resolve, reject) => {
    setTimeout( () => {
      const hour = Math.floor(Math.random() * 24);
      if(hour < 12){
        resolve("Chirp at " + hour);
      } 
      else{
        reject(new Error("Bird is asleep at " + hour));
      }
    }, 3000);
  });

birdChirp()
.then( out => {
  console.log(out);
})
.catch( err => {
  console.log("Errorrorrr")
  console.log(err);
});
