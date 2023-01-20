var heading = document.querySelector("h2");
var button = document.querySelector("button");
var buttonLower = document.querySelector(".lower");
var heading2 = document.querySelector(".h2shutter");
var buttonShutterUp = document.querySelector(".shutter_up")
var buttonShutterDown = document.querySelector(".shutter_down")
var heading3 = document.querySelector(".h2apt");
var buttonApertureUp = document.querySelector(".aperture_up")
var buttonApertureDown = document.querySelector(".aperture_down")


const owner = {
    firstName: "Julia",
    surName: "Kalvik",
    age: 26,
    interests: ["Photography", "Coding", "Food"]
  }
  
  const cameraInfo = 
    {
      brand: "Canon",
      model: "R6",
      lens: "Sigma Art 50mm",
      age: 1,
      owner: "Julia"
    }
  
  const cameraSettings = {
      iso: 100,
      shutterSpeed: 250,
      aperture: 1.4
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
    heading.innerHTML = "ISO: 200" ;
}

  button.onclick = changeIsoHigher;

  function changeIsoLower() {
    heading.innerHTML = "ISO: 100";
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
