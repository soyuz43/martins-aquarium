/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */


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
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

// ! FISHCARE


const fishCareTips = {
    tip: [
        {
            id: 1,
            text: "Maintain a constant PH level"
        },
        {
            id: 2,
            text: "Maintain a consistent water temperature"
        },
        {
            id: 3,
            text: "Perform regular water changes to remove toxins"
        },
        {
            id: 4,
            text: "Ensure adequate filtration to keep the water clean"
        },
        {
            id: 5,
            text: "Provide a balanced diet suitable for the specific fish species"
        },
        {
            id: 6,
            text: "Create a habitat with enough space and hiding places"
        }
    ]
};
export const getTips = () =>{

    return fishCareTips.tip.map(tip =>({...tip}))

}

// ! FISHMURDER


const fishHarvestingLocations = {
    locations: [
        {
            id: 1,
            name: "Great Barrier Reef",
            country: "Australia",
            type: "Coral Reef",
            bestSeason: "April to November"
        },
        {
            id: 2,
            name: "Bering Sea",
            country: "USA/Russia",
            type: "Sea",
            bestSeason: "June to September"
        },
        {
            id: 3,
            name: "Amazon River",
            country: "Brazil",
            type: "River",
            bestSeason: "September to November"
        },
        {
            id: 4,
            name: "Gulf of Alaska",
            country: "USA",
            type: "Gulf",
            bestSeason: "May to September"
        },
        {
            id: 5,
            name: "Lake Victoria",
            country: "Tanzania/Uganda/Kenya",
            type: "Freshwater Lake",
            bestSeason: "All year round"
        },
        {
            id: 6,
            name: "Norwegian Sea",
            country: "Norway",
            type: "Sea",
            bestSeason: "April to October"
        }
    ]
};
export const getLocations = () =>{

    return fishHarvestingLocations.locations.map(locations =>({...locations}))

}



// Output the fish data
// console.log(database.fish);







