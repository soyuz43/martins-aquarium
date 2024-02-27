// * BEGIN IMPORTS

import { FishList } from './fish/FishList.js';

import { displayEvenNumbers } from './fish/evenNumbers.js';
// const allFish = getFish()
// 
// for (const fish of allFish) {
//     console.log(fish)
// }

import { renderCareTips } from './tips/fishTips.js'

// * Import fish filter

import { displayFishBySize } from './fish/filterFish.js';
const fishList = [];

import { renderHarvestingLocations } from './locations/locations.js'
// ! END




// Display the fish according to Martin's requirements
const displayedFish = displayFishBySize(fishList);

// Output the displayed fish
console.log(displayedFish);










const numbers = [4,1,5,8,6,4,2,2,4,6,7,7,8,9,7,5,3,2,1,3,4,2,1,3,5,7,76,5,9,4,23,5,3,2,6,8,98,65,3,1,3,4];

// Display only even numbers
displayEvenNumbers(numbers);






// * Target the element with the class 'FishList'
// ! document.querySelector(".allfishlist").innerHTML = FishList();
const parentHTMLElement = document.querySelector(".allfishlist");
parentHTMLElement.innerHTML = FishList();

// * Target for 'tips'

const parentHTMLElementFishTips = document.querySelector(".careTipsList");
parentHTMLElementFishTips.innerHTML = renderCareTips();

const parentHTMLElementFishlocal = document.querySelector(".harvestingLocationsContainer");
parentHTMLElementFishlocal.innerHTML = renderHarvestingLocations();
