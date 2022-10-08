const findPerson = require('./stuff');

test('should find fred', ()=>{
    var result = findPerson("fred");

    expect(result).toEqual({name: "fred", age: 28});
})

test('should find bob', ()=>{
    var result = findPerson("bob");

    expect(result).toEqual({name: "bob", age: 15});
})

test('should find sally', ()=>{
    var result = findPerson("sally");

    expect(result).toEqual({name: "sally", age: 35});
})

test('should return "not found"', ()=>{
    var result = findPerson("bill");

    expect(result).toEqual("not found");
})