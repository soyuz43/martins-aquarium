/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
// ! const database = {
// !     fish: []
// ! };
// ! 
// ! const prefixes = ["Bozo","Dumbo","Alpha", "Beta","What the f*ck is that", "Gamma", "Delta", "Echo", "Foxtrot","Goober", "Guppy", "Zulu", "Neon", "Omega", "Quasar", "Rainbow", "Sapphire", "Tastes like chicken", "Tropical", "Vivid", "Wave", "Xenon", "Yummy", "Zen", "Zenith"];
// ! const suffixes = ["Fish", "Fins", "Swimmer", "Diver", "Goby", "Snapper", "Shrimp", "Blenny", "Anemone", "Tetra", "Guppy", "Catfish", "Tang", "Puffer", "Swordtail", "Tuna", "Molly", "Barb", "Angelfish", "Cichlid"];
// ! 
// ! const usedPrefixes = {};
// ! 
// ! function generateMoreFish(numberOfFish) {
// !     const foods = ["crustaceans", "plankton", "algae", "small fish", "seeds", "worms", "insects", "fish flakes"];
// !     const locations = ["Tropical waters", "Freshwater streams", "Coral reefs", "Rivers", "Amazon River", "Ponds"];
// !     const lengths = [10, 20, 30]; // Adjust these values as needed
// !     
// !     for (let i = 0; i < numberOfFish; i++) {
// !         const randomFoodIndex = Math.floor(Math.random() * foods.length);
// !         const randomSuffixIndex = Math.floor(Math.random() * suffixes.length);
// !         const suffix = suffixes[randomSuffixIndex];
// !         const prefix = getRandomUniquePrefix(suffix);
// !         const randomSize = Math.floor(Math.random() * 10) + 1;
// !         const randomLengthIndex = Math.floor(Math.random() * lengths.length);
// !         const randomLocationIndex = Math.floor(Math.random() * locations.length);
// ! 
// !         database.fish.push({
// !             name: `${prefix} ${suffix}`,
// !             species: suffix,
// !             food: foods[randomFoodIndex],
// !             size: randomSize,
// !             length: lengths[randomLengthIndex], // Use integer value for length
// !             location: locations[randomLocationIndex]
// !         });
// !     }
// ! }
// ! 
// ! function getRandomUniquePrefix(suffix) {
// !     if (!usedPrefixes[suffix]) {
// !         usedPrefixes[suffix] = [];
// !     }
// !     let prefix;
// !     do {
// !         prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
// !     } while (usedPrefixes[suffix].includes(prefix));
// !     usedPrefixes[suffix].push(prefix);
// !     return prefix;
// ! }
// ! 
// ! // Generate 20 fish objects
// ! generateMoreFish(150);
// ! 
// ! // Output the fish data
// ! console.log(database.fish);

const database = {
    fish: [
        {
            id: 1,
            name: "Bart",
            species: "Angelfish",
            food: "crustaceans",
            size: 3,
            length: "Medium",
            location: "Tropical waters",
            image: "./media/martins-aq-1.jpg"
        },
        {
            id: 2,
            name: "Clara",
            species: "Guppy",
            food: "plankton",
            size: 2,
            length: "Small",
            location: "Freshwater streams",
            image: "./media/martins-aq-2.jpg"
        },
        {
            id: 3,
            name: "Dory",
            species: "Tang",
            food: "algae",
            size: 1,
            length: "Small",
            location: "Coral reefs",
            image: "./media/martins-aq-3.jpg"
        },
        {
            id: 4,
            name: "Eddy",
            species: "Catfish",
            food: "small fish",
            size: 4,
            length: "Large",
            location: "Rivers",
            image: "./media/martins-aq-4.jpg"
        },
        {
            id: 5,
            name: "Finley",
            species: "Tetra",
            food: "seeds",
            size: 2,
            length: "Small",
            location: "Amazon River",
            image: "./media/martins-aq-5.jpg"
        },
        {
            id: 6,
            name: "Goldie",
            species: "Goldfish",
            food: "worms",
            size: 1,
            length: "Small",
            location: "Ponds",
            image: "./media/martins-aq-6.jpg"
        }
    ]
};


export const careTips = [
    "Maintain a constant PH level",
    "Maintain a consistent water temperature",
    "Perform regular water changes to remove toxins",
    "Ensure adequate filtration to keep the water clean",
    "Provide a balanced diet suitable for the specific fish species",
    "Create a habitat with enough space and hiding places"
];





// Output the fish data
// console.log(database.fish);





// ! -------------
// * END DATABASE OBJECT




// ! -------------
// * BEGIN EXPORTS


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

