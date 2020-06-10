function setFocus (){
    document.getElementById("name").focus();
}
setFocus();

const hideOther = document.getElementById('other-title')
hideOther.style.display= 'none';

const hideTheme = document.querySelectorAll('#design option')[0];
hideTheme.hidden = true;
const changeColor = document.querySelector('label[for="color"]');
changeColor.textContent = 'Please select a T-shirt theme.'
const hideColors = document.getElementById('color');
hideColors.hidden=true;
console.log(hideColors);

const showDesign = document.querySelector('#design')
const heartOption = document.querySelector('option[value="heart jscolors-js-puns]');
const punOption = document.querySelector('option[value="js puns"]');
showDesign.addEventListener('change', (event) => {
  if (punOption.selected = true) {
      heartOption.hidden = true

  }
}

