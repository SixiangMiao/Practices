//Reduce
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;
    for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
};

// Example usage
const arr = [1, 2, 3, 4, 5];
const sum = arr.myReduce((acc, val) => acc + val, 0);
console.log(sum); // Output: 15


//Map
Array.prototype.myMap = function(callback) {
    let mappedArray = [];

    for(let i = 0; i < this.length; i++) {
        let mappedValue = callback(this[i], i, this);
        mappedArray.push(mappedValue);
    }

    return mappedArray;
}
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.myMap(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]