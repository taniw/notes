// write the function squeeze that will pass the tests...
var squeeze = function(string1) {
// convert string to array
	var array1 = string1.split("");
// iterate through string
		for (i=0; i<array1.length; i++) {
// compare letter_i to letter_i+1
// if the same
		if (array1[i] == array1[i+1]) {
// delete i+1 from the array
			array1[i+1] = ""
		};
	};
	
string2 = array1.join('');
return string2;
};