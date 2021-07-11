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
      password = "";
      for (i=0;i<lengthParm;i++){
        var controller = true;
        console.log(password);
        while (controller){
          switch (Math.floor(Math.random()*4)){
            case 0:
              if(uppercaseParm===true){
                password += letters.charAt(Math.floor(Math.random()*letters.length));
                controller = false;
                break;
              }
              break;
            case 1:
              if(lowercaseParm===true){
                password += letters.charAt(Math.floor(Math.random()*letters.length)).toLowerCase();
                controller = false;
                break;
              }
              break;
            case 2:
              if(numbericParm===true){
                password += numbers.charAt(Math.floor(Math.random()*numbers.length));
                controller = false;
                break;
              }
              break;
            case 3:
              if(specialCharParm===true){
                password += specialLetters.charAt(Math.floor(Math.random()*specialLetters.length));
                controller = false;
                break;
              }
              break;
          }//end of switch
        }//end of while
      }//end of for
      closeModal();
      return password;
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
  writePassword();
})