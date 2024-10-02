// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // base
  if (n < 0) { // returns null if n is less than 0
    return null;
  }
  if (n <= 1) { // returns 1 if n is equal to or less than 1
    return 1;
  }

  // recursion
    // multiply n by a call of factorial with n-1 as the parameter to keep the process moving
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, i = 0) {
  // base
  if (i >= array.length) { // returns 0 if i becomes equal to or greater than the length of the array
    return 0;
  }

  // recursion
    // add the current item of the input array (determined by the value of i) to a call of sum with i incremented by 1 in the parameters to keep the process moving
  return array[i] + sum(array, i + 1);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, i = 0, output = 0) {
  // base
  return 0;
  if (i >= array.length) { // returns 0 if i becomes equal to or greater than the length of the array
    return 0;
  }
  console.log(output);
  // recursion
    // determine if current item in the input array is an array
  if (Array.isArray(array[i]) === true) {
    output += arraySum(array[i])
  } else {
    // add the current item of the input array (determined by the value of i) to a call of arraySum with i incremented by 1 in the parameters to keep the process moving
    output += array[i];
    return output + arraySum(array, i + 1, output);
  }
};

// 4. Check if a number is even.
var isEven = function(n) {
  // force n to become positive if it is negative (aka, get n's absolute value)
  if (n < 0) {
    n = n - (2 * n);
  }

  // base
  if (n === 1) { // returns false if n becomes equal to 1
    return false;
  } else if (n === 0) { // returns true if n becomes equal to 0
    return true;
  }

  // recursion
    // return a call of isEven with n-2 as the parameter to keep the process moving
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // base
  if (n === 0) { // returns 0 if n is equal to 0
    return 0;
  }

  // recursion
  // if n is positive
  if (n > 0) {
    // decrement n by 1
    n--;
  } else { // otherwise...
    // increment n by 1
    n++;
  }
  // add n to a call of sumBelow with as n the parameter to keep the process moving
  return n + sumBelow(n);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output=[]) {
  if (x < y) { // code to run if starting integer is smaller than the ending integer
    // base
    if (x >= y - 1) {
      return output;
    }
    // recursion
      // update output
    output.push(x + 1);
      // invoke range to keep the process moving by incrementing x
    return range(x + 1, y, output);
  } else { // code to run if starting integer is bigger than the ending integer
    // base
    if (x <= y + 1) {
      return output;
    }
    // recursion
      // update output
    output.push(x - 1);
      // invoke range to keep the process moving by decrementing x
    return range(x - 1, y, output);
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // base
  if (exp === 0) { // returns 1 if exp is equal to 0
    return 1;
  }
  if (exp === 1) { // returns base if exp is equal to 1
    return base;
  }

  // recursion
  // if exp is positive
  if (exp > 0) {
    // multiply base with a call of exponent with base and exp-1 as the parameters to keep the process moving
    return base * exponent(base, exp - 1);
  } else { // otherwise...
    // multiply 1/base with a call of exponent with base and exp+1 as the parameters to keep the process moving
    return ((100 * (1 / base)) * exponent(base, exp + 1)) / 100; // multiply each value (1/base) by a "high number" (like one hundred) before multiplying said value by another value (from the function call) and then dividing the outcome by the same "high number" (100 in this case) to help prevent the errors that usually occur when dealing with large decimal values
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n, comparison = 1) {
  // base
  if (comparison > n) { // returns false if the comparison becomes bigger than n
    return false;
  } else if (n === comparison) { // returns true if n becomes equal to the comparison
    return true;
  }

  // recursion
    // return a call of powerOfTwo with n and comparison*2 as the parameters to keep the process moving
  return powerOfTwo(n, comparison * 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, i = string.length - 1, newString = "") {
  // base
  if (i < 0) { // returns newString if i becomes less than 0
    return newString;
  }

  // recursion
    // concatenate newString with the character from string that corresponds to the current i value
  newString += string[i];
    // return a call of reverse with string, i-1, and newString as the parameters to keep the process moving
  return reverse(string, i - 1, newString);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string, i = string.length - 1, newString = "") {
  // base
  if (i < 0) { // checks if i is less than 0
    // if so, check if newString is equal to string, making sure to remove spaces from both strings and to make both strings lowercase
    if (newString.toLowerCase().replaceAll(' ', '') === string.toLowerCase().replaceAll(' ', '')) {
      // return true if so
      return true;
    }
    // return false otherwise
    return false;
  }

  // recursion
    // concatenate newString with the character from string that corresponds to the current i value
  newString += string[i];
    // return a call of palindrome with string, i-1, and newString as the parameters to keep the process moving
  return palindrome(string, i - 1, newString);
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').

// this function essentially works by adding x to itself y amount of times and then returning the resulting sum + 0 after decrementing y enough times for it to equal (or be less than) 0
// this function also forces x and y to become positive if they are both negative (aka, get the absolute value of both)
// this function also switches the polarities (positive or negative) of x and y if the original x is positive and the original y is negative
var multiply = function(x, y) {
  if (x < 0 && y < 0) {
    x -= x + x;
    y -= y + y;
  } else if (y < 0 && x > 0) {
    x -= x + x;
    y -= y + y;
  }

  if (y <= 0) {
    return 0;
  }

  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // base
  if (str1.length === 0 && str2.length === 0) { // returns true if the length of both input strings become 0
    return true;
  } else if (str1.length === 0 || str2.length === 0) {// returns false if the length of only one of the input strings becomes 0
    return false;
  } else if (str1[0] !== str2[0]) {// returns false if a character from str1 does not equal a character from the same index (index 0) in str2
    return false;
  }

  // recursion
    // return a call of compareStr with copies of both input strings that had the first character sliced off of them as the parameters to keep the process moving
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, output=[]){
  // base
  if (str.length === 0) { // returns the output array if the length of the input string becomes 0
    return output;
  }

  // recursion
    // push the first character of the input string into the output array
  output.push(str[0]);
    // return a call of createArray with a copy of the input string that had the first character sliced off of it and the output array as the parameters to keep the process moving
  return createArray(str.slice(1), output);
};

// 17. Reverse the order of an array
var reverseArr = function (array, output=[]) {
  // base
  if (array.length === 0) { // returns the output array if the length of the input array becomes 0
    return output;
  }

  // recursion
    // push the last character of the input array into the output array
  output.push(array[array.length-1]);
    // return a call of reverseArr with a copy of the input array that had the last value sliced off of it and the output array as the parameters to keep the process moving
  return reverseArr(array.slice(0, array.length-1), output);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output=[]) {
  // base
  if (output.length === length) { // returns the output array if the length of the output array becomes equal to the input length
    return output;
  }

  // recursion
    // push the input value into the output array
  output.push(value);
    // return a call of buildList with the input value, input length, and the output array as the parameters to keep the process moving
  return buildList(value, length, output);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, output=0) {
  // base
  if (array.length === 0) { // returns the output number if the length of the input array becomes 0
    return output;
  }

  // recursion
  if (array[0] === value) { // check if the first item in the input array is equal to the input value
    output++; // increment the output number by 1 if so
  }
    // return a call of countOccurrence with a copy of the input array that had the first value sliced off of it, the input value, and the output number as the parameters to keep the process moving
  return countOccurrence(array.slice(1), value, output);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[]) {
  // base
  if (array.length === 0) { // returns the output array if the length of the input array becomes 0
    return output;
  }

  // recursion
    // push the result of calling the inputted callback function with the first item from the input array into the output array
  output.push(callback(array[0]));
    // return a call of rMap with a copy of the input array that had the first value sliced off of it, the inputted callback function, and the output array as the parameters to keep the process moving
  return rMap(array.slice(1), callback, output);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, fib=[0, 1]) {
  // base
  if (n < 0) { // return null if n is negative
    return null;
  }
  if (fib.length > n) { // otherwise, check if the fib array now contains the n index
    return fib[n]; // return the number at the n index if so
  }
  // recursion
  fib.push(fib[fib.length-1] + fib[fib.length-2]) // otherwise, push the result of adding the last two numbers of the fib array together to the end of the fib array
  return nthFibo(n, fib); // recurse the function with n and fib as parameters
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output=[]) {
  // base
  if (input.length === 0) { // returns the output array if the length of the input array (input) becomes 0
    return output;
  }

  // recursion
    // push the result using the .toUpperCase() method with the first item from the input array (input) into the output array
  output.push(input[0].toUpperCase());
    // return a call of capitalizeWords with a copy of the input array (input) that had the first value sliced off of it and the output array as the parameters to keep the process moving
  return capitalizeWords(input.slice(1), output);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output=[]) {
  // base
  if (array.length === 0) { // returns the output array if the length of the input array becomes 0
    return output;
  }

  // recursion
    // push into the output array the result using the .toUpperCase() method with the first character from the first item from the input array and then adding the methods result to the front of a clone of the first item in the input array that had its first character sliced off
    // tldr, capitalize the first letter of each word in the input array and assign the modified version of each word to the output array
  output.push(array[0][0].toUpperCase() + array[0].slice(1));
    // return a call of capitalizeFirst with a copy of the input array that had the first value sliced off of it and the output array as the parameters to keep the process moving
  return capitalizeFirst(array.slice(1), output);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj={}) {
  // base
  if (str.length === 0) { // returns the output object if the length of the input string becomes 0
    return obj;
  }

  // recursion
    // check if a key with the same name as the first character of the input string does NOT exist in the output object
    if (!obj[str[0]]) {
      // make the first character of the input string a key in the output object and assign it to 1
      obj[str[0]] = 1;
    } else { // otherwise, increment the value at the corresponding key in the output object by 1
      obj[str[0]]++;
    }
    // return a call of letterTally with a copy of the input string that had the first character sliced off of it and the output object as the parameters to keep the process moving
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output=[]) {
  // base
  if (list.length === 0) { // returns the output array if the length of the input array (list) becomes 0
    return output;
  }

  // recursion
    // check if the first item in the current input array (list) is NOT the last item in the current output array
  if (output[output.length-1] !== list[0]) {
    // push the first item in the input array (list) is into the output array
    output.push(list[0]);
  }
    // return a call of compress with a copy of the input array (list) that had the first value sliced off of it and the output array as the parameters to keep the process moving
  return compress(list.slice(1), output);
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, output=[]) {
  // base
  if (array.length === 0) { // returns the output array if the length of the input array becomes 0
    return output;
  }

  // recursion
    // check if the first item in the current input array and the last item in the current output array are both 0
  if (output[output.length-1] === 0 && array[0] === 0) {
    // do nothing if so
  } else {
    // otherwise, push the first item in the input array is into the output array
    output.push(array[0]);
  }
    // return a call of minimizeZeroes with a copy of the input array that had the first value sliced off of it and the output array as the parameters to keep the process moving
  return minimizeZeroes(array.slice(1), output);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, output=[], alternator=1) {
  // base
  if (array.length === 0) { // returns the output array if the length of the input array becomes 0
    return output;
  }

  // recursion
    // assign the first number in the current input array to a variable and force it to be positive
  let num = Math.abs(array[0]);
    // check if the first item in the current input array is 0
  if (array[0] === 0) {
    // do nothing if so ("removes the excess zeros" [probably a mistake in the tests if I had to assume, but I did it none-the-less])
  } else if (!alternator) { // check if the alternator is a falsey value (0)
    // if so, force num to be negative
    num = num - (2 * num);
    // increment alternator by 1
    alternator++;
    // push num onto the output array
    output.push(num);
  } else {
    // otherwise, decrement alternator by 1
    alternator--;
    // push num onto the output array
    output.push(num);
  }

    // return a call of alternateSign with a copy of the input array that had the first value sliced off of it, the output array, and the alternator number as the parameters to keep the process moving
  return alternateSign(array.slice(1), output, alternator);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, output="", singleDigitWords=["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]) {
  // base
  if (str.length === 0) { // returns the output array if the length of the input string becomes 0
    return output;
  }

  // recursion
    // convert the first character in the current input string to a number and assign it a variable
  let num = Number(str[0]);
    // check if num is a truthy value (not NaN or undefined)
  if (num) {
    // if so, then concatenate the corresponding word representation of the number from the singleDigitWords array into the output string
    output += singleDigitWords[num];
  } else {
    // otherwise, concatenate the first character in the current input string into the output string
    output += str[0];
  }

    // return a call of numToText with a copy of the input string that had the first value sliced off of it, the output string, and the singleDigitWords array as the parameters to keep the process moving
  return numToText(str.slice(1), output, singleDigitWords);
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
