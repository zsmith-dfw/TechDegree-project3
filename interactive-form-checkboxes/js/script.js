/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Checkboxes - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */
"use strict";
/*** 
 * Once loaded in the browser, you'll see two lists of checkboxes on the page 
 * Users should only be permitted to select one item per each list 
 * But currently, they can select as many as they want  
 * So your job is to prevent this by listening for a user click on the checkboxes
 * And then disabling or enabling all the items in a list except the one the user just clicked
 * Follow the code and instructional comments below to complete this exercise
***/
/* Variable to store all the checkboxes - You will use this in the event listener below to create a loop */
const checkboxes = document.querySelectorAll('.options input');
/**
 * Event listener for checkboxes
 */
document.querySelector('.options').addEventListener('change', (e) => {
  // YOUR CODE GOES HERE!!! Do the steps below to complete this challenge
  const clicked = e.target
  const clickedType = clicked.getAttribute('data-type')
  console.log(clicked)
  console.log(clickedType)
  for (let i = 0; i < checkboxes.length; i++) {
    const checkboxType = checkboxes[i].getAttribute('data-type')
   if (clickedType === checkboxType && clicked !== checkboxes[i]) {
     checkboxes[i].disabled = true
  } else {
    checkboxes[i].disabled = false;
  }
}
  // 1) Create a variable named clicked to store the checkbox input that was just clicked
  //    - `e.target` will be helpful here
  // 2) Create a variable named clickedType to store the `data-type` attribute of the checkbox that was just clicked
  //    - the `getAttribute` method will be helpful here
  // 3) Log out the two variables you just created to confirm their values
  // 4) Use the `checkboxes` variable that was created for you above, and a `for` loop to iterate over all the checkbox input elements
  // 5) In the loop, create a variable named `checkboxType` to store the `data-type` attribute of the `checkboxes[i]` in the loop's current iteration
  // 6) Create an `if` statement to check which items to disable/enable.  Two conditions need to be checked: 
  //    - We only want to disable/enable the item if it in the same list is the selection, 
  //    - So check that the clicked checkbox and the checkbox at the loop's current iteration have the same type
  //    AND
  //    - We don't want to disable/enable the checkbox that was just clicked
  //    - So check that the clicked checkbox is not the checkbox in the loop's current iteration
  //    - That will look something like this - `(clickedType === checkboxType && clicked !== checkboxes[i])`
  // 7) In the `if` statement, create an `if/else` statement to check one condition:
  //    - If the clicked checkbox is checked or unchecked
  //    - That will look something like this - `(clicked.checked)`;
  // 8) If the `clicked` checkbox is `checked`, use dot notation to set the `disabled` property of `checkboxes[i]` to true
  // 9) Else, set the `disabled` property of `checkboxes[i]` to false
  /* Helpful log statement to test that the listener is working - feel free to delete this or comment it out */
  console.log("The checkboxes' change event listener is functional!");
});