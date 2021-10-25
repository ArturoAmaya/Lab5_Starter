// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const dropDown = document.getElementById("voice-select");
  const voiceList = window.speechSynthesis.getVoices();
  

  for (let i =0; i<voiceList.length;i++){
    let newOption = document.createElement('option');
    newOption.textContent = voiceList[i].name + ' | ' + voiceList[i].lang;
    newOption.setAttribute('lang', voiceList[i].lang);
    dropDown.appendChild(newOption);
  }

  // button time!
  const button = document.querySelector("button");
  const text = document.getElementById("text-to-speak");

  button.addEventListener('click', buttonAction);

  function buttonAction () {

    // make the utterer
    let speaker = new SpeechSynthesisUtterance(text.value);

    // assign the language
    let chosenLang = dropDown.selectedOptions[0].getAttribute('lang');
    for (let i=0; i<voiceList.length;i++){
      if (voiceList[i].name == chosenLang){
        speaker.voice = voiceList[i];
      }
    }
    // future reference: mozilla did this by assigning window.speechsynthesis to a variable *shrug*
    window.speechSynthesis.speak(speaker);

  }

}