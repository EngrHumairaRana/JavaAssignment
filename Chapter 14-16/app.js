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

