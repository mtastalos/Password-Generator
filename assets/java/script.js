//button elements
var clickGenerateButton = document.getElementById("generate");
var clickConfirmButton = document.getElementById("confirm");
//modal elements
var overlay = document.getElementById("overlay");
var passFrom = document.getElementById("popup");
//password values
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialLetters = "!@#$%^&*()_+";
var password = "";

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

//generate password
function generatePassword(){
    //password parameters
    var lengthParm = document.getElementById("passwordLength").value;
    var uppercaseParm = document.getElementById("uppercase").checked;
    var lowercaseParm = document.getElementById("lowercase").checked;
    var numbericParm = document.getElementById("numeric").checked;
    var specialCharParm = document.getElementById("specialCharacters").checked;

    //check to see if length is correct size 
    if (lengthParm<8 || lengthParm > 120){
      window.alert("Please select a passwordlength between 8 and 120 characters.")
      return;
    }
    //check to see if at least one parameter was selected
    else if ( uppercaseParm === false && lowercaseParm === false && numbericParm === false && specialCharParm === false){
      window.alert("Please select at least one type to include in your password");
      return;
    }
    else{
      var password = "";
      // var Params = [{uppercaseParmChecked,uppercaseParm}, {lowercaseParmChecked,lowercaseParm}, {numbericParmChecked,numbericParm}, {specialCharParmChecked,specialCharParm}];
      for (i=0;i>lengthParm;i++){
        var controller = true;
        while (controller){
          switch (Math.floor(Math.random()*4)){
            case 0:
              if(uppercaseParm===true){

                controller = false;
                break;
              }
            case 1:
              if(lowercaseParm===true){
                controller = false;
                break;
              }
            case 2:
              if(numbericParm===true){
                controller = false;
                break;
              }
            case 3:
              if(specialCharParm===true){
                controller = false;
                break;
              }
          }//end of switch
        }//end of while
      }//when of for
    }//end of else
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

clickConfirmButton.addEventListener("click", function(e){
  //stops form from closing by itself
  e.preventDefault();
  generatePassword();
})