// * BEGIN IMPORTS


import { getFish } from './fish/database.js';
import { FishList } from './fish/FishList.js';

import { displayEvenNumbers } from './fish/evenNumbers.js';


const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}


import {} from './fish/FishList.js'

// * Import fish filter

import { displayFishBySize } from './fish/filterFish.js';
const fishList = [];

// Display the fish according to Martin's requirements
const displayedFish = displayFishBySize(fishList);

// Output the displayed fish
console.log(displayedFish);







const numbers = [4,1,5,8,6,4,2,2,4,6,7,7,8,9,7,5,3,2,1,3,4,2,1,3,5,7,76,5,9,4,23,5,3,2,6,8,98,65,3,1,3,4];

// Display only even numbers
displayEvenNumbers(numbers);


// ! END Import


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
document.querySelector(".FishList").innerHTML = FishList();

// Target the element with the class 'FishList'
const parentHTMLElement = document.querySelector(".FishList");
parentHTMLElement.innerHTML = FishList();
