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