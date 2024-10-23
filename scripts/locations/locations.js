import { getLocations } from '../fish/database.js';

const locations = getLocations();

export function renderHarvestingLocations() {
    // Find the container element where the harvesting locations will be rendered
    
    // Initialize an empty string for the HTML content
    let htmlString = '';

    // Loop through each location in the array
    for (const location of locations) {
        // Append a section for each location using template literals
        htmlString += `<article class="harvestingLocation">
            <pre><h2>${location.name}</h2><p>(${location.country})</p>
            <p>Type: ${location.type}</p>
            <p>Best Season: ${location.bestSeason}</p>
        </article></pre>`;
    }

    

    // For debugging, it's helpful to log the final HTML string
    console.log(htmlString);

    // Returning the htmlString might not be necessary unless you need it for further processing
    return htmlString;
}
