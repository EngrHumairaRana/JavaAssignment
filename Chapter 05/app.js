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




