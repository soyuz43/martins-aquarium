export function displayFishBySize(fishList) {
    // Filter fish into "Small" category
    const smallFish = fishList.filter(fish => fish.length === "Small");
    
    // Filter fish into "Medium" category
    const mediumFish = fishList.filter(fish => fish.length === "Medium");
    
    // Filter fish into "Large" category
    const largeFish = fishList.filter(fish => fish.length === "Large");
    
    // Concatenate the filtered arrays in the desired order: Small, Medium, Large
    const displayedFish = smallFish.concat(mediumFish, largeFish);
    
    return displayedFish;
}
