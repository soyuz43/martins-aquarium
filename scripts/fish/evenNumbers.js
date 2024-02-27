// Function to display only even numbers
export function displayEvenNumbers(numbers) {
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }
}
