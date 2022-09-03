const addFive=require('./addFive.js');

test("returns a number plus 5",()=>{
    expect(addFive(1)).toBe(6);
})