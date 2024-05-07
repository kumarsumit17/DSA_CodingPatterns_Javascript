/* eslint-disable camelcase */
// Problem Statement:
// Given a string s, reverse only all the vowels in the string and return it.
// 
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
// 
// Example 1:
// 
// Input: s= "hello"
// Output: "holle"
// Example 2:
// 
// Input: s= "AEIOU"
// Output: "UOIEA"
// Example 3:
// 
// Input: s= "DesignGUrus"
// Output: "DusUgnGires"
// Constraints:
// 
// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

// In conclusion, the reverseVowels method has a time complexity of O(n) and a space complexity of O(n), where n is the length of the input string s.

// Approach: Here we use the two pointer approach to loop the character array both from the first and the last.
"use strict";
const reverseVowels=(s)=> {
     // list of vowels in English
    const vowels = "aeiouAEIOU";
    // initialize pointers for start and end of the string
    let first = 0;
    let last = s.length - 1;
    let array = s.split("");

    while (first < last) {
      // increment the start pointer until a vowel is found
      while (first < last && this.vowels.indexOf(array[first]) === -1) {
        first++;
      }
      // decrement the end pointer until a vowel is found
      while (first < last && this.vowels.indexOf(array[last]) === -1) {
        last--;
      }
      // swap the values of first and last if both are vowels
      [array[first], array[last]] = [array[last], array[first]];
      // move the pointers towards the center
      first++;
      last--;
    }

    // return the modified string
    return array.join("");
}
  

// Test Cases: 
const s1 = "hello";
const expected_output1 = "holle";
const actual_output1 = reverseVowels(s1);
console.log("Test Case 1: ", expected_output1 === actual_output1);

const s2 = "DesignGUrus";
const expected_output2 = "DusUgnGires";
const actual_output2 = reverseVowels(s2);
console.log("Test Case 2: ", expected_output2 === actual_output2);

const s3 = "AEIOU";
const expected_output3 = "UOIEA";
const actual_output3 = reverseVowels(s3);
console.log("Test Case 3: ", expected_output3 === actual_output3);

const s4 = "aA";
const expected_output4 = "Aa";
const actual_output4 = reverseVowels(s4);
console.log("Test Case 4: ", expected_output4 === actual_output4);

const s5 = "";
const expected_output5 = "";
const actual_output5 = reverseVowels(s5);
console.log("Test Case 5: ", expected_output5 === actual_output5);
