// Data to work with.
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  
  // First and last name.
  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
  

// 1. Filter the list of inventors for those who were born in 1500's.
// Returns a new array with the filtered values.
console.log(inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600));

// 2. Give us an array of the inventory first and last name.
console.log(inventors.map(inventor => `${inventor.first} ${inventor.last}`));
// OR
console.log(inventors.map(inventor => ({first: inventor.first, last: inventor.last})));

// 3. Sort the inventors by birthday, oldest to youngest.
// Mutate the object.
// a - b: Ascending order; b - a: Descencing;
console.log(inventors.sort((a, b) => b.year - a.year));

// 4. How many years did all inventors lived?
// The number "0" is a initial value, otherwise the intial value is the first item in the array.
console.log(inventors.reduce((accumulator, currentValue) => accumulator + (currentValue.passed - currentValue.year), 0))

// 5. Sort the inventors by years lived.
console.log(inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year)));

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name.
// Run this code in this URL https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// Use spread operator to create an arry of elements from a node list.
// We need to filter the array to create a new one containing the node text. We can use the map function before or after the filter.
// The only reason to map first is so we already have the text in the array and when filtering we don't need to access any property value.
// Otherwise you need to access "boulevard.text" twice.
const arrayOfBoulevards = [...document.querySelectorAll('.mw-category-group ul li a' )];
console.log(arrayOfBoulevards.map(boulevard => boulevard.text).filter(boulevard => boulevard.includes('de')));


// 7. Sort the people alphabetically by last name.
// Split is awesome!!
// Sort with strings works differently.
// The default sort order is ascending. "array1.sort();"
console.log(people.sort((a, b) => a.split(', ')[1] > b.split(', ')[1] ? 1 : -1));

// 8. Sum up the instances of each of these.

// I make use of two ES6 syntax features: spread syntax … and computed properties [curr]. 
// To sum up: spread will fill the object with all the current properties inside the object and enable us to overwrite any of them, 
// and computed properties enables us to use the value of a variable as the actual key of an object.
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
