// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const dropDown = document.getElementById("voice-select");
  const voiceList = window.speechSynthesis.getVoices();
  const face = document.querySelector("img");
  

  window.addEventListener('load', function(){
    // populate them options
    for (let i =0; i<voiceList.length;i++){
      let newOption = document.createElement('option');
      newOption.textContent = voiceList[i].name + ' | ' + voiceList[i].lang;
      newOption.setAttribute('lang', voiceList[i].lang);
      dropDown.appendChild(newOption);
    }
  })

  // button time!
  const button = document.querySelector("button");
  const text = document.getElementById("text-to-speak");

  button.addEventListener('click', buttonAction);

  function buttonAction () {

    // make the utterer
    let speaker = new SpeechSynthesisUtterance(text.value);
    speaker.addEventListener ('start', function(){
      face.src="./assets/images/smiling-open.png";
    });
    speaker.addEventListener ('end', function(){
      face.src="./assets/images/smiling.png";
    });

    // assign the language
    let chosenLang = dropDown.selectedOptions[0].getAttribute('lang');
    
    for (let i=0; i<voiceList.length;i++){
      
      if (voiceList[i].lang == chosenLang){
        speaker.voice = voiceList[i];
      }
    }
    // future reference: mozilla did this by assigning window.speechsynthesis to a variable *shrug*
    window.speechSynthesis.speak(speaker);

    /*setTimeout (function() {
      if (window.speechSynthesis.speaking){
        face.src="./assets/images/smiling-open.png";
      }
    }, 50);
    face.src="./assets/images/smiling.png";*/

    // it seems the speechsynthesisutterance DOES have a listener

  }

}