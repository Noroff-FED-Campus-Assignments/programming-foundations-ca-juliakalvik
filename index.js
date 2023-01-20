var heading = document.querySelector("h2");
var button = document.querySelector("button");
var buttonLower = document.querySelector(".lower");

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
  
  const camera = [cameraInfo, cameraSettings];
  
  console.log(camera[1])

function changeIsoHigher() {
    heading.innerHTML = "ISO 200" ;
}

  button.onclick = changeIsoHigher;

  function changeIsoLower() {
    heading.innerHTML = "ISO 100";
  }

  buttonLower.onclick = changeIsoLower;

