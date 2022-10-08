const homework = require('./homework');
    
describe("sum", ()=> {
    test("it should add two numbers", ()=>{
        const result = homework.sum(2, 2);
        expect(result).toBe(4);
    })
})
describe("hello", ()=> {
    test("say hello", ()=>{
        const result = homework.hello();
        expect(result).toBe("Hello");
    })

    test("say hello to the name", ()=>{
        const result = homework.hello("Stephen");
        expect(result).toBe("Hello Stephen");
    })
})

describe("addToThings", ()=> {
    test("should add a thing to things", ()=>{
        const things = [];
        const thing = "thing";
        const result = homework.addToThings(things, thing);
        expect(result).toEqual([thing]);
    })

    test("should add more things to things", ()=>{
        const things = [];
        var result = homework.addToThings(things, 1);
        result = homework.addToThings(result, 2);
        result = homework.addToThings(result, 3);

        expect(result).toEqual([1, 2, 3]);
    })

})