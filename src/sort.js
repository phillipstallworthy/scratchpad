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
      console.log(i);
      if (output[i] > output[i+1]){
        console.log("swap");
        var temp = output[i];
        output[i] = output[i+1];
        output[i+1] = temp;
        swapped = Boolean(true);
      }
    }
  }
  //return [2,2,4,7,8,9];
  return output;
};
