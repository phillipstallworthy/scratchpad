"use strict";
function prime() {
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
prime.eratosthenes = function(x){
  var primes = prime.start(x);
};

/**
 *
 * assemble the starting array
 * mark all evens as c - composite
 * mark all odds as p - potential prime
 * zero is zero, and one is one.
 *
 * @params{number} limit
 * @returns{number []} An array of prime numbers upto the limit
 */
prime.start = function(x){
  var primes = ["0","1","p","p"];
  // fill the array with p Prime, and c composite
  var num = "p";
  for( var i = 0; i <= x - 4; i++){
    if (num === "c"){num = "p";} else {num = "c";}
    primes.push(num);
  }
  return primes;
};



