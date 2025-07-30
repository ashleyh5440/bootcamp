export function CloudButton(){
  
  const myWidget = cloudinary.createUploadWidget({
    cloudName: 'cloudname', 
    uploadPreset: 'preset'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        // add state change functions here using the result info
      }
    }
  )
  
  const openWidget = (event) => {
    console.log("test");
    myWidget.open();
  }
  return (
    <button onClick={openWidget} type="submit" className={`animate__animated animate__slideInLeft`}>
      Upload to Cloud
    </button>
  )
}