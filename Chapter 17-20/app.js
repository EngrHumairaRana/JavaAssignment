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