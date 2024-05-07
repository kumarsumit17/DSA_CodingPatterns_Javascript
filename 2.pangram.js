// Problem Statement: 
// A pangram is a sentence where every letter of the English alphabet appears at least once.
// 
// Given a string sentence containing English letters (lower or upper-case), return true if sentence is a pangram, or false otherwise.
// 
// Note: The given sentence might contain other characters like digits or spaces, your solution should handle these too.
// 
// Example 1:
// 
// Input: sentence = "TheQuickBrownFoxJumpsOverTheLazyDog"
// Output: true
// Explanation: The sentence contains at least one occurrence of every letter of the English alphabet either in lower or upper case.
// Example 2:
// 
// Input: sentence = "This is not a pangram"
// Output: false
// Explanation: The sentence doesn't contain at least one occurrence of every letter of the English alphabet.
// Constraints:
// 
// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.

"use strict";
// Approach 1: Brute Force. Time Complexity: O(n), where n is the length of the input string. Space Complexity: O(1), constant space independent of string length.

// Function to check if given sentence is pangram
const checkIfPangram = (sentence) => {
    
    // Create a set to store unique characters
    let seen = new Set();

    // Convert sentence to lowercase and iterate over each character
    for (const currChar of sentence.toLowerCase()) {
      if (currChar.match(/[a-z]/i)) { // If it an alphabet
        // Add the character to set
        seen.add(currChar);
      }
    }

    // Return true if set size is 26 (total number of alphabets)
    return seen.size === 26;
}
  


// Test case 1: "TheQuickBrownFoxJumpsOverTheLazyDog"
// Expected output: true
console.log(checkIfPangram("TheQuickBrownFoxJumpsOverTheLazyDog"));

// Test case 2: "This is not a pangram"
// Expected output: false
console.log(checkIfPangram("This is not a pangram"));

// Test case 3: "abcdef ghijkl mnopqr stuvwxyz"
// Expected output: true
console.log(checkIfPangram("abcdef ghijkl mnopqr stuvwxyz"));

// Test case 4: ""
// Expected output: false
console.log(checkIfPangram(""));

// Test case 5: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// Expected output: true
console.log(checkIfPangram("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));





