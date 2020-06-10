/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Selects and Options - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

/***
 * When a user selects a shirt from the drop down menu, that shirt's image should be highlighted on the page
 * Follow the code and instructional comments below to complete this exercise
***/

// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

// 1) Follow the steps below to hide the "Select a shirt" option tag so users won't be able to select it or see it in the drop down menu
  // 1a) Target the "Select a shirt" `option` element with a querySelector, like so — ('option[value="Select a shirt"]') 
  // 1b) Use dot notation to set the `hidden` property to true on the "Select a shirt" `option` element 
const hideShirt = document.querySelector('option[value="Select a shirt"]').hidden = true;




// 2) Follow the steps below to practice manually selecting which option will show in the "Shirt Selection" field
  const shirtSelectElement = document.querySelector('#shirt-select-element');
  const shirtOptionElements = document.querySelectorAll('#shirt-select-element option')[2];
  shirtOptionElements.selected = true;
  console.log(shirtSelectElement);
  // console.log(shirtOptionElements);



  // 2a) Log both variables to the console to confirm their values
  // 2b) Use the second variable and bracket notation to select one of the option elements and try logging it out to confirm its value 
  // 2c) Use dot notation to set the `selected` property to true on the `option` element you selected above
  // 2d) Refresh the browser to see the new value in the `select` element
  // 2e) Experiment with setting the `selected` property to true or false on different option elements to see the results


/**
 * Event listener for checkboxes
 */
shirtSelectElement.addEventListener('change', (event) => {
  console.log(event.target.value);
  const image = document.querySelectorAll('.shirt-image');
    for(let i = 0; i < image.length; i++) {
      let alternate = image[i].alt;
      let eventValue = event.target.value;
      console.log(alternate);
      console.log(eventValue);
      if (alternate === eventValue) {
        image[i].classList.add('chosen') 
      } else { image[i].classList.remove('chosen')

      }
    }

// 3) Follow the steps below to highlight the selected shirt 
  // 3a) Log out the value of the `select` element with `event.target` technique — console.log(event.target.value);
  // 3b) Create a variable to store the shirt `img` elements, using a querySelectorAll, like so — ('.shirt-image') 
  // 3c) Create a `for` loop to iterate over the shirt `img` elements in the variable above
  // 3d) Inside the loop, create the following two variables:
    // One to store the alt attribute of the image at the loop's current iteration, like so: YourImgVariableName[i].alt
    // One for the `event.target.value`
  // 3e) Log out the two variables, refresh the page, and select a new shirt to confirm their values
  // 3f) Still inside the loop, create an if/else statement 
  // 3g) If the two variables you just created are equal, use the `.classList.add()` method to add the 'chosen' className to the img element
  // 3h) Else use the `.classList.remove()` method to remove the 'chosen' className from the from the img element

  console.log("The select element's change event listener is functional!");
});