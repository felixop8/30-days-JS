## Array Cardio 1

**Main Concepts**

1. Filter - Creates a new array with all elements that pass the test implemented by the provided function.
2. map - creates a new array populated with the results of calling a provided function on every element in the calling array.
3. sort - Sorts the elements of an array in place and returns the sorted array (mutates the array). The default sort order is ascending "a - b": Ascending order; "b - a": Descencing; Sort strings: "console.log(people.sort((a, b) => a.split(', ')[1] > b.split(', ')[1] ? 1 : -1));"
4. reduce - The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
5. Use spread operator to create an arry of elements from a node list: "const arrayOfBoulevards = [...document.querySelectorAll('.mw-category-group ul li a' )];"
6. Use split method to split a string into an array of substrings, and returns the new array "a.split(', ')[1]"
7. Use ES6 sintax features: Spread syntax {..., } and computed properties {..., [curr]: 1}