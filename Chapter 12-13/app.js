// Task 1
var x = prompt("Enter a character(number/string)");

if (x.charCodeAt(0) >= 65 &&  x.charCodeAt(0)<=90){
    document.write("It is Upper Case Letter")
}
else if (x.charCodeAt(0) >= 97 &&  x.charCodeAt(0)<=122){
    document.write("It is Lower Case Letter")
}
else if (x >= '0' && x<= '9' ){
    document.write("It is Number")
}
document.write("<br>");

// Task 2
var int1 = +prompt("Enter first integer");
var int2 = +prompt("Enter second integer");
if (int1 > int2){
    document.write(int1+ " is greater <br>")
}
else if (int2 > int1){
    document.write(int2 + " is greater <br>")
}
else if (int2 === int1){
    document.write("Both are equal");
}
document.write("<br>");

// Task 3
var number = +prompt("Enter a number (+ve/-ve/0)");
if (number > 0){
    document.write("Number is +ve");
}
else if (number < 0){
    document.write("Number is -ve");
}
else if (number === 0){
    document.write("Number is zero");
}
document.write("<br>");

// Task 4
var char = prompt("Enter a character");
if (char === 'a' || char === 'e'||char === 'i' ||char === 'o'||char === 'u'){
    document.write("True");
}
else {
    document.write("False");   
}
document.write("<br>");

// Task 5
var pass1 = "humaira";
var pass2 = prompt("Enter your password");
if (pass2 === ""){
    alert("Please enter your password");
}
else if (pass2 === pass1){
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password");
}

// Task 6
var greeting; 
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day"; 
}
else{ 
    greeting = "Good evening"; 
}
alert(greeting);

// Task 7
var  time = +prompt("Enter time(24 hour format)");
if (time >= 0000 && time < 1200 ){
    document.write("Good Morning")
}
else if (time >= 1200 && time < 1700 ){
    document.write("Good Afternoon")
}
else if (time >= 1700 && time < 2100 ){
    document.write("Good Evening")
}
else if (time >= 2100 && time < 2359 ){
    document.write("Good Night")
}