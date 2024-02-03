// Print odd numbers in an array
(function() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     var oddNumbers = numbers.filter(function(num) {
      return num % 2 !== 0;
    });
  
    console.log(oddNumbers);
  })();



//   Sum of all numbers in an array
(function() {
    var numbers = [1, 2, 3, 4, 5];
    
    var sum = numbers.reduce(function(total, num) {
      return total + num;
    }, 0);
  
    console.log("The sum of all numbers in the array is:", sum);
  })();

  

  //   Return all the prime numbers in an array
(function() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    var primeNumbers = numbers.filter(function(num) {
      if (num <= 1) return false;
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    });
  
    console.log("The prime numbers in the array are:", primeNumbers);
  })();
  


  //   Return all the palindromes in an array
  (function() {
    var strings = ["level", "madam"]
    
    var palindromes = strings.filter(function(str) {
      var cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
      return cleanStr === cleanStr.split('').reverse().join('');
    });
  
    console.log("The palindromes in the array are:", palindromes);
  })();



// Return median of two sorted arrays of the same size.
(function() {
    var arr1 = [1, 3, 5, 7, 9];
    var arr2 = [2, 4, 6, 8, 10];
    
    var mergeArrays = function(arr1, arr2) {
      var merged = [];
      var i = 0;
      var j = 0;
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
          merged.push(arr1[i]);
          i++;
        } else {
          merged.push(arr2[j]);
          j++;
        }
      }
      // Merge remaining elements from both arrays
      while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
      }
      while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
      }
      return merged;
    };
  
    var mergedArray = mergeArrays(arr1, arr2);
  
    var medianIndex = Math.floor(mergedArray.length / 2);
    var median;
    if (mergedArray.length % 2 === 0) {
      median = (mergedArray[medianIndex - 1] + mergedArray[medianIndex]) / 2;
    } else {
      median = mergedArray[medianIndex];
    }
  
    console.log("the merged array is:", median);
  })();

  




//   Remove duplicates from an array
(function() {
    var array = [1, 2, 3, 4, 2, 3, 5, 6, 6, 7, 8, 8, 9];
    
    var uniqueArray = array.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  
    console.log("Array with duplicates", uniqueArray);
  })();

  


//   Rotate an array by k times
(function() {
    var array = [1, 2, 3, 4, 5];
    var k = 2;
    
    var rotateArray = function(arr, k) {)
      k = k % arr.length;
      if (k < 0) k += arr.length;
      var rotated = arr.slice(k).concat(arr.slice(0, k));
      
      return rotated;
    };
    
    var rotatedArray = rotateArray(array, k);
    console.log("Rotated array:", rotatedArray);
  })();
  

  

