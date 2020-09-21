const arr = [1, 2, 3, 4, 5, 6, 7, 8]
//Some of the popular array methods. This is something you should know very well and it is something which is used heavily in React/Modern Javascript

/*Function forEach - loop over each element inside an array*/
//This function just loops over every element in the array and does something based on the number of elements in there. This does not create a new array like map or filter.

let forEachArray = []
arr.forEach((ele) => { forEachArray.push(ele ** 2) })
console.log(forEachArray)
/**Filter - for a filter method to work, it has to have a return statement - in the below code x > 4 will not work */

let filteredArray = arr.filter((x) => { return x > 4 })
console.log(filteredArray)

/**Map - also has to have a return statement */
let mappedArray = arr.map((x) => { return x ** 2 })
console.log(mappedArray)

//Every - checks whether all elements in an array fulfill a given condition. Requires a function in here to work properly. 
const testPositive = x => (x > 0);
console.log(arr.every(testPositive))

//Includes - returns a binary value to see if a value is in the array 
console.log(arr.includes(2))

//We can even mix and match array methods and create some weird syntax 

arr.forEach(x => console.log(arr.includes(x * 2) + ' ' + x))

//Array Reduce - this is one of the ones that I personally find the most confusing.

let x = arr.reduce((ac, cv) => ac + cv); //Generic use case of array.reduce which I use sometimes. H
console.log(x)