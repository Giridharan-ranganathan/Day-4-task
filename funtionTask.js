// Print odd numbers in an array
var odd = [];
function oddFun(arr){
for(var i=0;i<arr.length;i++){
if(arr[i]%2 == 0){
even.push(arr[i]);
}
else{
odd.push(arr[i]);
}
}
return odd;
}
console.log(oddFun([5,6,7,8,9,10,11,12]));

// Convert all the strings to title caps in a string array

var strArray = ["hello world", "goodbye universe", "how are you"];
var titleCaseArray = strArray.map(str => str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
console.log(titleCaseArray);


// sum of all number in an array
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce((total, current) => total + current, 0);
console.log(sum);


// return all the prime number in an array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

var primeNumbers = numbers.filter(num => isPrime(num));
console.log(primeNumbers);


// retun all the palindromes in an array
var exp = ["level","noon"];
var isPalindrome = str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};

var palindromes = exp.filter(str => isPalindrome(str));
console.log(palindromes);


