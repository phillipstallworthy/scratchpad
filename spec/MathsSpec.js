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

  it("Fibonacci sequence test start 1, 2", function() {
    var sequence = maths.fib_calc([1,2], 89);
    var last = sequence[sequence.length -1];
    expect(last).toEqual(89);
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

  it("Euler 1 - The real answer - 233168", function() {
    var result = maths.euler1(3,5,1000);
    expect(result).toEqual(233168);
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

  it("Euler 2 - 89 limit test, answer 44", function() {
    var result = maths.euler2(89);
    expect(result).toEqual(44);
  });

  it("Euler 2 - 4 mil limit, real answer 4613732", function() {
    var result = maths.euler2(4000000);
    expect(result).toEqual(4613732);
  });

});
