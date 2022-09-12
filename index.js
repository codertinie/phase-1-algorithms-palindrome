function isPalindrome(word) {
  // Write your algorithm here
  let reversed = word.split("").reverse().join('')
  if (word === reversed){
    return true
  }else{
    return false
  }
}

/* 
  Add your pseudocode here
  if the word(input) is the same as the word in reverse, JS should return true otherwise 
  it should return false
*/

/*
  Add written explanation of your solution here
  split the word into an array
  reverse the array and put it back togeteher
  compare the initialstring to the reversed string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("")

  console.log("Expecting: true");
  console.log("=>", isPalindrome("radar"));
}

module.exports = isPalindrome;
