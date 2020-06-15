// Chapter 01

// Task 1
alert("Hello! ")

// Task 2
alert("Error! Pease enter a valid password.")

// Task 3
alert("Welcome to JS Land...\nHappy Coding!")

// Task 4 
alert("Welcome to JS Land...")
alert("Happy Coding!")

// Task 5
alert("Hello... I can run JS through my web browser's console")

// Chapter 02

// Task 1
var username;

// Task 2
var myName = "Humaira Rana";

// Task 3
var message = "Hello World";
alert(message);

// Task 4
var name = "Jhone Doe";
var age = 15;
alert(name);
alert(age + " years old")
alert("Certified Mobile Application Development");

// Task 5
var str = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(str);

// Task 6
var email = "engr.humairarana@gmail.com";
alert("My email address is " + email);

// Task 7
var book = "A smarter way to learn JavaScript";
alert(book);

// Task 8
document.write("Yah! I can write HTML content through JavaScript")

// Task 9
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);

// Chapter 3

// Task 1
var age = 15;
alert("I am " + age + " years old");

// Task 2 (Incomplete)
// var visits = GetCookie("visitcounter")
var visits = 14;
alert("You have visited this site " + visits + " times")

// Task 3
birthYear = 1993;
document.write("My birth year is " + birthYear );
document.write("<br>");
document.write("Data type of my declared vaiable is " + typeof birthYear  );

document.write("<br> <br>")

// Task 4
 var name = "John Doe";
 var product = "T-shirt";
 var quantity = 5;
document.write(name + " ordered " + quantity +" "+ product + "(s)" + " on XYZ Clothing store")

// Chapter 4
// Task 1
var x,y,z;

// Task 2
//  Legal Variables
var legal, _abc, name, str, address; 

// Illegal Variables
var  x 1, var, alert, +1, 12abc; 

// Chapter 5
// Task 1
var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");
var sum = (+num1) + (+num2);
document.write("Sum of " + num1 + " and " + num2 + " is " + sum);
document.write("<br>");

// Task 2
var sub = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub);
document.write("<br>");

var mul = num1*num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " + mul);
document.write("<br>");

var div = num1/num2;
document.write("Division of " + num1 + " and " + num2 + " is " + div);
document.write("<br>");

var mod = num1%num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " + mod);
document.write("<br> <br>");

// Task 3
var num;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: "+ num + "<br>");
num = num + 1;
document.write("Value after increment is: " + num + "<br>");
num = num + 7;
document.write("Value after addition is: "+ num + "<br>");
num = num - 1;
document.write("Value after decrement is: "+ num + "<br>");
num = num % 3;
document.write("The remainder is: "+ num + "<br>");

document.write("<br>");

// Task 4
var cost = 600;
var tickets = 5;
var totalCost = cost*tickets;
document.write("Total cost to buy " + tickets + " tickets to a movie is " + totalCost + "PKR <br>");
document.write("<br>");

// Task 5
var table = 4;
document.write("Table of " + table + "<br>");
for (i= 1 ; i<=10; i++){
    document.write(table + " * " + i + " = " + (table*i)+"<br>");
}
document.write("<br>")

// Task 6
var tempC = 25;
var tempF = (tempC * 9/5) + 32;
document.write(tempC + "\u00B0C is " + tempF + "\u00B0F"+ "<br>");
var temp_F = 70;
var temp_C = (temp_F - 32) * 5/9;
document.write(temp_F + "\u00B0F is " + temp_C + "\u00B0C"+ "<br>");
document.write("<br>");

// Chapter 6-9
// Task 1
var a = prompt ("Enter a number: ");
document.write("Result: <br>");
document.write("The value of a is: "+a+"<br>");
document.write("...............................<br>");
document.write("The value of ++a is: "+ ++a + "<br>");
document.write("Now the value of a is: "+ a + "<br>");

document.write("<br>");

document.write("The value of a++ is: "+ a++ + "<br>");
document.write("Now the value of a is: "+ a + "<br>");

document.write("<br>");

document.write("The value of --a is: "+ --a + "<br>");
document.write("Now the value of a is: "+ a + "<br>");

document.write("<br>");

document.write("The value of a-- is: "+ a-- + "<br>");
document.write("Now the value of a is: "+ a + "<br>");
document.write("<br>")

// Task 2
var a = 2, b = 1;
document.write("a is "+ a +"<br>");
document.write("b is "+b+"<br>");
var result = --a;
document.write("--a is "+ result + "<br>");

document.write("<br>");
document.write("Now a is "+ a + "<br>");
document.write("Now b is "+ b + "<br>");
var result = result - --b;
document.write("--a - --b is "+ result  + "<br>");

document.write("<br>");
document.write("Now a is "+ a + "<br>");
document.write("Now b is "+ b + "<br>");
var result = result + ++b;
document.write("--a - --b + ++b is "+ result  + "<br>");

document.write("<br>");
document.write("Now a is "+ a + "<br>");
document.write("Now b is "+ b + "<br>");
var result = result + b--;
document.write("--a - --b + ++b + b-- is "+ result  + "<br>");
document.write("<br>");

// Task 3
var name = prompt("Enter your name: ");
document.write("Greetings! "+ name);
document.write("<br> <br>")

// Task 5
var table = +prompt ("Enter a number for table: ");
if (table == 0){
    table = 5;
}
for (i=1; i<=10; i++){
    document.write(table + " * "+ i + " = " + table*i + "<br>");
}
document.write("<br>");

// Chapter 9-11
// Task 1
var city  = prompt("Enter City: ");
if (city === "Karachi" || city === "karachi" || city === "KARACHI"){
    document.write("Welcome to the city of lights <br>");
}


// Task 2
var gender = prompt("Enter gender");
if (gender === "Male" || gender === "male" || gender === "MALE"){
    document.write("Good Morning Sir <br>");
}
else if (gender === "Female" || gender ==="female" || gender ==="FEMALE"){
    document.write("Good Morning Ma'am <br>");
}

// Task 3
var color = prompt("Enter color of traffic signal");
if (color === "Red"){
    document.write("Must Stop <br>");
}
else if (color === "Yellow"){
    document.write("Ready to move <br>");
}
else if (color === "Green"){
    document.write("Move now <br>");
}

// Task 4
var fuel = +prompt("Enter remaining fuel");
if (fuel < 0.25){
    document.write("Please refill the fuel in your car");
}

// Task 5a (message displayed)
var a=4;
if (++a === 5){
    alert("given condition for variable a is true");
}

// Task 5b (message not displayed)
var b=82;
if(b ++=== 83){
    alert("given condition for variable b is true");
}

// Task 5c 
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
// Output: Condition 2 is true and condition 4 is true

// Task 5d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// Output : message displayed

// Task 5e
if (true){
    alert("True");
}
if (false){
    alert("False");
}
// Output: True

// Task 5f
if("car" < "cat"){
    alert("car is smaller than cat");
}
// Output: The message displayed

// Task 7
var secret = 4;
var guess = +prompt("Guess the secret number");
if (secret === guess){
    document.write("<br>Bingo! Correct answer <br>");
}
else if(guess === secret+1){
    document.write("<br>Close enough to the correct answer<br> ");
}

// Task 8
var number = +prompt("Enter a number");
if (number%3 === 0){
    document.write("<br>The number is divisible by 3<br>");
}

// Task 9
var numCheck = +prompt("Enter a number (even/odd)");
if (numCheck % 2 === 0){
    document.write("<br>The number is even<br>");
}
else {
    document.write("<br>The number is odd<br>");
}

// Task 10
var temp = +prompt("Enter temperature");
if (temp > 40){
    document.write("<br> It is too hot outside<br> ");
}
else if (temp > 30){
    document.write("<br> The weather today is normal ");
}
else if (temp > 20){
    document.write("<br> Today's Weather is cool");
}
else if (temp > 10){
    document.write("<br> OMG! Today's Weather is so cool");
}

// Chapter 12-13
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

// Chapter 14-16
// Task 1
var array1 = [];
var array2 = new Array ();
var stringArray = "Array";
var numbersArray = [1, 2, 3];
var booleanArray = [true, false];
var mixedArray = [1, 'one', true];
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
for (i=1; i<=8; i++){
    document.write(i+") "+qualifications[i-1]+"<br>");
}
document.write("<br>");

// Task 2
var names = ['Michael', 'John', 'Tony'];
var scores = [320, 230, 480];
var per = [320/500*100, 230/500*100, 480/500*100];
for (i=0; i<=2; i++){
    document.write("Score of "+ names[i] + " is " + scores[i]+ ". Percentage: " + per[i] +"%"+ "<br>");
}
document.write("<br>");

// Task 3
var colors = ["red", "blue", "green", "white", "black"];
document.write(colors + "<br>");
var colorStart = prompt("Which color do you want to add in the beginning");
colors.unshift(colorStart);
document.write(colors + "<br>");

var colorEnd = prompt("Which color do you want to add in the end");
colors.push(colorEnd);
document.write(colors + "<br>");

colors.unshift("purple", "brown");
document.write(colors + "<br>");

colors.shift();
document.write(colors + "<br>");

colors.pop();
document.write(colors + "<br>");

var indexAdd = prompt("Where do you want to add the next color");
var colorName = prompt("What is the color name");
colors.splice(indexAdd,0, colorName );
document.write(colors + "<br>");

var indexRemove = prompt("Where do you want to remove the color");
var colorCount = prompt("How many colors to remove");
colors.splice(indexRemove, colorCount);
document.write(colors + "<br>");

document.write("<br>");


//Task 4 
var scores = [320, 230, 480, 120];
document.write("Scores of Students: "+scores+"<br>");
scores.sort();
document.write("Ordered Scores of Students: "+scores+"<br>");

document.write("<br>");

// Task 5
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var newCity = cities.slice(2,4)
document.write(newCity + "<br>")
document.write("<br>");

// Task 6
var arr = ["This", " is", " my", " cat"];
var newarr = arr.join();
document.write("Array:" + "<br>")
document.write(newarr + "<br>")
document.write("String:" + "<br>")
document.write(arr[0]+arr[1]+arr[2]+arr[3] + "<br>")
document.write("<br>");

// Task 7
var arrayDevices = [];
arrayDevices.push("keyboard");
arrayDevices.push("mouse");
arrayDevices.push("printer");
arrayDevices.push("monitor");
document.write("Devices: <br>");
document.write(arrayDevices);
document.write("<br>");

for (i=1; i<=4; i++){
    document.write("Out:<br>");
    document.write(arrayDevices.shift()+"<br>"); 
}
document.write("<br>");

// Task 8
var arrayDevices = [];
arrayDevices.push("keyboard");
arrayDevices.push("mouse");
arrayDevices.push("printer");
arrayDevices.push("monitor");
document.write("Devices: <br>");
document.write(arrayDevices);
document.write("<br>");

for (i=1; i<=4; i++){
    document.write("Out:<br>");
    document.write(arrayDevices.pop()+"<br>"); 
}
document.write("<br>");

// Chapter 17-20
// Task 1
var array2d = [[],[],[]];

// Task 2
var arraynum = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1],
]

// Task 3
for (i=1; i<=10; i++){
    document.write(i+"<br>");
}
document.write("<br>");

// Task 4
var table = prompt("Enter a number to show its multiplication table");
var length = prompt("Enter length of mutiplication table");
document.write("Multiplication table of "+table+"<br>");
document.write("Length "+length+"<br>");
document.write("<br>");
for(i=1;i<=10;i++){
    document.write(table+" x "+i+" = "+(table*i)+"<br>")
}
document.write("<br>");

// Task 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (i=0; i<=4; i++){
    document.write(fruits[i]+"<br>");
}
document.write("<br>");

for (i=0; i<=4; i++){
    document.write("Element at index "+i+ " is "+fruits[i]+"<br>");
}
document.write("<br>");

// Task 6
document.write("<br>Counting: <br>");
document.write("<br>");

for (i=1; i<=15; i++){
    document.write(i + ",");
}
document.write("<br>");

document.write("<br>Reverse Counting: <br>");
document.write("<br>");

for (i=10; i>=1; i--){
    document.write(i + ",");
}
document.write("<br>");

document.write("<br>Even: <br>");
document.write("<br>");

for (i=0; i<=20; i+=2){
    document.write(i + ",");
}
document.write("<br>");

document.write("<br>Odd: <br>");
document.write("<br>");

for (i=1; i<=19; i+=2){
    document.write(i + ",");
}
document.write("<br>");

document.write("<br>Series: <br>");
document.write("<br>");

for (i=2; i<=20; i+=2){
    document.write(i + "k,");
}
document.write("<br>");

// Task 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var check = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
var count = 0;
for (i=0; i<=4; i++){
    if (check === A[i]){
        document.write("<br>"+check+ " is available at index "+ i+ " in our bakery <br>");
        break;
    }
    count= count+1;
}
if (count === 5){
    document.write("<br> We are sorry."+check+ " is not available in our bakery <br>");
}
document.write("<br>");

// Task 8
var A = [24, 53, 78, 91, 12];
document.write("Array items: "+A+"<br>");
A.sort(function(a, b){return a-b});    // Sort the numbers in the array in ascending order
document.write("The largest number is "+ A[4]+"<br>");
document.write("<br>");

// Task 9
var A = [24, 53, 78, 91, 12];
document.write("Array items: "+A+"<br>");
A.sort(function(a, b){return a-b});    // Sort the numbers in the array in ascending order
document.write("The largest number is "+ A[0]+"<br>");
document.write("<br> <br>");

// Task 10
for (i=5; i<=100; i+=5){
    document.write(i+",");
}



