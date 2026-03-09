//String inverter
//built in methods
function reverseString(str){
    let charArry = str.split("");
    let reverseStr = charArry.reverse();
    
    return reverseStr.join("");
  }
  console.log(reverseString("World"));

  //for loop format
  function reverseString(str){
    let charArry = "";
    
    for (let i = str.length -1; i >= 0; i--){
     charArry += str[i];
    }
    return charArry;
  }
  console.log(reverseString("Hello"));

  //Largest number finder
  //for loop
  function largestOfAll(nestedArry){
    let map = [];
    
    for (let i = 0; i < nestedArry.length; i++){
      let largestNumber = nestedArry[i][0];
  
      for (let j = 0; j < nestedArry[i].length; j++){
        if (nestedArry[i][j] > largestNumber){
          largestNumber = nestedArry[i][j];
        }
      }
      map.push(largestNumber);
    }
    return map;
  }
  console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

  //.map() and Math.max()
  function largestOfAll(arr) {
    return arr.map(subArr => {
      return Math.max(...subArr);
    });
  }
  
  const result = largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  console.log(result);


  //First element finder
  function findElement(arry, func){
    let num = 0;
    
    for (let i = 0; i < arry.length; i++){
      num = arry[i];
  
      if (func(num)){
        return num;
      }
    }
    return undefined;
  }
  console.log(findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; }));

  //Slice and Splice
  function frankenSplice(arr1,arr2,index){
    let finalArry = [...arr2];
  
    finalArry.splice(index,0, ...arr1);
  
      return finalArry;
    }
    console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

    //Pyramid Generator
    function pyramid(strng,count, bool){
        let result = [];
      
        for (let i = 1; i <= count; i++){
          const spaces = " ".repeat(count - i);
          const content = strng.repeat(2 * i - 1);
          result.push(spaces + content)
        }
        if (bool){
          result.reverse();
        }
        return "\n" + result.join("\n") + "\n";
      }
      console.log(pyramid("p", 5, true));

      //Gradebook App
      function getAverage(scores){
        let sum = 0;
      
        for (const score of scores){
          sum += score;
        } 
        return sum/scores.length;
      }
      
      function getGrade(stdScore){
        if (stdScore === 100 ){
          return "A+";
        } else if (stdScore >= 90){
          return "A";
        } else if (stdScore >= 80){
          return "B";
        } else if (stdScore >= 70){
          return "C";
        } else if (stdScore >= 60){
          return "D";
        } else if (stdScore >= 0){
          return "F"
        } else {
          return "you've entered an invalid score!";
        }
      }
      
      function hasPassingGrade(isScore){
        if ([ "A+", "A", "B", "C", "D"].includes(isScore)){
          return true;
        } else {
          return false;
        }
      }
      
      function studentMsg(scoreZ, studScore){
        let average = getAverage(scoreZ);
        let grade = getGrade(studScore);
        let message = hasPassingGrade(grade) ? "You passed the course." : "You failed the course."
      
        return `Class average: ${average}. Your grade is: ${grade}. ${message}.`
      }
      console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));

      //correct from freeCodeCamp
      function getAverage(scores) {
        let total = 0;
        for (let score of scores) {
          total += score;
        }
        return total / scores.length;
      }
      
      function getGrade(score) {
        if (score === 100) return "A+";
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
      }
      
      function hasPassingGrade(score) {
        
        return getGrade(score) !== "F";
      }
      
      function studentMsg(totalScores, studentScore) {
        const average = getAverage(totalScores);
        const grade = getGrade(studentScore);
        
        if (hasPassingGrade(studentScore)) {
          return "Class average: " + average + ". Your grade: " + grade + ". You passed the course.";
        } else {
          return "Class average: " + average + ". Your grade: " + grade + ". You failed the course.";
        }
      }

      //Tittle Case Converter
      function titleCase(title){
        let result = title
          .toLowerCase()
          .split(/\s+ /)
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
          return result;
        }
        console.log(titleCase("I like to code"));

        //False remover
        //not correct but working
        function bouncer(elements){

          let element = elements.filter(elements => elements !==null && elements !== false && elements !==NaN && elements !== 0&& elements !=="" && elements !== undefined);
        
         return element;
        
        }
        console.log(bouncer([false, null, 0, NaN, undefined, ""]));

        //correct one
        function bouncer(elements){

          return elements.filter(Boolean);
        }
        console.log(bouncer([false, null, 0, NaN, undefined, ""]));

        //Inventory Management Program
        const inventory = [];

function findProductIndex(item) {
  
  return inventory.findIndex(p => p.name.toLowerCase() === item.toLowerCase());
}


function addProduct(productObj) {
  const nameLower = productObj.name.toLowerCase();
  const index = findProductIndex(nameLower);

  if (index !== -1) {
  
    inventory[index].quantity += productObj.quantity;
    console.log(`${nameLower} quantity updated`);
  } else {
  
    inventory.push({ name: nameLower, quantity: productObj.quantity });
    console.log(`${nameLower} added to inventory`);
  }
}

function removeProduct(productName, quantity) {
  const nameLower = productName.toLowerCase();
  const index = findProductIndex(nameLower);

  if (index === -1) {
    console.log(`${nameLower} not found`);
    return;
  }

  const product = inventory[index];

  if (quantity > product.quantity) {
    
    console.log(`Not enough ${nameLower} available, remaining pieces: ${product.quantity}`);
  } else {
    
    product.quantity -= quantity;
    
    if (product.quantity === 0) {
      inventory.splice(index, 1);
    }
    
    console.log(`Remaining ${nameLower} pieces: ${product.quantity}`);
  }
}

//Unique sorted union
function uniteUnique(...arys){
  let result = [];
  arys.flat().forEach(num => {
    if (!result.includes(num)){
      result.push(num)
    }
  });
  return result;
}
console.log(uniteUnique([1, 2, 4], [2, 3, 5]));

//simple set methode
function uniteUnique(...arrys){
  return [...new Set(arrys.flat())];
}
console.log(uniteUnique([1, 2, 4], [2, 3, 5]));

//Password generator App
function generatePassword(genPassword){
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let output = "";

  for (let i = 0; i < genPassword; i++){
    let random = Math.floor(Math.random() * chars.length);
    output += chars[random];
  
  }
  return output;
}

const password = generatePassword(10);

console.log(`Generated password: ${password}`);
//Sum All Numbers Algorithm
function sumAll(nums){
  let sum = 0;
  for (let i = Math.min(...nums); i <= Math.max(...nums); i++){
    sum += i;
  }
  return sum;
 }
 console.log(sumAll([10, 5]));

//DNA Pair Generator
function pairElement(molecule){
  const pair = {
    "A" : "T",
    "T" : "A",
    "G" : "C",
    "C" : "G"
  }
  return molecule.split("").map(base => [base, pair[base]]);
}
console.log(pairElement("ATCGA")); 
//HTML Entity Converter
function convertHTML(content){
  const entries = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    "'" : "&apos;",
    '"' : "&quot;"
  };
  // (/[<>&""']/g) is a Regex that scans the string once
  return content.replace(/[<>&"']/g, char => entries[char]);
}
console.log(convertHTML("Hamburgers < Pizza < Tacos"));

// Odd Fibonacci Sum Calculator
//the Fibonacci engine
function sumFibs(numb){
  let sequence = [0, 1];

  for (let i = 2; i <= numb; i++){
    sequence[i] = sequence[i-1] + sequence[i-1];
  }
  return sequence[numb];
}
console.log(sumFibs(4));
//the calculator engine
function sumFibs(numb){
  let prev = 0;
  let cur = 1;
  let sum = 0;

  while (cur <= numb){
    if (cur % 2 !== 0){
      sum += cur
    }
    let next = prev + cur;
    prev = cur;
    cur = next;
  }
  return sum;
}
console.log(sumFibs(4000000));

//An Element Skipper
function dropElement(arr, func){
  let sliceIndex = arr.findIndex(func);
  return sliceIndex === -1 ? [] : arr.slice(sliceIndex);
}
console.log(dropElement([1, 2, 3, 9, 2], function(n) {return n > 2;}));