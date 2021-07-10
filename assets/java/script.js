//button elements
var clickGenerateButton = document.getElementById("generate");
var clickConfirmButton = document.getElementById("confirm");
//modal elements
var overlay = document.getElementById("overlay");
var passFrom = document.getElementById("popup");
//password parameters
var length = document.getElementById("passwordLength").value;
var length = document.getElementById("uppercase").checked;
var length = document.getElementById("lowercase").checked;
var length = document.getElementById("numeric").checked;
var length = document.getElementById("specialCharacters").checked;

//open popup window
function openModal(){
  passFrom.classList.add("active");
  overlay.classList.add("active");
}

//close popup window
function closeModal(){
  passFrom.classList.remove("active");
  overlay.classList.remove("active");
}

//parameter check
function checkParam(){
  var length = document.getElementById("passwordLength");

}

//generate password
function generatePassword(){
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
clickGenerateButton.addEventListener("click", function(){
  openModal();
})

clickConfirmButton.addEventListener("click", function(){
  
  closeModal();
})