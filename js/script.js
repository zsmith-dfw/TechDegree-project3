
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
let allColors = document.getElementById('color');
allColors.hidden=true;


console.log(allColors);
let punsTheme = document.querySelectorAll('#design option')[1]
let loveTheme = document.querySelectorAll('#design option')[2]
let showDesign = document.querySelector('#design')


showDesign.addEventListener('change', (e) => { // change event listener
 console.log(e.target.value);
 allColors.hidden = false // displayig color section
  for (let i = 0; i < allColors.length; i ++) { // for loop looping through color options
    if (e.target.value === 'js puns') { //if what user picks equals the punsTheme
      if (allColors[i].innerHTML.includes('JS Puns')) { // if loop includes context JS puns
       console.log(allColors[i].innerHTML);
        allColors[i].style.display = 'block' //display them
        allColors[0].selected = true;
        
      } else {
        allColors[i].style.display = 'none' // if not display none
      }


    }
    else if (e.target.value === 'heart js') {
      if (allColors[i].innerHTML.includes('JS shirt')) {
        console.log(allColors[i].innerHTML);

   
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
const activities = document.querySelector('.activities');
activities.appendChild(activityRollup);
let activityCost = 0
console.log(activityRollup);

activities.addEventListener('change', (e) => {
  const clicked = e.target;
  console.log(clicked);
  let displayCost = clicked.getAttribute('data-cost');
  displayCost = parseInt(displayCost);
  // console.log(displayCost);
  if (activities === clicked) {
    activityCost = activityCost + displayCost

  } else {
    activityCost = activityCost - displayCost
    
  }
  console.log(activityCost);

})










