// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// 
// Example 1:
// 
// Input: nums= [1, 2, 3, 4]
// Output: false  
// Explanation: There are no duplicates in the given array.
// Example 2:
// 
// Input: nums= [1, 2, 3, 1]
// Output: true  
// Explanation: '1' is repeating.
// Constraints:
// 
// 1 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9

"use strict"

// Approach 1: Brute force.
const containsDuplicateBrute=(nums)=> {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) { // if any two elements are the same, return true
            return true;
        }
      }
    }
    return false; // if no duplicates are found, return false
  }
const nums1 = [1, 2, 3, 4];
console.log(containsDuplicateBrute(nums1)); // Expected output: false
const nums2 = [1, 2, 3, 1];
console.log(containsDuplicateBrute(nums2)); // Expected output: true
const nums3 = [];
console.log(containsDuplicateBrute(nums3)); // Expected output: false
const nums4 = [1, 1, 1, 1];
console.log(containsDuplicateBrute(nums4)); // Expected output: true

// Time Complexity The algorithm takes O(N^2) where N is the number of elements in the input array. This is because we need to compare each element with all other elements, which takes O(N^2) time. 
// Space Complexity The algorithm takes O(1) time, because we only need a few variables to store the indices, which takes constant space.


/**
 * Approach 2: Using Hash Set, Time Complexity: O(n). In worst case it will be O(N^2), O(n).
*/
const containsDuplicateHashSet = (nums) => {
    const uniqueSet = new Set(); // Use Set to store unique elements
    for (let i = 0; i < nums.length; i++) {
        if (uniqueSet.has(nums[i])) {
            // If the set already contains the current element, return true
            return true;
        }
        uniqueSet.add(nums[i]); // Add the current element to the set
    }
    return false; // Return false if no duplicates found
}


/**
 * Approach 3: Sorting the nums array, Time complexity: O(n*logn). Space Complexity: In place : O(1), not in place: O(n).
*/
const containsDuplicateSorted = (nums) =>{
    nums.sort((a, b) => a - b); // sort the array
    // use a loop to compare each element with its next element
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) { // if any two elements are the same, return true
          return true;
        }
    }
    return false; // if no duplicates are found, return false
}


