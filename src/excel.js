"use strict";
function excel() {
}


/**
 *
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 *
 * mark integers, or delete them
 *
 * @params{number} limit
 * @returns{number []} An array of prime numbers upto the limit
 */
excel.hack = function(x, y){


  var column = "$P$";
  var output = "=";
  var i = x;
  for( i; i < y; i++){
   output += column + i +"&"
  }

  output += column + i;
  return output;
};



