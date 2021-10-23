// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // Horn selector
  /*When you select a horn from the drop down menu, the following should occur:
  The correct image should display
  The correct audio sound file should be set*/
  const hornSelect = document.getElementById("horn-select")
  const images = document.querySelector('img');
  console.log(images); 

  hornSelect.addEventListener('input', updateHorn);

  function updateHorn (){
    console.log('change was made');
    images.src = "./assets/images/party-horn.svg";
    
  }
  // Volume Slider

  // Play sound
}

