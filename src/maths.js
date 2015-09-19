"use strict";
function maths() {
}

/**
* Euler 3 - largest prime factor of some number
* The prime factors of 13195 are 5, 7, 13 and 29.
* What is the largest prime factor of the number 600851475143
* divide by the first prime number
* @param{number} number to test
* @return{number} largest prime factor
*/
maths.euler3 = function(x){
  var factors = maths.primeFactors(x);
  return factors[factors.length - 1];
};

/**
* Prime factors of some number
* Need to add multiples.
* @param{number} the number to factorise
* @return{number []} the prime factors of x
*/
maths.primeFactors = function(x){
  var prime = 2;
  var factors = [];
  var sqr = Math.sqrt(x);
  for (var i = 2; i <= sqr; i = maths.nextPrime(i)){
    if (x % i === 0){
      factors.push(i);
    }
  }
  return factors;
};


/**
 * Return the next prime after the supplied number
 *
 * @param {number} some number
 * @return {number} next prime
 *
 */
maths.nextPrime = function(x){
  x++;
  while(true){
    if (maths.prime(x)){
      return x;
    }
    x++;
  }
};

/**
* Prime test.
* Is the supplied number a prime?
* @param{number}
* @return{boolean}
*/
maths.prime = function(x){
  if (x <= 1){return false;}
  var sqr = Math.sqrt(x);
  //console.log("the sqaure root of " + x + " equals " + sqr);
  // is there such a number that is only divisable by it's square root?
  // time just less than optimisation if so.
  for (var i = 2; i <= sqr; i++){
    var mod = x % i;
    if (mod === 0){
      //console.log("Mod " + x + " and " + i + " equals " + x % i);
      return false;
    }
  }
  return true;
};


/**
 * A function to multiply two numbers.
 * @param {number} number1
 * @param {number} number2
 * @return {number} the answer
 */
maths.myFunction = function (number1, number2) {
  var answer;

  if (isNaN(number1) || isNaN(number2)) {
    answer = "Input not valid";
  }
  answer = number1 * number2;
  return answer;
};


/**
 * Calculate the fibonacci sequence.
 * @param {number} the limit to calculate to
 * @return {number []} the fibonacci sequence
 */
maths.fibonacci = function(limit) {
  var answer = maths.fib_calc([0, 1], limit);
  return answer;
};

/**
 * Sum up the even fibonacci numbers up to limit
 * @param {number} limit
 * @return {number} the sum
 */
maths.euler2 = function(limit) {
  var fib = maths.fib_calc([1, 2], limit);
  //console.log(fib.toString());
  var total = 0;
  for(var i = 0 ; i < fib.length; i++){
    if (fib[i] % 2 === 0){
      total = total + fib[i];
    }
  }
  return total;
};

/**
 * Calculate the fibonacci sequence.
 * @param {number} array to start [0,1] or [1,1]
 * @param {number] limit of calculation
 */
maths.fib_calc = function(fib_array, limit){

  var last = fib_array[fib_array.length -1];
  var penulitmate = fib_array[fib_array.length - 2];
  var fib = fib_array; // prefer not to change parameters. - point??, nun

  fib.push(penulitmate + last);
  if (fib[fib.length -1] > limit) {
    fib.pop();
    return fib;
  }

  var result = maths.fib_calc(fib, limit); // recursion!!
  return result;
};

/**
* If we list all the natural numbers below 10 that are multiples of
* 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
* Find the sum of all the multiples of 3 or 5 below 1000.
*
* This is a generic function to find the multiples
*
* @param {number} x
* @param {number} y
* @param {number} limit
* @returns {number} the sum of all the multiples.
*/
maths.euler1 = function (x, y, limit){

  // instantiate variables, multipler and multiples
  // that recursion needs.
  // TODO: array rather than two variables
  var multipler1 = 1;
  var multiples1 = [Number(x)];

  // call recursive function
  multiples1 =  maths.multiples_worker(x, multipler1, multiples1, limit);


  var multipler2 = 1;
  var multiples2 = [Number(y)];

  // call recursive function
  multiples2 =  maths.multiples_worker(y, multipler2, multiples2, limit);

  var allnums = multiples1.concat(multiples2);

  //TODO: understand and tidy file loading.
  //http://stackoverflow.com/questions/950087/include-a-javascript-file-in-another-javascript-file
  var uniq = sort.uniq(sort.bubbleSort(allnums));
  //add em up
  for (var i = 0, len = uniq.length, total = 0; i < len; i++) {
    total = total + uniq[i];
  }

  return total;


};

/**
 * Return an array of the multiples of x
 * up to limit.
 *
 *  If we list all the natural numbers below 10 that are
 * multiples of 3 are 3, 6 and 9
 *
 *
 * @param {number} x the multiples
 * @param {number] limit
 */
maths.multiples = function (x, limit){

  // instantiate variables, multipler and multiples
  // that recursion needs.
  var multipler = 1;
  var multiples = [x];

  // call recursive function
  return maths.multiples_worker(x, multipler, multiples, limit);

};

/**
 * Recursive function to add multiples of x
 * to array 'multiples' up to a limit
 *
 * It's fun to write recursive functions
 * but it bugs me that I am suppling local variables
 * and the return object. I think I'm forced to do this because
 * javascript is not a true functional language, or my own
 * lack of knowledge. Might try clojureScript. Apparently
 * you can live without if's as well in pure functional land.
 *
 * Also not happy with the names. Naming things is hard.
 *
 * @param {number} x - we are finding multiples of x
 * @param {number} multipler - incremented to genenerate multiples
 * @param {number} multiples - that array to store the result in.
 * @param {number] limit
 */
maths.multiples_worker = function (x, multipler, multiples, limit){
  if ((x * (multipler + 1)) >= limit){
    return multiples;
  }
  multiples.push(x * (multipler + 1));
  // recursion!!
  return maths.multiples_worker(x, multipler+1, multiples, limit);
};
