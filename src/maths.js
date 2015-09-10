"use strict";
function maths() {
}

/**
 * A function to do stuff
 * @param {number} number1
 * @param {number} number2
 * @param {string] id of element to send the answer to
 */
maths.myFunction = function (number1, number2, output) {
  var answer;

  if (isNaN(number1) || isNaN(number2)) {
    answer = "Input not valid";
  }
  answer = number1 * number2;

  document.getElementById(output).innerHTML = answer;

  return answer;
};


/**
 * Calculate the fibonacci sequence.
 * @param {number} number1
 * @param {string] id of element to send the answer to
 */
maths.fibonacci = function(limit, output) {
  var answer = maths.fib_calc([0, 1], limit);
  document.getElementById("fib_out").innerHTML = answer;
  return answer;

};

/**
 * Calculate the fibonacci sequence.
 * Algorithm goes out of it's way to not change the
 * supplied parameters
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

maths.euler1 = function (x, y, limit, output){

  // instantiate variables, multipler and multiples
  // that recursion needs.
  var multipler1 = 1;
  var multiples1 = [x];

  // call recursive function
  multiples1 =  maths.multiples_worker(x, multipler1, multiples1, limit);

   var multipler2 = 1;
  var multiples2 = [y];

  // call recursive function
  multiples2 =  maths.multiples_worker(x, multipler2, multiples2, limit);

  //add em up


  var answer = "crap";
  document.getElementById(output).innerHTML = answer;


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
