// ##filterLongWords.js
// Hardcode an array of words. Have a variable maxLength, push words that are less than the maxLength into a new array, and console.log that.

var words = ["dog", "cat", "bird", "chicken", "lego", "hi"]
var maxLength = 4;
var newArray = [];

for(var i=0; i<words.length; i++) {
	if(words[i].length <maxLength) {
		newArray.push(words[i])
	}
}

console.log(newArray);