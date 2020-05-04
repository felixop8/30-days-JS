// Regular
console.log('Hello World');

// Interpolated
const firstWord = 'Hello';
const secondWord = 'World';
const interpolated = 'Interpolated';
console.log(`${firstWord} ${secondWord} ${interpolated}`)
//Or
console.log('Hello are you a string?', 'Yes I am.')


// Styled
// You need to put the %c first.
console.log('%c I am some great text', 'font-size:20px; color:red;');

// Warning
console.warn('OH NOOO');

// Error
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-3 people per year');

// Testing
console.assert(1 === 2, 'You did not select the right element!');
const p = document.querySelector('h1');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// Clearing
// console.clear();

// Viewing DOM Elements
// Gives you all the diferent properties and methods that live in that element.
console.dir(p);

// Grouping things together
console.group('Felix');
console.log('Age: 32');
console.log('Nationality: Spain');
console.groupEnd('Felix');
console.groupCollapsed('Robert');
console.log('Age: 30');
console.log('Nationality: Spain');
console.groupEnd('Robert');

// counting
 console.count('a');
 console.count('a');
 console.count('a');
 console.count('a');
 console.count('b');
 console.count('b');
 console.count('b');
 console.count('b');


 // Timing
 console.time('fetching data');
 fetch('https://api.github.com/users/felixop8')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });


    // Table
    const dogs = [{name: 'Toby', age: 2}, {name: 'Juniper', age: 4}, {name: 'Cesar', age: 1},]
    console.table(dogs);
