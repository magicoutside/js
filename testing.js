//function expected
var assertEquals = (expected, actual) => {
    if (expected != actual)
        throw `Expected ${expected}, but got ${actual}`;
};

var person = {
    name: 'Ivan',
    age: 13
};

assertEquals(person.name, 'Ivan');
assertEquals(person.age , 130);
console.log(person)

// assertEquals
var assertArraysEquals = (ar1, ar2) => {
    assertEquals(ar1.length, ar2.length);
	for (i = 0; i < ar1.length; i++) { 
		assertEquals(ar1[i], ar2[i]);
    }
}

assertArraysEquals([1,2], [1,2]);

var string = " ";
var assertObjectsEquals = {name: "Ivan", age: 13};
for (var property1 in assertObjectsEquals) {
	string = string + assertObjectsEquals[property1];
}
console.log(string)