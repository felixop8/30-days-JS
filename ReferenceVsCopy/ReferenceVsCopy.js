// Strings, numbers and booleans. (primitive values)

// Primiteve values are inmutable, that means that in this example bellow, age is pointing to a value that
// only exist once in memory and it is 100, age2 is also pointing to the same value. This inmutability
// let us reasign the value of age to 50 which is a different value in memory without affecting to age2,
// both variables are pointing to different values. With Objects (arrays are also objects) this is different
// since they could be poiting to the same object which is mutable and any change from any of the variables
// affects the other one.
let age = 100;
let age2 = age;
console.log(age2); // 100
age = 50;
console.log(age2) // 100

// ======================================================================================================

// Array (Object)
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// Using the spread operator I am able to create a new array and players2 is pointing to this new array,
// so if players array suffers any change players2 is not connected so it doesn't get affected.
const players2 = [...players];
// Or you can use slice
const players2 = players.slice();
// Or you can use Array.from()
const players2 = Array.from(palyers);

players[0] = 'Robert';
console.log(players); // ['Robert', 'Sarah', 'Ryan', 'Poppy']
console.log(players2); // ['Wes', 'Sarah', 'Ryan', 'Poppy']

// BUT IF:
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// In this case both players and players2 are pointing to the same array, so any change made in that array
// affects both of them.
const players2 = players;
players[0] = 'Robert';
console.log(players); // ['Robert', 'Sarah', 'Ryan', 'Poppy']
console.log(players2); // ['Robert', 'Sarah', 'Ryan', 'Poppy']



// ======================================================================================================

// Objects
const person = {
    name: 'Wes',
    age: 80
}

const person2 = {...person};
person.name = 'Robert';
console.log(person); // {name: 'Rober', age: 80}
console.log(person2); // {name: 'Wes', age: 80}

// Or
// In this case you can add new values and also override them.
const person2 = {...person, nationality: 'Australian', age: 12}

// Or
const person2 = Object.assign({}, person, {nationality: 'Portuges', age: 33});


// ======================================================================================================


// Copying is very shallow - it is only one level deep - both for Arrays and Objects and using spread, Object.Assign()
const personProfile = {
    name: 'Wes',
    age: 80,
    attributes: {
        hairColor: 'brown',
        eyeColor: 'blue'
    },
    someKindOfArray: [1 ,2 , 3]
}

const personProfile2 = {...personProfile};
personProfile.attributes.hairColor = 'blonde';

console.log(personProfile.attributes.hairColor); // "blonde"
console.log(personProfile2.attributes.hairColor); // "blonde"


const teams = ['NY Mets', 'NY Yankees', 'LA Dodgers', 'SF Giants', [1, 2, 3], {name: 'Robert'}];
const teams2 = [...teams];
teams[5].name = 'Aster';
console.log(teams[5].name) // 'Aster'
console.log(teams2[5].name) // 'Aster'
