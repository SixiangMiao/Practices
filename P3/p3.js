//Question 1
function p1(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
// console.log(p1(12345)); // Output: 54321
// console.log(p1(354667)); // Output: 766453


//Question 2
function p2(str){
    str = str.toLowerCase().toString()
    return str.split('').reverse().join('') === str
}
// console.log(p2('madam'))
// console.log(p2('nurse run'))

//Question 3
function q3(str){
    let res = []

    function generateCombination(substring, index){
        if (index === str.length){
            if (substring.length > 0){
                res.push(substring);
            }
        }
        else{
            generateCombination(substring + str[index], index + 1);
            generateCombination(substring, index + 1);
        }
    }
    generateCombination("", 0);
    return res;
}
// console.log(q3("dog"));

//Question 4
function q4(str){
    return str.split('').sort().join('')
}
// console.log(q4("webmaster"))

//Question 5
function q5(str){
    str = str.split(' ')
    let res = []
    for (let word of str){
        res.push(word[0].toUpperCase() + word.slice(1) + ' ');
    }
    return res.join('').slice(0,-1)
}

// console.log(q5('the quick brown fox'))

// Question 6
function q6(str){
    str = str.split(' ')
     return str.sort((a, b) =>{
        return b.length - a.length;
    })[0]

}
// console.log(q6('Web Development Tutorial'))

// Question 7
function q7(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase()
    let res = 0
    for(let letter of str){
        // console.log(letter)
        if (vowels.includes(letter)){
            res += 1
        }
    }
    return res
}

// console.log(q7('The quick brown fox'))

//Question 8
function q8(num){
    if (num <= 1){
        return false
    }
    for (let i = 2; i <= num ** 0.5; i ++){
        if (num % i !== 0){
            continue;
        }
        return false
    }
    return true
}

// console.log(q8(9))
// console.log(q8(2))
// console.log(q8(5))
// console.log(q8(1))


//Question 09
function q9(input){
    return typeof(input)
}

// console.log(q9(undefined))
// console.log(q9(q8))

//Question 10
function q10(n){
    const res = new Array(n);
    for (let i = 0; i < n; i++) {
        res[i] = new Array(n).fill(0);
        res[i][i] = 1;
    }
    return res;
}

// console.log(q10(9))

//Question 11
function q11(arr){
    arr.sort((a,b) =>{
        return a - b;
    })
    return [arr[1],arr[arr.length - 2]]
}

// console.log(q11([1, 2, 3, 4, 5]))

//Question 12
function q12(num){
    let arr = q13(num).slice(0, -1)
    // arr = arr
    return arr.reduce((a, b) =>{
        return a + b
    }) === num && num !== 0
    // console.log(arr)
}
// console.log(q12(8128))



//Question 13
function q13(num){
    let res = []
    for (let i = 1; i <= num ** 0.5; i ++){
        if(num % i === 0){
            res.push(i)
            res.push(num / i)
        }
    }
    return res.sort((a,b) => {
        return a - b;
    })
}

// console.log(q13(28))

//Question 14
function q14(num, arr){
    let res = []

    function getcombinations(cur,arr,index){
        if(cur - arr[index]=== 0){
            res.push(arr[index])
            // return;
        }
        else if(cur - arr[index] > 0){
            res.push(arr[index])
            getcombinations(cur- arr[index] ,arr, index)
        }
        else if(cur - arr[index] < 0){
            getcombinations(cur ,arr, index + 1)
        }
    }
    getcombinations(num, arr, 0)
    return res
}

// console.log(q14(46,[25, 10, 5, 2, 1]))

//Question 15
function q15(b, n){
    return b ** n
}

// console.log(q15(2,9))


//Question 16

function q16(str) {
    let res = '';
    let unique = {};

    for (let letter of str) {
        if (!unique[letter]) {
            unique[letter] = 1;
            res += letter;
        }
    }

    return res
}

// console.log(q16('thequickbrownfoxjumpsoverthelazydog'));

//Question 17
function q17(str){
    let map = {};
    for (let letter of str){
        map[letter] = (map[letter] || 0) + 1
    }
    return map
}
// console.log(q17('thequickbrownfoxjumpsoverthelazydog'))

//Question 18
function q18(arr,tar){
        let start = 0;
        let end = arr.length - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] === tar) {
                return mid;
            } else if (arr[mid] < tar) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return -1;
}

//Question 19
function q19(num, arr){
    return arr.filter((a =>{
        return a > num
    }))
}

// console.log(q19(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//Question 20
function q20(num){
        const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < num; i++) {
            result += str[Math.floor(Math.random() * str.length)];
        }
        return result;
}

// console.log(q20(10))

//Question 21
function q21(arr, num){
        const result = [];

        function dfs(current, start) {
            if (current.length === num) {
                result.push(current.slice());
                return;
            }

            for (let i = start; i < arr.length; i++) {
                current.push(arr[i]);
                dfs(current, i + 1);
                current.pop();
            }
        }

        dfs([], 0);
        return result;
}

    // console.log(q21([1, 2, 3], 2));


//Question 22
function q22(str, char){
    let map = {}
    for(let letter of str){
        map[letter] = (map[letter] || 0) + 1
    }
    return map[char]
}

// console.log(q22( 'microsoft.com', 'o' ))

//Question 23
function q23(str){
    let map = {}
    for(let letter of str){
        map[letter] = (map[letter] || 0) + 1
    }
    for (let letter of str){
        if(map[letter] === 1){
            return letter
        }
    }
}
// console.log(q23( 'abacddbec'))

//Question 24
function q24(arr){
    for (let i in arr) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// console.log(q24([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//Question 25
function q25(list){
    return list.sort((a,b) =>{
        return b.length - a.length
    })[0]

}
// console.log(q25(["Australia", "Germany", "United States of America"]))

//Question 26
function q26(str){
        let left = 0, right = 0, maxLength = 0;
        const map = new Map();
        let res = ""
        while (right < str.length) {
            if (map.has(str[right])) {
                left = Math.max(left, map.get(str[right]) + 1);
            }
            map.set(str[right], right);
            if (right - left + 1 > maxLength){
                maxLength = right - left + 1
                res = str.slice(left, right + 1)
            }


            right++;
        }
        return res;
}

// console.log(q26("abcdefgfgjlkersjio"))
// console.log(q26("ahjfhruognosrnhoitrhtyh"))

//Question 27
function q27(str) {
    if (!str || str.length < 2) {
        return str;
    }

    let longest = '';
    for (let i = 0; i < str.length; i++) {
        let left = i, right = i;
        while (right < str.length - 1 && str[right] === str[right + 1]) {
            right++;
        }
        while (left > 0 && right < str.length - 1 && str[left - 1] === str[right + 1]) {
            left--;
            right++;
        }
        if (right - left + 1 > longest.length) {
            longest = str.substring(left, right + 1);
        }
    }

    return longest;
}
// console.log(q27("dfgfedcbaabcdefggsfdg"))

//Question 28
function q28cb(num){
    return num * num
}
function q28(cb, arr){
    let res = []
    for(let num of arr){
        res.push(cb(num))
    }
    return res
}
// console.log(q28(q28cb,[1, 2, 3, 4, 5]))

//Question 29
function q29name(){
    console.log("name function")
}

function q29(func){
    return func.name
}

// console.log(q29(q29name))