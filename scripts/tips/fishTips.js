import { careTips } from './fish/database.js';




export function renderCareTips(careTips) {
    // Find the container element where the care tips will be rendered
    const container = document.getElementById('careTipsContainer');
    
    // Initialize an empty string for the HTML content
    let htmlString = '';
    
    // Loop through each care tip in the array
    for (const tip of careTips) {
        // Append a section for each care tip using template literals
        htmlString += `<section class="careTip">
            <p>${tip}</p>
        </section>`;
    }
    
    // Set the innerHTML of the container to the constructed HTML string
    container.innerHTML = htmlString;
}