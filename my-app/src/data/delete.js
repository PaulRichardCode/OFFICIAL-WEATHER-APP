//**********************************************
//**********************************************
//**********************************************
//**********************************************
//**********************************************




//REDUCE USES TWO VARIABLE (X,Y)
//REDUCE DEALS WITH FIRST AND LAST NUMBER OF ARRAY
//REDUCE MAIN
//MAP WORKS BEST FOR OBJECT ARRAYS*
// FILTER only work well in OBJECT ARRAYS when we use <> sign
// FilTER DOESNT CHANGE BUT MODIFY THE VARIABLE
// FOR EACH WORKS WITH CONSOLE.LOG ONLY
// ForEACH ALSO CONVERTS TO BOOLEANS IF USED LIKE FILTERS
//SPEAD MEANS spread out an Array
//Rest means collecting an array


//**********************************************
//**********************************************
//**********************************************
//**********************************************
//**********************************************



// work on both todo list and guess game

//GUESS GAME!!!

/* alert('welcome to a guessing game!');

let input = parseInt(prompt('Enter a maximum number'));

while(!input){
    input = parseInt(prompt('Enter a valid number'));
};

const guess = Math.floor(Math.random() * input) + 1;

console.log(guess);

let guesser = parseInt(prompt('Enter your Guess?'));
let count = 1;

while (guesser !== guess){
    count++;
        if(guesser < guess)
            guesser = prompt('guess to low')
        } else if(guesser > guess) {
            guesser = prompt('guess too high')
        } else if (guesser === 'q'){
            alert('You gave up!')
            break;
            alert('You gave up!')
        }
}
alert('congratulations you have guessed correctly');
alert(`it took ${count} attempts`) */


// TODO LIST!
/* 
const todo = ['Dancing about', 'Singing in church']

alert('Welcome to a TODO-LIST')
let home = prompt('Enter NEW to start a Todo');

while(home !== 'q') {

    if(home === 'new'){
        home === prompt('what will you do today')
        console.log(`${home} has been added to the list`)
        todo.push(home)
    } else if(home === 'list') {
        console.log('****************')
        for (let i = 0; i < todo.length; i++){
            console.log([i],todo[i])
        }
        console.log('****************')
        break;
    }

    home = prompt('Pls type - NEW - to add todo')
}
 */

//LEARNING ABOUT FUNCTIONS



/* function greet(i){
    console.log(`hi there ${i}`)
}
// i.e
greet('john') //hi there john

function name(firstname , lastname){
    console.log(`hi there ${firstname} ${lastname[0]}`) //[0] for first letter
}

name('Richard','Phlips');


function repeat(str, numTimes){
    let input ='';
    for (let i = 0; i < numTimes; i++){
        input += str;
    }
    console.log(input)
}

 */
function add(x,y){
    return x + y;
} 

function substract(x,y){
    return x - y;
}

// Random task!

function number(one,two){
  
   if(one === 1 && two === 1){
    console.log('a Snake')
   };
    console.log('Not a Snake')
} //correct weldone


//Define a function called rant which accepts a string argument called message.  The function should print out an uppercased version of message 3 times (with 3 separate calls to console.log).  For example, rant("I hate beets") should print out:


function rant(message){
   console.log(message.toUpperCase())
   console.log(message.toUpperCase())
   console.log(message.toUpperCase())
}
//CORRECT WELLDONE

//NEXT EQUATION

//It's time to practice returning values from a function! Write a simple function multiply which accepts two numerical arguments and returns their product (multiply them together).  Make sure to return the value instead of printing it!

function multiply(x,y){
    return x * y;
}

//CORRECT!




//NEXT QUESTION

//I often struggle to know whether I should wear shorts or pants on a given day. (this is a complete lie.  It's really not that hard to decide.) Please help me decide by writing me a function called isShortsWeather. 

//It should accept a single number argument, which we will call temperature(but you can name it whatever you want, of course). 

//If temperature is greater than or equal to 75, return true. 

//Otherwise, return false.   

function isShortsWeather(temperature){
    if(temperature >= 75){
        return true;
    } else {
        return false
    }
} 

//CORRECT

//Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.  ['dam','mmas','rede']

//lastElement([3,5,7]) //7
//lastElement([1]) //1
//lastElement([]) //null

function lastElement(last){
    let lastname = last[last.length - 1]
    if(last.length === 0){
        return null
    }
    return lastname
}// NOTE! LENGTH HAS AN ADDITIONAL VARIABLE IN A ARRAY, HENCE WE USED -1

//CORRECT VERY HARD


/* Capitalize Exercise
Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

capitalize('eggplant') // "Eggplant"
capitalize('pamplemousse') // "Pamplemousse"
capitalize('squid') //"Squid"
Hints:

Remember that strings are immutable, meaning that you cannot simply change the first letter in the original string.  You will need to make a new string that you return.

Single out the first letter and capitalize it. (use a string method to help!)

Add that first letter to the rest of the original string, sliced to omit the original first letter (use a string method to help!)

For example: 'eggplant' becomes 'E' + 'ggplant' */

function capitalize(cased){
    let first = cased[0]
   let capital =  first.toUpperCase();

    return cased.replace(first, capital);
    
}

//WOW CORRECT! CANT BELIVE I GOT IT! In first trial!


/* Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.

sumArray([1,2,3]) // 6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1]) // 101
Hints:

You'll need a variable to keep track of the total.  It should start out as zero.

Loop over the array and for each element, add it to the total variable.

After you have added every number to total, return total. */

 function sumArray(numbers){    
    let total = 0;
    for (let i = 0; i < numbers.length; i ++){
        total += numbers[i];
    }
    return total
} 

//IT LOOKS SIMPLE BUT I LOST MY HAIR DOING THIS

//*************************************************** */
//*************************************************** */


/* Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.

Hint: store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.

returnDay(1) // "Monday"
returnDay(7) // "Sunday"
returnDay(4) // "Thursday"
returnDay(0) // null */


function returnDay(numbers){
    let daysOfWeek = {
        1 : 'Monday',
        2 : 'Tuesday',
        3 : 'Wednesday',
        4 : 'Thursday',
        5 : 'Friday',
        6 : 'Saturday',
        7 : 'Sunday'
    } 

    if(numbers >= 8 || numbers < 1){
        return null
    } else if(numbers === 1){
        return daysOfWeek[1]
    } else if(numbers === 2){
        return daysOfWeek[2]
    } else if(numbers === 3){
        return daysOfWeek[3]
    } else if(numbers === 4){
        return daysOfWeek[4]
    } else if(numbers === 5){
        return daysOfWeek[5]
    } else if(numbers === 6){
        return daysOfWeek[6]
    } else if(numbers === 7){
        return daysOfWeek[7]
    };

}


//BACK TO TUTORIAL


/* let totalEggs = 0;
function collecteggs() { 
 let totalEggs = 6;
    
}

collecteggs()
console.log(totalEggs) */

/* let radius = 8;
if (radius > 0){
    const pi = 3.14232;
    let msg = 'HIIII';
}

console.log(pi)
console.log(radius) */

//USING FOR OF
/* function bankRobbery(){
    let heroes = ['richood','pauline','superman'];
    function cryForHelp(){
        for(let i of heroes){
            console.log(`PLS SAVE ME ${i.toUpperCase()}`)
        }
    }
    cryForHelp()
} */

//NEW WAY OF STORING A PLUS
/* let plus = function (x,y){
    return x + y
} */


//HIGHER ORDER FUNCTIONS
/* function callTwice(func){
    func();
    func();
}

function callTenTimex(ten){
    for(let i = 0; i < 10; i++){
        ten()
    }
}

function rollDie(){
   let random = Math.floor(Math.random() * 6) + 1;
   console.log(random)
}

callTwice(rollDie) */

//Check if age is between 0-10


let rae = ['toast','poki','brodin','tina']

function offmem(){
    for (let hero of rae) {
        console.log(`hey ${hero}`)
    }
} //it FOR...OF NOT whileof 


//Make dice again

function makeMysFunc(){
    const rand = Math.random();
    if (rand < 0.5){
        return function(){
        console.log('Congrats brother!')
        console.log('You win 50 MILLION DOLLARS!!!')
    }
    } else {
        return function(){
        alert('YOU HAVE BEEN INFECTED')
        alert('YOU HAVE BEEN INFECTED')
        alert('YOU HAVE BEEN INFECTED')
        alert('YOU HAVE BEEN INFECTED')
        alert('YOU HAVE BEEN INFECTED')
        alert('YOU HAVE BEEN INFECTED')
    }
    }
}

// this function show age ranges between two variables
function makeBtwFunc(min,max) {
    return function(num){
        return num >= min && num <= max;
    }
} //create a new variable to use this function

const senior = makeBtwFunc(65,100);


//DEFINING METHODS

const math = {
    PI : 3.14159,
    add: function(x,y){
        return x + y;
    },
    square: function(num){
        return  num * num;
    },
    minus : function(x,y) {
        return x - y;
    }
}


//THIS

 const cat = {
    name : 'bald nesd',
    color: 'white',
    breed: 'local',
    meow : function(){
        console.log(`${this.breed} says ${this.name}`)
    }
}
/*
try {
wierd.toUpperCase()
} catch (e){
    console.log(e);
    console.log('error');
}
 */



// CLASSWORK 



/* Define an object called square, which will hold methods that have to do with the geometry of squares. It should contain two methods, area and perimeter 

area should accept the length of a side (all sides are the same in a square) and then return the side squared. 

perimeter should accept the length of a side and return that side multiplied by 4.

square.area(10) //100
square.perimeter(10) //40 */

const square = {
    area      : function(side){
        return side * side
    },
    parameter : function(side){
        return side * 4
    }
}




/* Define an object called hen.  It should have three properties:

name should be set to 'Helen'

eggCount should be set to 0

layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.

hen.name // "Helen"
hen.eggCount // 0
hen.layAnEgg() // "EGG"
hen.layAnEgg() // "EGG"
hen.eggCount // 2 */


 const hen = {
    nick : 'Helen',
    eggCount : 0,
    layAnEgg : function(){
        this.eggCount += 1;
        return 'EGG!'
        
    }
} //REMEMBER += IS KEY TO ADDING A VARIABLE RICHY



//LEARNING FOR EACH!

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
/*
numbers.forEach(function(el){
    if(el % 2 === 0){
    console.log(el)}
}) */

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 95
    }
]




/* const titee = movies.map(function(m){
    return m.title
}) MAP*/ 
/* movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`) 
}) */ //Remember to Add (.) in an Objects



//MAP similar to foreach

const wordin = ['yoo','pog','yin','lol']

const twotimes = numbers.map(function(t){
    return t * 2
})


//ARROW FUNCTIONS

const sqr = (x) => {
    return x * x
}

//const rollDie = () => {
//    return Math.floor(Math.random() * 6)+1}
const rollDie = () => (
    Math.floor(Math.random() * 6)+1
    ) // Adding Brackets prevent you from adding return

const adding = (a,b) => a + b;
//IMPLICITE RETURN WITH ARROW FUNCTIONS



/* It's time to get practice with the map method!

Define a variable named firstNames and assign it to the result of mapping over the existing array, fullNames, so that firstNames contains only the first names of the Harry Potter characters from the fullNames array.

e.g.,

console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']


Please note:

DO NOT ALTER THE FOLLOWING CODE:*/
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here

const firstNames = fullNames.map(function(first){
    return first.first
})

//2222222222

/* Write an arrow function expression called greet.  It should accept a single string argument, representing a person's name.  It should return a greeting string as shown below:

greet("Hagrid") //"Hey Hagrid!" 
greet("Luna") //"Hey Luna!"
Be sure to use arrow function syntax! */

/* const greet = (person) => {
    return `hey ${person}`
}
 */






//SETTIMEOUT AND SETINTERVAL IN JAVASCRIPT
/* 
 console.log('HELLO')
setTimeout(() => {
 console.log('...Are you still there?')
}, 3000);*/

//const id = setInterval(() => {
  //  console.log(Math.random())}, 2000);

const numba = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

/* numba.filter(n => {
    return n % 2 === 0
}) 
    let titee = numba.filter(function(el){
    if (el % 2 === 0){
        console.log(el)
     }
})*/



let pogee = numba.filter((n) => {
    return n < 10
})

const movie = [
    {
        title: 'Amadeus',
        score: 50,
        year : 1984 
    },
    {
        title: 'Stand By Me',
        score: 85,
        year : 2013
    },
    {
        title: 'Parasite',
        score: 79,
        year : 2004
    },
    {
        title: 'Alien',
        score: 92,
        year : 2000
    },
    {
        title: 'jingle away',
        score: 77,
        year : 2005
    },
    {
        title: 'titanic',
        score: 99,
        year : 2002
    }
]


// REDUCE
/* const rated = movie.reduce((high,low) => {
    if(high < low){
        return low
    }
    return high
}) */ 
//MAP IS TRUE OR FALSE sometimes
//FILTERS WILL JUST FILTER

const goodMovies = movie.filter(genre => genre.score > 80)
const goodtitles = goodMovies.map(gen => gen.title)
const badMovies = movie.filter(genre => genre.score < 80)

const recentMovies = movie.filter(genre => (genre.year > 2000))

//SOME WORKS IF ANY OF THE ELEMENT IS ACCURATE TRUE OR FALSE
//EVERY WORKS IF All OF THE ELEMENT ACCURATE IS TRUE OR FALSE
/* const make = goodtitles.some(word => {
    return word.length < 4
})
numba.every(each => {
    return each > 25
})
 */
//reducer fuction on each element


/* [3,5,7,9,11].reduce((accumulator,currentValue) => {
    return accumulator + currentValue
}); */

//**********************************************
//**********************************************
//**********************************************
//**********************************************
//**********************************************




//REDUCE USES TWO VARIABLE (X,Y)
//REDUCE DEALS WITH FIRST AND LAST NUMBER OF ARRAY
//REDUCE MAIN
//MAP WORKS BEST FOR OBJECT ARRAYS*
// FILTER only work well in OBJECT ARRAYS when we use <> sign
// FilTER DOESNT CHANGE BUT MODIFY THE VARIABLE
// FOR EACH WORKS WITH CONSOLE.LOG ONLY
// ForEACH ALSO CONVERTS TO BOOLEANS IF USED LIKE FILTERS
//SPEAD MEANS ...


//**********************************************
//**********************************************
//**********************************************
//**********************************************
//**********************************************
const prices = [3,5,7,9,1];

/* let total = 0;
for (let i = 0; i < prices.length; i++){
    total += prices[i]
} */

const tots = prices.reduce((num,red) => {
    if (red > num){
        return num
    } 
    return red
})

const minPrice = prices.reduce((min,price) => {
    if(price > min) {
        return price
    }
    return min;
})


const person = {
    firstName: 'Viggo',
    lastName : 'MOrthensen',
    fullName : function() {
    return `${this.firstName} ${this.lastName}`
 },
    shoutName: function(){
        setTimeout(() => {
            console.log(this.fullName)
        },3000)
    }
    
}/* 

Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).  It should return a new array, containing only the usernames that are less than 10 characters. For example:

validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// => ["mark", "carrie98", "MoanaFan"]


Note: The syntax for this solution might be a little strange to you at this point in the course because it requires you to write the code, that you just learned in the previous lecture, inside of a function. e.g.,
 */
const validUserNames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];

const pog = validUserNames.filter((user) => {
    return user.length < 10
})

/* 
or if you want to get fancy with an arrow function:

const validUserNames = usernames => // your code here;


There is no need to define an actual array of usernames, that part is done for you behind the scenes.
If you get stuck on this exercise, please see here for a quick video walkthrough. */ 



//spread array
//spread objects
//destructioning

/* function rollDye (numSide){
    if(numSide === undefined){
        numSide = 6
    }
    return Math.floor(Math.random() * numSide) + 1;
} */

/*     function rollDye (numSide = 6){
    if(numSide === undefined){
        numSide = 6
    }
    return Math.floor(Math.random() * numSide) + 1;
}

function greet(msg , greet='hey there!'){
    console.log(`${msg}, ${greet}!`)
} */

//SPEAD MEANS ...
//ARRAY SPREAD
const cats = ['blue','shifa', 'rocket']
const dogs = ['spy','puppy', 'shepherd']

const allPets = [...cats, ...dogs];
//OBJECT SPREAD!
const feline = {legs : 4, family: 'feline'};
const canine = {isFurry : true, family: 'Caninae'};

const newUsers = {...feline, password: 2444, id: false};
const coolAnimals = [...cats,'spider','raven']

//REST
//ARGUMENTS
function sumAll(){
    let total = 0;
    for (i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    console.log(total)
}

while

//Rest

/*     function sumQ(){
    return arguments.reduce((start,end) => {
        return start + end
    } ) */ //WONT WORK SINCE ARGUEMNT REALLY ISNT AN ARRAY

function sum(...num) {
    return num.reduce((start,end) => start + end)
} //Even though num arguement is empty is still works

/* function sumQ() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
} */

function raceResult(gold,silver,...everyOne){
    console.log(`Gold award congrats to ${gold}`)
    console.log(`silver award congrats to ${silver}`)
    console.log(`congrats to ${everyOne}`)
}

//DESTRUCTURING ARRAY
// IT EXTRACT VALUES FROM AN ARRAY, also gives it a NAME
// SQUARE BRACKETS TO SHOW WE ARE DESTRUCTIORING

const scores = [21212,43423,12123,73443,78764,87654]

const [gold,silver,bronze, ...everyOneElse] = scores;

const user = {
    email : 'ronaldo@gmail.com',
    password: 'aawSacaw112s',
    firstName: 'havey',
    lastName: 'ronaldo',
    born: '1945',
    died: 'N/A',
    city: 'la',
    state : 'chicago'
}
//DEstructuring OBjects
/* const {email, firstName , lastName, city, died: deathYear, bio = 'i love snacks and junks bro. also watch boring baseball okay!'} = user; */


/* function fullName(user){
    return `${firstName} ${lastName}` 
}; */

//function fullName(user){
// const {firstName, lastName} = user;
//   return `${firstName} ${lastName}`}

//movie.filter(({score}) => score >= 90 )
//movie.filter(score => score.score < 90)

//without destructuring
/* movie.map((movie) => {
    return `${movie.title} ${movie.year} is rated ${movie.score}`
}) */

//with destructioneing

//movie.map(({title,score,year}) => (`${title} ${year} is rated ${score}` ))
