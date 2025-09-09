
var choice = prompt("Welcome to the Perimeter Calculator \n Please enter your choice \n    1.Square \n    2.Rectangle \n    3.Triangle \n    4.Circle \n    5.Parallelogram \n    6.Oval \n    7.Pentagon \n    8.Hexagon \n    9.Octagon \n    10.Rhombus ")
if (choice == '1') {
    var a = prompt("Enter the length of a side-")
    var result = Number(a)*4
    alert("The Perimeter is " + result)
}
if (choice == '2') {
    var a = prompt("Enter the width-")
    var b = prompt("Enter the length-")
    var result = (Number(a)+Number(b))*2
    alert("The Perimeter is " + result)
}
if (choice == '3') {
    var a = prompt("Enter the length of 1st side-")
    var b = prompt("Enter the length of 2nd side-")
    var c = prompt("Enter the length of 3rd side-")
    var result = Number(a) + Number(b) + Number(c)
    alert("The Perimeter is " + result)
}
if (choice == '4') {
    var a = prompt("Enter the radius-")
    var result = 2 *3.14159*Number(a)
    alert("The Circumference is " + result)
}
if (choice == '5') {
    var a = prompt("Enter the length of a side-")
    var b = prompt("Enter the length of base-")
    var result = Number(a) * Number(b)
    alert("The Perimeter is " + result)
}
if (choice == '6') {
    var a = prompt("Enter the length of the Major axis-")
    var b = prompt("Enter the length of the Minor axis-")
    var h = (a - b)**2 / (a + b)**2
    var result = 3.14159 * (a + b) * (1 + (3 * h / (10 + Math.sqrt((4 - 3*h)))))
    alert("The Circumference is " + result)
}
if (choice == '7') {
    var a = prompt("Enter the length of a side-")
    var result = Number(a) * 5
    alert("The Perimeter is " + result)
}
if (choice == '8') {
    var a = prompt("Enter the length of a side-")
    var result = Number(a) * 6
    alert("The Perimeter is " + result)
}
if (choice == '9') {
    var a = prompt("Enter the length of a side-")
    var result = Number(a) * 8
    alert("The Circumference is " + result)
}
if (choice == '10') {
    var a = prompt("Enter the length of a side-")
    var result = Number(a) * 4
    alert("The Perimeter is " + result)
}