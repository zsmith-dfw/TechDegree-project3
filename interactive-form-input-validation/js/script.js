
"use strict";

const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const framework = document.querySelector("#framework");
const languagesContainer = document.querySelector("#radio-wrapper");
const languagesInputs = document.querySelectorAll("#languages input");

const nameValidator = () => {
  const nameValue = name.value;
  console.log(nameValue);
    if (nameValue.length > 0) {
      name.style.borderColor = "white";
      return true;

    } else {
      name.style.borderColor = "red";
      return false;
    }

}

const emailValidator = () => {


    const emailValue = email.value

  const atIndex = emailValue.indexOf('@')
  console.log(atIndex)
  const lastIndex = emailValue.lastIndexOf('.')
  console.log(lastIndex)

  if (atIndex > 1 && lastIndex > atIndex + 1) {
    email.style.borderColor = "white"
    return true
  } else {
    email.style.borderColor = "red"
    return false
  }

}

const frameworkValidator = () => {
}

const languageValidator = () => {
}

form.addEventListener('submit', (e) => {
  if (!nameValidator()) {
    e.preventDefault();
    console.log('this validator preventd submission')
  } 

  if (!emailValidator()) {
    e.preventDefault();
    console.log('this validator preventd submission')
  }
  console.log('Submit handler is functional!');
});