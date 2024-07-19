function isPalindrome(word) {
  // Write your algorithm here
  //Converts the word to lowecase
  word = word.toLowerCase();

  let left = 0;
  let right = word.length -1;

  while (left < right) {
    //If letters at left side and right side are different its not a palindrome.
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  //I the loop is over without getting a difference , it is a palindrome
  return true;
  
}

/* 
   
  Add your pseudocode here
1. Convert words to lowercase.
2. Initialize the left and right pointers.
3.While left is less than right,
    .If characters at left and right are different,return false.
    .Increment left pointer.
    .Decrement right pointer.
4.Return true if the loop completes without finding a mismatch.
*/

/*
  Add written explanation of your solution here
  - isPalindrome function takes a word as an input and converts it to lowercase to handle case sensitivity.
  - The two pointers are initialized to point to the respective start and end of the word.
  - isPalindrome function iterates while left is less than right and if the characters are different in both sides, it returns false indicating the word is not palindrome.
  - If the characters are the same after the loop is over it returns true indicating that the word is palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
