//boolean
function boolWho(input){
    return typeOf (input) === "boolean";
}

//masking
function maskEmail(email){
    let indexZ = email.indexOf("@");
    let slice = email.slice(0, 2);
    let slice2 = email.slice(indexZ);
  
    return `${slice}******${slice2}`;
  }
  let email = "shedyy708@gmail.com";
  console.log(maskEmail(email));

//same but different
function maskEmail(emailS) {
    let atIndex = emailS.indexOf("@");
    
    let firstLetter = emailS[0];
    let lastLetterBeforeAt = emailS[atIndex - 1];
    let domain = emailS.slice(atIndex);

    let middleCount = atIndex - 2;
    let stars = "*".repeat(middleCount);
  
    return `${firstLetter}${stars}${lastLetterBeforeAt}${domain}`;
  }
  
  let emailS = "shedyy708@gmail.com";
  console.log(maskEmail(emailS));

  function convertCtoF(celsius) {
    return celsius * (9/5) + 32;
  }

  //card counter
let countZ = 0;

function cardCounter(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if (countZ > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

let count = 0;

function cardCounter(card) {
  // Check for +1 cards
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count++;
  } 
  // Check for -1 cards (10 and Face Cards)
  else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
  }

  // Final Result
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

//leap year calcultor
function  isLeapYear(year){
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    return `${year} is a leap year.`
  } else {
    return `${year} is not a leap year.`
  }
} 

let year = 2010;
let result = isLeapYear(year);
console.log(result);

//string Algorithm
function truncateString(str, num){
  if (str.length > num){
    return `${str.slice(0, num)}...`;
  } else {
    return str;
  }
}
let num = 8;
let str = "A-tisket a-tasket A green and yellow basket";
console.log(truncateString(str, num));

//confirm the Ending Tool
function confirmEnding(str0, str1){
  if(str0.slice(-str1.length) === str1){
    return true;
  } else {
    return false;
  }
}
let str0 = "Bastian";
let str1 = "n";
console.log(confirmEnding(str0, str1));

//Lunch Picker Program
const lunches = [];

function addLunchToEnd(lunches,strA){
  lunches.push(strA);
  console.log(`${strA} added to the end of the lunch menu.`);
  return lunches;
}

function addLunchToStart(lunches,strA){
  lunches.unshift(strA);
  console.log(`${strA} added to the start of the lunch menu.`);
  return lunches;
}

function removeLastLunch(lunches){
  if (lunches.length !== 0){
    const remove = lunches.pop();
    console.log(`${remove} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return lunches;
}

function removeFirstLunch(lunches){
  if (lunches.length !== 0){
    const remove = lunches.shift();
    console.log(`${remove} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return lunches;
}

function getRandomLunch(lunches){
  if (lunches.length !== 0){
    const random = Math.floor(Math.random() * lunches.length);
    const items = lunches[random];
    console.log(`Randomly selected lunch: ${items}`);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(lunches){
  if (lunches.length !== 0){
    console.log(`Menu items: ${lunches.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
}

//Golf Score Translator

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes){
  if (strokes === 1){
    return names[0];
  } else if (strokes <= par - 2){
    return names[1];
  } else if (strokes === par - 1){
    return names[2];
  } else if (strokes === par){
    return names[3];
  } else if (strokes === par + 1){
    return names[4];
  } else if (strokes === par + 2){
    return names[5];
  } else {
    return names[6];
  }
}
console.log(golfScore(5,9));

//Quiz Game
const questions = [
  {
    category: "Easy ones",
    question: "What's the color of the   sky?",
    choices: ['Red','black', 'blue'],
    answer: 'blue'
  },

   {
    category: "medium",
    question: "What does cows eat?",
    choices: ['Flesh','twigs', 'grass',],
    answer: 'grass'
  },

   {
    category: "hard",
    question: "What element does (Na) symbol represent?",
    choices: ['sodium','iron', 'potassium'],
    answer: 'sodium'
  },

   {
    category: "tough",
    question: "What are the light particles called?",
    choices: ['photons','quatum', 'ulraviolet'],
    answer: 'photons'
  },

   {
    category: "very tough",
    question: "name the lightest,flamable gas?",
    choices: ['Oxygen', 'helium', 'hydrogen'],
    answer: 'hydrogen'
  }
]

function getRandomQuestion(questions2) {
const indexq = Math.floor(Math.random() * questions2.length);
return questions2[indexq]; 
}

function getRandomComputerChoice(choicesE) {
const chois = Math.floor(Math.random() * choicesE.length);
return choicesE[chois];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer){
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}

//Record Collection
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value){
  if (value === ""){
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== ""){
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks")){
    records[id].tracks.push(value);
  } else {
    records[id].tracks = [value];
  }
  return records;
}

//stack
let stack = [];
stack.push("Bottom Plate"); 
stack.push("Middle Plate");
stack.push("Top Plate");

// You can only take the top one off!
let removed = stack.pop(); 
console.log(removed); // "Top Plate"