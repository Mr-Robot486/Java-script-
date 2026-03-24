//Book Organizer
const books = [
    {title: "Fathers Of Nations",authorName: "Paul N. Vita", releaseYear: 2021},
    {title: "Blossoms Of Th Savannah", authorName: "Henry Ole Kulet",releaseYear: 2008},
    {title: "Things Fall Apart", authorName: "Chinua Chebe",
  releaseYear: 1970}
  ];
  
  function sortByYear(book1, book2){
      if (book1.releaseYear < book2.releaseYear){
        return -1;
      } else if (book1.releaseYear > book2.releaseYear){
        return 1;
      } else {
        return 0;
      }
    }
  
  const filteredBooks = books.filter((book) => book.releaseYear < 2000);
  
  filteredBooks.sort(sortByYear)
  
  console.log(filteredBooks);

// Sorted Index Finder
  function getIndexToIns(arr, num){
    const sorted = arr.sort((a,b) => a - b);
    const index = sorted.findIndex((sot) => sot >= num);
    return index === -1 ? sorted.length : index;
  }
  
  console.log(getIndexToIns([2, 20, 10], 19));

// Systematic Difference Function
  function diffArray(arr1, arr2){
    const cleaned = arr1.filter(item => !arr2.includes(item));
    const cleanedE = arr2.filter(item => !arr1.includes(item))
    return cleaned.concat(cleanedE);
  }
  
  console.log(diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"]));

 //Value Remover
  function destroyer(arry, ...nums){
    const renewed = arry.filter(item => !nums.includes(item));
    return renewed;
  }
  console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan" ));

//Matching Object Filter
  function whatIsInAName(arrObj, obj){
    const arryR = [];
    const keys = Object.keys(obj);
  
    for (const item of arrObj){
      let isMatch = true;
  
      for (const key of keys){
        if (item[key] !== obj[key]){
          isMatch = false;
          break;
        }
      }
      if (isMatch){
        arryR.push(item);
      }
    }
    return arryR;
  }
  console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));

//Prime Number sum Calculator
  function isPrime(numb){
    if (numb < 2) return 0;
    for (let i = 2; i<= Math.sqrt(numb); i++){
      if (numb % i === 0) return 0;
    }
    return true;
  }
  
  function sumPrimes(item){
    let sum = 0;
    for (let i = 2; i <=item; i++){
      if (isPrime(i)){
        sum += i;
      }
    }
    return sum;
  }
  console.log(sumPrimes(5));

//Range-Based LCM Calculator
  function gcd(a, b){
    return b === 0 ? a : gcd(b, a % b);
  }
  
  function lcm(a, b){
    return (a * b)/gcd(a, b);
  }
  
  function smallestCommons(commons){
    const [min, max] = commons.sort((a,b) => a - b);
    const range = [];
    for (let i = min; i <= max; i++){
      range.push(i);
    }
    return range.reduce((multiple, curr) => lcm(multiple, curr));
  }
  console.log(smallestCommons([1, 5]));

 //Deep Flattening Tool
function steamrollArray(array){
  let result = [];
  for (let i = 0; i< array.length; i++){
    if (Array.isArray(array[i])){
      result = result.concat(steamrollArray(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
  }
  console.log(steamrollArray([[["a"]], [["b"]]]));

//All-True property Validator
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));

//Cargo Manifester Validator
function normalizeUnits(manifest){
  const newManifest = { ...manifest };

  if (newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
  }

  return newManifest;
}

function validateManifest(manifest){
  const errors = {};
  const requiredFields = ["containerId", "destination", "weight", "unit", "hazmat"];

  for (const field of requiredFields) {
    if (!manifest.hasOwnProperty(field)) {
      errors[field] = "Missing";
    } else {
      const value = manifest[field];

      if (field === "containerId") {
        if (!Number.isInteger(value) || value <= 0) {
          errors[field] = "Invalid";
        }
      }

      if (field === "destination") {
        if (typeof value !== "string" || value.trim() === "") {
          errors[field] = "Invalid";
        }
      }

      if (field === "weight") {
        if (typeof value !== "number" || value <= 0 || Number.isNaN(value)) {
          errors[field] = "Invalid";
        }
      }

      if (field === "unit") {
        if (value !== "kg" && value !== "lb") {
          errors[field] = "Invalid";
        }
      }

      if (field === "hazmat") {
        if (typeof value !== "boolean") {
          errors[field] = "Invalid";
        }
      }
    }
  }

  return errors;
}

function processManifest(manifest){
   const validationResults = validateManifest(manifest);
  const { containerId } = manifest;

  if (Object.keys(validationResults).length === 0) {
    const normalized = normalizeUnits(manifest);
    
    console.log(`Validation success: ${containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${containerId}`);
    console.log(validateManifest(manifest)); // 🔥 important
  }
}

console.log(normalizeUnits({ containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true }));