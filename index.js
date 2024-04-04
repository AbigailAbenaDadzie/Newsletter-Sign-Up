const form = document.querySelector("form");
const card_1 = document.querySelector(".card");
const email = document.querySelector("#email");
const emailCaptured = document.querySelector(".email");
const errorMessage = document.querySelector(".error_message");
const emailText = document.querySelector("#emailText");
const card_2 = document.querySelector(".card-2");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = email.value;
  console.log(email);
  const validPattern = /[a-zA-Z]+[0-9]*@[a-zA-Z]+[.][a-zA-Z]+/.test(emailValue);
  console.log(validPattern);
  if (!emailValue || !validPattern) {
    errorMessage.innerText = "Valid email required";
    emailText.innerHTML = email.value;
    email.style.color = "red";
    email.style.border = "1px solid red";
  } else if (emailValue && validPattern) {
    errorMessage.innerText = "";
    email.style.color = null;
    email.style.border = null;
    emailCaptured.innerText = email.value;
    card_1.classList.add("hide");
    card_2.classList.remove("hide");
  }
});
