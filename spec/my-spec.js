// describe("Module", function() {
//   it("should do something", function() {
//     expect(true).toEqual(false);
//   });
// });

describe('chunk', function() {
  it('should divide array into 2 chunks with larger chunks at beginning of new array', function() {
    var input = [1,2,3,4,5,6,7,8,9,10];
    expect(chunk(input,2)).toEqual([ [1,2,3,4,5], [6,7,8,9,10] ]);  
  });
  it('should divide array into 3 chunks with larger chunks at beginning of new array', function() {
    var input = [1,2,3,4,5,6,7,8,9,10];
    expect(chunk(input, 3)).toEqual([ [1,2,3,4], [5,6,7], [8,9,10] ]); 
  });
  it('should divide array into 7 chunks with larger chunks at beginning of new array', function() {
    var input = [1,2,3,4,5,6,7,8,9,10];
    expect(chunk(input, 7)).toEqual([ [1,2], [3,4], [5,6], [7], [8], [9], [10] ]);  
  }); 

});


 
    