<<<<<<< HEAD
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
=======
function squeeze(string) {
  //Array that will store single letters
  var splitString = string.split(""); //splits the string into an array of letters
  var previousLetter = ""; //variable declaration in the function's namespace
  var singleLettersCollection = splitString.filter(function(letter){
    if(letter != previousLetter){ //tests if the letter is a duplicate
      previousLetter = letter; //update previous letter value
      return letter; //adds letter to singleLettersCollection
    }
  });
  return singleLettersCollection.join(""); //joins the array back into a string
}
>>>>>>> d70e0a0e30c40d42671a5a1986a1a63d89bbf013
