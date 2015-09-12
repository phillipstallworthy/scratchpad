"use strict";
function sort() {
}


/**
 * Bubble sort
 * https://en.wikipedia.org/wiki/Bubble_sort
 *
 * procedure bubbleSort( A : list of sortable items )
 *   n = length(A)
 *   repeat
 *     swapped = false
 *     for i = 1 to n-1 inclusive do
 *       / if this pair is out of order /
 *       if A[i-1] > A[i] then
 *         / swap them and remember something changed /
 *         swap( A[i-1], A[i] )
 *         swapped = true
 *       end if
 *     end for
 *   until not swapped
 * end procedure
 *
 * @param {number []} unsorted input array
 * @returns {number []} the same array, sorted.
 */
sort.bubbleSort = function (input) {
  var len = input.length - 1;
  var output = input;
  var swapped = Boolean(true);
  while (swapped){
    swapped = Boolean(false);
    for(var i = 0 ; i < len; i++){
      if (output[i] > output[i+1]){
        var temp = output[i];
        output[i] = output[i+1];
        output[i+1] = temp;
        swapped = Boolean(true);
      }
    }
  }
  return output;
};

/**
* Remove the unique numbers from an array
*
* @param {number []} array of numbers
* @returns {number []} array of unique numbers
*/

sort.uniq = function (input) {
  var len = input.length - 1;
  var output = input;
  for(var i = 0 ; i < len; i++){
    if (output[i] == output[i+1]){
      output.splice(i+1, 1);
      len--; // one has been removed.
      i--; // go back one and try again to catch >2 identicals.
    }
  }
  return output;
};
