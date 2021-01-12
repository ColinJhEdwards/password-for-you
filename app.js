// Selectors
const button = document.querySelector(".press");

const capChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numChars = "0123456789";
const specChars = "!@#$%^&*()_+?><:;{}[]";

//Event Listeners

button.addEventListener("click", createPassword);

//Functions

function createPassword() {
  const lengthPrompt = prompt(
    "How long would you like your password to be? (8-128 characters)"
  );
  // If the prompt critera is met the function will continue else a alert will be shown
  if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert("Password must be between 8-128 characters!");
  } else {
    const capConfirm = confirm(
      "Would you like your password to contain capital letters? (Yes or No)"
    );
    const specConfirm = confirm(
      "Would you like your password to contain special characters? (Yes or No)"
    );
    const numConfirm = confirm(
      "Would you like your password to contain numbers? (Yes or no)"
    );
    // This will reset the mainChars every time the password is generated so previous inputs don't remain
    let mainChars = "abcdefghijklmnopqrstuvwxyz";
    // if the prompt is answered "yes" then include the associated content, else add nothing
    if (capConfirm == true) {
      mainChars += capChars;
    } else {
      mainChars += "";
    }
    if (specConfirm == true) {
      mainChars += specChars;
    } else {
      mainChars += "";
    }
    if (numConfirm == true) {
      mainChars += numChars;
    } else {
      mainChars += "";
    }
    //generate password
    const passwordLength = lengthPrompt;
    let password = "";
    for (var i = 0; i < passwordLength; i++) {
      password += mainChars[Math.floor(Math.random() * mainChars.length)];
    }
    document.getElementById("password").value = password;
  }
}
