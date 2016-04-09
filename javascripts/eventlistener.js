"use strict";
var CarLot = (function(orignalCarLot) {
  orignalCarLot.activateEvents = function()
};

function addClickEvent(currentCar){
  for (let i = 0; i < privateInventory.length; i++){
    let currentInfo = description[i];
    currentCar.addEventListener("click", function(){
      removeSelected();
      userinput.value = "";
      userinput.focus();
      currentCar.classList.add("selected");
      //keyEvent(currCard, currBio);
      
  });
  }