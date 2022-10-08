var bob = {name: "bob", age: 15};
var fred = {name: "fred", age: 28};
var sally = {name: "sally", age: 35};

var people = [bob, fred, sally]


if(-1) {
    console.log("its truthy")
} else {
    console.log("its falsy")
}


function findPerson(name) {
    var result = people.find(person => person.name == name)

    if(result) {
        return result
    } else {
        return "not found";
    }
}


module.exports = findPerson;