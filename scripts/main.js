// var myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World!";

// var iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("Yay, I love chocolate ice cream!");
// } else {
//   alert("Awwww, but chocolate is my favorite...");
// }

function multiply(num1, num2) {
	var result = num1 * num2;
	return result;
	// console.log(result);
}
var result1 = console.log(multiply(7, 6));
var result2 = console.log(multiply(100, 120));
var result3 = console.log(multiply(5.5, 6.7));

// document.querySelector("html").onclick = function () {
//     alert("Ouch! Stop poking me!");
// };

var myImage = document.querySelector("img");

myImage.onclick = function () {
	var mySrc = myImage.getAttribute("src");
	if (mySrc === "images/Oracle Client Installer.png") {
		myImage.setAttribute("src", "images/Oracle Net Manager.png");
	}
	else if (mySrc === "images/Oracle Net Manager.png") {
		myImage.setAttribute("src", "images/Oracle Net Manager 2.png");
	}
	else {
		myImage.setAttribute("src", "images/Oracle Client Installer.png");
	}
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
	var myName = prompt("Please enter your name.");
	localStorage.setItem("name", myName);
	myHeading.textContent = "Інструкція по встановленню, " + myName;
}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	var storedName = localStorage.getItem("name");
	myHeading.textContent = "Інструкція по встановленню, " + storedName;
}

myButton.onclick = function () {
	setUserName();
};
