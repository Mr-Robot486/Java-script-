//Longest Word Finder App
function findLongestWordLength(str){
    const words = str.trim().split(/\s+/);
    let maxlength = 0;
  
    for(const word of words){
      if(word.length > maxlength){
        maxlength = word.length;
      }
    }
    return maxlength;
  }
  let str = "The quick brown fox jumped over the lazy dog";
  console.log(findLongestWordLength(str)); 

  // Factorial Calculator
  const num = 5;

function factorialCalculator(num){
  let result = 1;
  for (let i = 1; i <= num; i++){
    if (num){
      result *= i;
    }
  }
  return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

//the Mutations Algorithm
function mutation(arr){
    const first = arr[0].toLowerCase();
    const second = arr[1].toLowerCase();
    for (let i = 0; i < second.length; i++){
      if (first.indexOf(second[i]) === -1){
        return false;
      }
    }
    return true;
  } 
  let arr = ["hey", "Hello"];
  console.log(mutation(arr));

  //the Chunky Monkey Algorithm
  function chunkArrayInGroups(arrF, numb){
    let newA = [];
  
    for (let i = 0; i < arrF.length; i += numb){
      let sorted = arrF.slice(i, i + numb);
      
      newA.push(sorted);
    }
    return newA;
  }
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));

  //a Profile Lookup
  let contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop){
    for (let i = 0; i < contacts.length; i++){
      if (contacts[i].firstName === name){
  
        if(contacts[i].hasOwnProperty(prop)){
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }  
    return "No such contact"
  }
  console.log(lookUpProfile("Kristian", "lastName"));
  
  //repeating strings a number of times
  function repeatStringNumTimes(stR, nuM){
    let strW = "";
    for (let i = 0; i < nuM; i++){
      if (nuM <= 0){
        "";
      } else {
        strW += stR;
      }  
    }
    return strW;
  }
  console.log(repeatStringNumTimes("Hello",6));

  //Missing letter detector
  function fearNotLetter(alStr){
    let input = alStr.charCodeAt(0);
    
    for (let i = 0; i < alStr.length; i++){
      if (alStr.charCodeAt(i) !== input){
        return String.fromCharCode(input);
      }
      input++;
    }
    return undefined;
}
console.log(fearNotLetter("abce"));
