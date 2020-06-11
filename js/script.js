
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


const punsTheme = document.querySelectorAll('#design option')[1]
const loveTheme = document.querySelectorAll('#design option')[2]
const showDesign = document.querySelector('#design')



showDesign.addEventListener('change', (e) => {

  if(punsTheme.selected = true) {
    hideColors.hidden=false;

    const color1 = document.querySelectorAll('#color option')[3]
    const color2 = document.querySelectorAll('#color option')[4]
    const color3 = document.querySelectorAll('#color option')[5]
    const color4 = document.querySelectorAll('#color option')[0]
    const color5 = document.querySelectorAll('#color option')[1]
    const color6 = document.querySelectorAll('#color option')[2]

    color1.hidden = true
    color2.hidden = true
    color3.hidden = true 
    color4.hidden = false
    color5.hidden = false
    color6.hidden = false

} else if (loveTheme.selected = true) {
  hideColors.hidden = false;
  color1.hidden = false
  color2.hidden = false
  color3.hidden = false
  color4.hidden = true
  color5.hidden = true
  color6.hidden = true

}

});


// IF design option === 'Theme - JS Puns'
// show color drop down
// hide/disable colors from the other theme
// show colors from the correct theme (so it will always unhide if you switch back and forth)
// ELSE IF design option === 'Theme - I :heart: JS'
// show color drop down
// hide/disable colors from the other theme
// show colors from the correct theme

