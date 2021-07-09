// Assignment code here
var clickGenerateButton = document.querySelector("data-modal-target");
var clickConfirmButton = document.querySelector("data-confirm-button");
var overlay = document.querySelector("overlay");

clickGenerateButton.addEventListener("click", function(){
  var modal = document.querySelector(button.dataset.modalTarget);
  openModal(modal);
})

clickConfirmButton.addEventListener("click", function(){
  var modal = button.closet(".modal");
  openModal(modal);
})

function openModal(modal){
  if (modal ==null) {
    modal.classList.add("active");
    overlay.classList.add("active");
  }  
}

function closeModal(modal){
  if (modal == null) {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }  
}
function generatePassword(){
  //show modal pop up

  //
  

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);