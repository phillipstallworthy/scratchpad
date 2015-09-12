describe("Maths Funtions", function() {
  //var fib_short;
  //var fib_long;

  beforeEach(function() {
    //short = new maths();
  });

  it("Fibonacci sequence test, last one 72723460248141", function() {
    var sequence = maths.fib_calc([1,1], 99999999999999);
    var last = sequence[sequence.length -1];
    expect(last).toEqual(72723460248141);
  });

  it("Euler 1 multiples test - multiplyer 3, limit 3", function() {
    var result = maths.multiples(3,3);
    expect(result).toEqual([3]);
  });

  it("Euler 1 multiples test - multiplyer 3, limit 10, result 3, 6, 9", function() {
    var result = maths.multiples(3,10);
    expect(result).toEqual([3,6,9]);
  });

  it("Euler 1 multiples test - multiplyer 3, limit 20", function() {
    var result = maths.multiples(3,20);
    expect(result).toEqual([3,6,9,12,15,18]);
  });

  it("Bubble sort simple test", function() {
    var result = sort.bubbleSort([9,4,7,2,8,2]);
    expect(result).toEqual([2,2,4,7,8,9]);
  });

  it("Bubble sort big test", function() {
    var result = sort.bubbleSort([33,26,22,11,9,4,791,101,273564,2,33874,2,8,2]);
    expect(result).toEqual([2,2,2,4,8,9,11,22,26,33,101,791,33874,273564]);
  });

  it("Uniq - simple test", function() {
    var result = sort.uniq([2,2,4,7,8,9]);
    expect(result).toEqual([2,4,7,8,9]);
  });

  it("Uniq - multiple idenicals", function() {
    var result = sort.uniq([2,2,4,7,7,7,8,9,9,9,9]);
    expect(result).toEqual([2,4,7,8,9]);
  });

});
