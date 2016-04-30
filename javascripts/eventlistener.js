"use strict";
var CarLot = (function(originalCarLot) {
  originalCarLot.activateEvents = function() {
    var currentCar = document.getElementsByClassName("card");
  for (let i = 0; i < currentCar.length; i++){
    let currentInfo = currentCar[i].description;
    currentCar[i].addEventListener("click", function(){
      originalCarLot.removeSelected();
      userinput.value = "";
      userinput.focus();
      currentCar[i].classList.add("selected");
      
      })
     } 
   }  
originalCarLot.removeSelected = function() {
  var currentCar = document.getElementsByClassName("card");
  for (let i = 0; i < currentCar.length; i++){
  currentCar[i].classList.remove("selected");
  }
}

function newDescription(){
  userinput.addEventListener("click", function(event){
    if (currentCar.classList.contains("selected")) {
      let newInfo = event.userinput.value;
    currBio.innerHTML = newBio;
  
      if (event.keyCode === 13){
        currentInfo.innerHTML = newInfo;
        userinput.value = "";
        }
      }
  })
}

  return originalCarLot;
  })(CarLot || {});