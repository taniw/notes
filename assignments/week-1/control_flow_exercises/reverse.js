// ##reverse.js
// Write a program that will take a hardcoded string, and console log the reversed version of it. Use a `for` loop

// `var inputString = "building"`

var inputString = "building"
var result = '';
	
for(var i =inputString.length-1; i>=0; i--) {
	result += inputString[i]
	console.log(result)
}

console.log(result);
