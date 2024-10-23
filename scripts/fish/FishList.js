// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"





export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start concatenating
    let htmlString = ''

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card"><pre>
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">Common Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Average Length: ${fish.length}</div>
            <div class="fish__location">Native To: ${fish.location}</div>
            <div class="fish__diet">Primary Diet: ${fish.food}</div></pre>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}