let salaries = [1700, 2000, 1560, 2300, 1920, 1400]
let y = salaries.reduce(function (sum, el){
	return sum + el;
})
console.log(y)
//second way 
let sum = 0;
for (let i=0; i < salaries.length; i++){
sum += salaries[i];
}
console.log(sum)
//average
average = sum / salaries.length
console.log(average)
//max
let max = salaries[0];
for(let i=0; i < salaries.length; i++){
     if (salaries[i] >= max) {
           max = salaries [i];
     }
 }
console.log(max)
//min
let min = salaries[0];
for(let i=0; i < salaries.length; i++){
     if (salaries[i] <= min) {
           min = salaries [i];
     }
 }
 console.log(min)

// filter
var filter = (arr, condition) => {
	var result = [];
	for (let i = 0; i < arr.length; i++) {
	
		if (condition(arr[i])) {
			result.push(arr[i]);
		}
	}
	return result;
}; 

filter([1,2,3,4,5,6], (e) => e > 4)
// find
var find = (arr, element) => {
	var found = filter(arr, (e) => e == element);
	return found.length == 1 
		? found[0] 
		: null;
} 
// map
var map = (arr, transformation) => {
	var result= [];
	for (let i = 0; i < arr.length; i++) {
        result.push(transformation(arr[i]));
	}
	return result;
};
// reduce
let reduce = (arr, reducer, initialValue) => {
	
	let result = initialValue;

	for (let i = 0; i < arr.length; i++) {
	
		result = reducer(arr[i], result);

	}

	return result;

}
reduce([1,2,3,4], (el, acc) => el + acc, 0);
