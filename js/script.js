// SET FOCUS - this is so 'name' is already selected

function setFocus (){
    document.getElementById("name").focus();
}
setFocus();

// JOB ROLE SECTION

const hideOther = document.getElementById('other-title');
hideOther.style.display = 'none'
const jobRole = document.getElementById('title')

jobRole.addEventListener('change', (e) => {

    if (e.target.value === 'other') {
      hideOther.style.display = 'block'
    
    } else {
      hideOther.style.display = 'none'
    }
});

// T SHIRT SECTION

const hideTheme = document.querySelectorAll('#design option')[0];
hideTheme.hidden = true;
const changeColor = document.querySelector('label[for="color"]');
changeColor.textContent = 'Please select a T-shirt theme.'
let allColors = document.getElementById('color');
allColors.hidden=true;
let showDesign = document.querySelector('#design')

showDesign.addEventListener('change', (e) => { 
 allColors.hidden = false 
  for (let i = 0; i < allColors.length; i ++) {
    if (e.target.value === 'js puns') { 
      if (allColors[i].innerHTML.includes('JS Puns')) {
        allColors[i].style.display = 'block' 
        allColors[0].selected = true;
        
      } else {
        allColors[i].style.display = 'none' 
      }
    }
    else if (e.target.value === 'heart js') {
      if (allColors[i].innerHTML.includes('JS shirt')) {
        allColors[i].style.display = 'block'
        allColors[3].selected = true;

      } else {
        allColors[i].style.display = 'none'
      }
    }
  }
});

//ACTIVITY SECTION

let activityRollup = document.createElement('div')
let activities = document.querySelector('.activities');
activities.appendChild(activityRollup);
let activityCost = 0

activities.addEventListener('change', (e) => {
  const clicked = e.target;
  let displayCost = clicked.getAttribute('data-cost');
  displayCost = parseInt(displayCost);
  if (clicked.checked) {
    activityCost = activityCost + displayCost
  } else {
    activityCost = activityCost - displayCost
  }

  activityRollup.style.color = "Black"
  activityRollup.textContent = `Total: $${activityCost}`
  let dateTimeGroup = clicked.getAttribute('data-day-and-time');
  const checkBoxes = document.querySelectorAll('.activities input');
  for (let i = 0; i < checkBoxes.length; i ++) {
    const checkboxType = checkBoxes[i].getAttribute('data-day-and-time')
    if (dateTimeGroup === checkboxType && clicked !== checkBoxes[i]) {
      if (clicked.checked) {
          checkBoxes[i].disabled = true

      } else {
        checkBoxes[i].disabled = false 
      }
    }
  }
})

// PAYMENT SECTION

const selectPayment = document.querySelectorAll('#payment option')[0];
selectPayment.remove();
const selectCredit = document.querySelectorAll('#payment option')[0];
const payment= document.querySelector('#payment')
const creditCard = document.querySelector('.credit-card');
const paypal = document.querySelector('.paypal');
paypal.hidden = true 
const bitcoin = document.querySelector('.bitcoin');
bitcoin.hidden = true 
payment.addEventListener('change', (e) => {
 if (e.target.value === 'credit card') {
    creditCard.hidden = false
    paypal.hidden = true
    bitcoin.hidden = true

 } else if (e.target.value === 'paypal') {
  creditCard.hidden = true
  paypal.hidden = false
  bitcoin.hidden = true

 } else if (e.target.value === 'bitcoin'){
  creditCard.hidden = true
  paypal.hidden = true
  bitcoin.hidden = false
 } 
}
);

//VALIDATOR VARIABLES
const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.getElementById("mail");
const activityOptions = document.querySelectorAll('.activities input')
const activityLegend = document.querySelector('.activities legend')
const newDiv = document.createElement('div')
activityLegend.appendChild(newDiv)
const cardNumber = document.getElementById('cc-num')
const zipCode = document.getElementById('zip')
const validateCvv = document.getElementById('cvv')

//NAME VALIDATION

const nameValidator = () => {
const nameValue = name.value;
const regex = new RegExp(/^[a-zA-Z ]{2,30}$/);
    if (regex.test(nameValue)) {
      name.style.borderColor = "white";
      return true;

    } else {
      name.style.borderColor = "red";
      return false;
  }
}

//EMAIL VALIDATION
const emailValidator = () => {
  const emailValue = email.value
  const regex = new RegExp(/\S+@\S+\.\S+/); 
  if (regex.test(emailValue)) {
    email.style.borderColor = "white";
    return true;

  } else {
    email.style.borderColor = "red";
    return false;
  }
  }
//need "RegExp" this code snippet was provided by Keagan Fouche and Abhijeet Kasurde from stackoverflow.com
//ACTIVIITY VALIDATION

const activityValidator = () => {
  for(let i =0; i < activityOptions.length; i++) {
    if(activityOptions[i].checked) {
      activityRollup.style.color = "Black"
      activityRollup.textContent = `Total: $${activityCost}`
      return true;
    } else {
      activityRollup.style.color = "Red"
      activityRollup.textContent = "You must select at least one activity" 
    }
  } return false
}

//CREDIT CARD VALIDATION

const cardValidator = () => {
  const cardValue = cardNumber.value
  const re = new RegExp(/[1-9][0-9]{12,15}/); 
  if (re.test(cardValue)) {
    cardNumber.style.borderColor = "white";
    return true;
  } else {
    cardNumber.style.borderColor = "red";
    return false;
  }
  }

//ZIP CODE VALIDATION

const zipdValidator = () => {
  const zipValue = zipCode.value
  const re = new RegExp(/^\d{5}(?:[-\s]\d{4})?$/); 
  if (re.test(zipValue)) {
    zipCode.style.borderColor = "white";
    return true;
  } else {
    zipCode.style.borderColor = "red";
    return false;
  }
  }

//CVV VALIDATION

  const cvvValidator = () => {
    const cvvValue = validateCvv.value
    const re = new RegExp(/^[0-9]{3}$/); 
    if (re.test(cvvValue)) {
      validateCvv.style.borderColor = "white";
      return true;
    } else {
      validateCvv.style.borderColor = "red";
      return false;
    }
  }

//VALIDATION LISTENER

//We have an if statement before all the credit card functions fire in case another form of payment is chosen

    form.addEventListener('submit', (e) => {
      if (!nameValidator()) {
        e.preventDefault();
      } 

      if (!emailValidator()) {
        e.preventDefault();
      } 

      if (!activityValidator()) {
        e.preventDefault();
      } 

      if (selectCredit.selected === true ) {

      if (!cardValidator()) {
        e.preventDefault();
      } 
      
      if (!zipdValidator()) {
        e.preventDefault();
      } 
      
      if (!cvvValidator()) {
        e.preventDefault();
      } 
    }
  }
);


