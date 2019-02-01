const filter = (arr, condition) => {
	var result = [];
	for (let i = 0; i < arr.length; i++) {
		
		if (condition(arr[i])) {
			result.push(arr[i]);
		}
	}
	return result;
}; 



const last = arr => arr[arr.length - 1];
const quickSort = (arr) => {
	if (arr.length <= 1) return arr;

	const center = last(arr);
	const left = arr.filter(el => el < center);
	const right = arr.filter((el, i) => el >= center && i !== arr.length - 1);

	return [...quickSort(left), center, ...quickSort(right)];
}

const testArr = [6, 7, 4, 1, 2, 0, 3, 3, 3, 5, 5, 10, 10];

const res = quickSort(testArr);
console.log(res);

let array = {
    head: {
        next: "",
        value: ""
    },

    push: (value) => {
        console.log('inside method');
        console.log(this.head);
    }
}

array.push(5);
console.log(array.head);
