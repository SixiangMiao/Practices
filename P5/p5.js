// Create a function that everytime you invoke it, it will print out the message "Congrats you earn the chance!",
// however it can only print out the message with the first 5 excutions.
// all the rest invoke will print out the message "Sorry you missed the chance"
function out() {
    let count = 0;
    function inner() {
        count++;
        if (count <= 5) {
            console.log("Congrats you earn the chance!");
        }
        else{
            console.log("Sorry you missed the chance");
            }

    }
    return inner;
}

const func = out();
func();
func();
func();
func();
func();
func();
func();
func();


// Filter an Array with a user input of minimum length


let arr1 = ["123123", "123", "451511", "422"]
let minimumLength = 5
function cb(minLength){
    return function(str) {
        return  str.length > minLength
    }
}
console.log((arr1.filter(cb(minimumLength))))
