<<<<<<< HEAD
// write code here
document.querySelector("li").textContent = "first";
document.querySelectorAll("li")[1].textContent = "second";
document.querySelectorAll("li")[3].textContent = "fourth";
=======
var uList = document.querySelector("ul");
var list = uList.getElementsByTagName('li');
var numbers = ["first", "second", "third", "fourth"];
for (var i = 0; i<= list.length; i++) {
	list[i].textContent = numbers[i];
}
>>>>>>> 26f768b0a2fddc807c92a3e616af031c82c01925
