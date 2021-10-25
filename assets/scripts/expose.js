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
    // Then just switch on the select value and change to the appropriate image.
    switch (hornSelect.value){
      case "air-horn":
        images[0].src = "./assets/images/air-horn.svg";
        audio.src = "./assets/audio/air-horn.mp3"
        break;
      case "car-horn":
        images[0].src = "./assets/images/car-horn.svg";
        audio.src="./assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        images[0].src = "./assets/images/party-horn.svg";
        audio.src="./assets/audio/party-horn.mp3";
        break;
      default:
        images[0].src  = "./assets/images/no-image.png";
    }

    
  }

  // Volume Slider:
  /*When you change the volume on the slider, the following should occur:
  At zero volume, the mute icon (level 0) should be displayed
  From 1 to < 33 volume the first volume level should be displayed
  From 33 to < 67 volume the second volume level should be displayed
  From 67 and up the third volume level should be displayed
  The correct volume icon should be set
  TODO The corresponding volume should be set for the audio element (note: this element’s volume is not out of 100)*/
  const volumeSlider = document.querySelector("input");
  const audio = document.querySelector('audio');
  console.log(audio);
  // console.log(volumeSlider);
  volumeSlider.addEventListener('input', updateVolSlide);

  function updateVolSlide () {
    if (volumeSlider.value == 0){
      images[1].src = "./assets/icons/volume-level-0.svg";
    } else if (volumeSlider.value >= 1 && volumeSlider.value<33){
      images[1].src = "./assets/icons/volume-level-1.svg";
    } else if (volumeSlider.value>=33 && volumeSlider.value<67){
      images[1].src = "./assets/icons/volume-level-2.svg";
    } else if (volumeSlider.value>=67) {
      images[1].src = "./assets/icons/volume-level-3.svg";
    }
    audio.volume = volumeSlider.value / 100;
    //console.log(audio.volume);
  }


  const playSound = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  playSound.addEventListener('click', buttonAction);

  function buttonAction (){
    console.log(audio.src);
    if (audio.src != ""){
      audio.play();
      if (hornSelect.value == "party-horn" && volumeSlider.value != 0){
          jsConfetti.addConfetti({emojis:['🦄'], confettiNumber: 500});
      }
    }
  }
}

