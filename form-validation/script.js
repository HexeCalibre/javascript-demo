const submitButton = document.querySelector("#submitButton");
const userNameTextBox = document.querySelector("#userName");
const passwordTextBox = document.querySelector("#password");
const submitMsg = document.querySelector("#submitMsg");

function isValidInput(inputBox) {
  if (inputBox != null && inputBox.value.trim() != "") {
    return true;
  } else {
    return false;
  }
}

function submitForm() {
  alert("Submitted Successfully");
}

submitButton.addEventListener("click", (event) => {
  if (isValidInput(userNameTextBox) && isValidInput(passwordTextBox)) {
    submitMsg.classList.remove("error");
  } else {
    submitMsg.classList.add("error");
    submitMsg.innerText = "Please check your details";

    //this code stops the submission
    event.preventDefault();
    event.stopPropagation();
  }
});
