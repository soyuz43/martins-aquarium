import { getTips } from '../fish/database.js';

const tips = getTips ()


export function renderCareTips() {
    // Find the container element where the care tips will be rendered
   
    
    // Initialize an empty string for the HTML content
    let htmlString = '';
    
    // Loop through each care tip in the array
    for (const tip of tips) {
        // Append a section for each care tip using template literals
        htmlString += `<pre><section class="careTip"></prev>
        
        <div>${tip.text}</div>
    </section>`;

    }
    // console.log(htmlString);
    return htmlString
    
}

