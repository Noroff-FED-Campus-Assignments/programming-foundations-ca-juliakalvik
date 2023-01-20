const heading = document.querySelector("h2");
const button = document.querySelector("button");
const buttonLower = document.querySelector(".lower");
const heading2 = document.querySelector(".h2shutter");
const buttonShutterUp = document.querySelector(".shutter_up")
const buttonShutterDown = document.querySelector(".shutter_down")
const heading3 = document.querySelector(".h2apt");
const buttonApertureUp = document.querySelector(".aperture_up")
const buttonApertureDown = document.querySelector(".aperture_down")
const buttonTakePicture = document.querySelector(".take_picture_button")

const owner = {
    firstName: "Julia",
    surname: "Kalvik",
    age: 26,
    interests: ["Photography", "Coding", "Food"]
  }
  
  const cameraInfo = 
    {
      brand: "Canon",
      model: "R6",
      lens: "Sigma Art 50mm",
      age: 1,
      turnedOn: true,
      owner: owner,

    }
  
  const cameraSettings = {
      iso: 100,
      shutterSpeed: 250,
      aperture: 1.4,
      takePicture() {
        alert("📸");
      }
    }

    const cameraSettingsIso = {
        iso: [
            {
                name: "low",
                ratio: 100,
            },
            {
                name: "middle",
                ratio: 500,
            },
            {
                name: "high",
                ratio: 1000
            }
        ]
    };
  
  const camera = [cameraInfo, cameraSettings, cameraSettingsIso];
  
  console.log(camera[1])

function changeIsoHigher() {
    if(cameraSettings.iso < 12000){
        cameraSettings.iso = cameraSettings.iso + 100
    }
    heading.innerHTML = "ISO: "+cameraSettings.iso ;
}

  button.onclick = changeIsoHigher;

  function changeIsoLower() {
    if(cameraSettings.iso != 100){
        cameraSettings.iso = cameraSettings.iso - 100
    }
    heading.innerHTML = "ISO: "+cameraSettings.iso; 
  }

  buttonLower.onclick = changeIsoLower;

  function changeShutterUp() {
    heading2.innerHTML = "Shutter speed: 380";
  }

  buttonShutterUp.onclick = changeShutterUp;

  function changeShutterDown() {
    heading2.innerHTML = "Shutter speed: 250";
  }

  buttonShutterDown.onclick = changeShutterDown;

  function changeApertureUp() {
    heading3.innerHTML = "Aperture: 2.8";
  }

  buttonApertureUp.onclick = changeApertureUp;

  function changeApertureDown() {
    heading3.innerHTML = "Aperture: 1.4";
  }

  buttonApertureDown.onclick = changeApertureDown;


  buttonTakePicture.onclick = cameraSettings.takePicture