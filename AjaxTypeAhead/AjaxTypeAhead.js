const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// Get data and parse it to be a flat array.
const places = [];

fetch(endpoint)
    .then(response => response.json())
    .then(data => places.push(...data));


const findMatches = (wordToMatch, places) => {
    // NOT found anything else than a space or line break so return an empty array.
    if (!/\S/.test(wordToMatch)) return [];
    return places.filter(place => place.city.toLowerCase().includes(wordToMatch.toLowerCase()));
}

// Gets a number and sets the commas - Copied from Stack Overflow.
const numberWithCommas = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');


// Get the value coming from the event handler.
// Call a function to find the objects whose city property match the word typed in the input field.
// Map the returned array and return a string containing the markup with the results.
// Get the markup results and add them to the suggestions node.
const displayResults = (e) => {
    const filteredPlaces = findMatches(e.target.value, places);
    const resultMarkup = filteredPlaces.map(place => {
        // Define the regex object using a global option.
        const regex = new RegExp(e.target.value, 'gi');
        // For any of this string get the regex expresion and replace it with a mark element.
        const city = place.city.replace(regex, `<mark>${e.target.value}</mark>`)
        const state = place.state.replace(regex, `<mark>${e.target.value}</mark>`)
        const population = place.population;
        return `
            <li>
            <span>${city}, ${state}</span>
            <span>${numberWithCommas(population)}</span>
            </li>
        `
        // Use join method to create a long string instead of an array of elements.
    }).join('');
    suggestions.innerHTML = resultMarkup;
}

// Get input node and add an event listener to it.
document.querySelector('.search').oninput = displayResults;
const suggestions = document.querySelector('.suggestions');