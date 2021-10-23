// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // Horn selector
  /*When you select a horn from the drop down menu, the following should occur:
  The correct image should display
  The correct audio sound file should be set*/

  // get the horn selector html element into the script
  const hornSelect = document.getElementById("horn-select")
  // get an array with all the images in the doc. The first is the horn and the second is the volume
  const images = document.querySelectorAll('img');
  
  // add a listener to the horn selector - when its value updates run the fn updateHorn.
  hornSelect.addEventListener('input', updateHorn);

  function updateHorn (){
    // console.log('change was made');
    // images[0].src = "./assets/images/party-horn.svg";

    // it seems hornSelect.value will correctly present the active/chosen value of the select element.
    // https://stackoverflow.com/questions/3301688/how-do-you-get-the-currently-selected-option-in-a-select-via-javascript
    switch (hornSelect.value){
      case "air-horn":
        images[0].src = "./assets/images/air-horn.svg";
        break;
      case "car-horn":
        images[0].src = "./assets/images/car-horn.svg";
        break;
      case "party-horn":
        images[0].src = "./assets/images/party-horn.svg";
        break;
      default:
        images[0].src  = "./assets/images/no-image.png";
    }
    
  }
  // Volume Slider

  // Play sound
}

