//button elements
var clickGenerateButton = document.getElementById("generate");
var clickConfirmButton = document.getElementById("confirm");
//modal elements
var overlay = document.getElementById("overlay");
var passFrom = document.getElementById("popup");
//password values/parameter data
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
    //retrive password parameters selected
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
    //begin generating password
    else{
      password = "";
      //iterate the amount of the length
      for (i=0;i<lengthParm;i++){
        var controller = true;
        //randomly select a parameter, check if its selected, add random character, if not while loop continues 
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

      //regenerate the password if a parameter is selected but not used
      if(uppercaseParm===true){
        for(ii=0; ii<password.length;ii++){
          var check = password.charAt(ii)
          test = letters.indexOf(check);
          //if the character is not present, a "-1" is returned. Test for a single number to not = "-1" 
          if (test !==-1){
            break;
          }
          else if(test === -1 &&ii===password.length-1){
            generatePassword();  
          }            
        }
      }
      if(lowercaseParm===true){
        for(ii=0; ii<password.length;ii++){
          var check = password.charAt(ii)
          lowerLetters = letters.toLowerCase();
          test = lowerLetters.indexOf(check);
          if (test !==-1){
            break;
          }
          else if(test === -1 &&ii===password.length-1){
            generatePassword();
          }            
        }
      }
      if(numbericParm===true){
        for(ii=0; ii<password.length;ii++){
          var check = password.charAt(i)
          test = numbers.indexOf(check);
          if (test !==-1){
            break;
          }
          else if(test === -1 &&ii===password.length-1){
            generatePassword();
          }            
        }
      }
      if(specialCharParm===true){
        for(ii=0; ii<password.length;ii++){
          var check = password.charAt(ii)
          test = specialLetters.indexOf(check);
          if (test !==-1){
            break;
          }
          else if(test === -1 &&ii===password.length-1){
            generatePassword();
          }
        }
      }
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