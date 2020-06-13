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


