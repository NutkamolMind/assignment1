let text1 = "Hello";
let text2 = "My name is 'Nutkamol'";
let text3 = 'Nice to meet you "student grirl"';
document.getElementById("ex8-1").innerHTML =
text1 + "<br>" + 
text2 + "<br>" + 
text3;
 
//Ex8.2 Numbers 
let x1 = 34.00;
let x2 = 34;
let x3 = 3.14;
document.getElementById("ex8-2").innerHTML =
x1 + "<br>" + x2 + "<br>" + x3;
 
//Ex8.3 Arrays
const cars = ["strawberry","chocolate","vanilla"];
document.getElementById("ex8-3-1").innerHTML = cars[0];
document.getElementById("ex8-3-2").innerHTML = cars[1];
document.getElementById("ex8-3-3").innerHTML = cars[2];
 
//Ex8.4 Objects
const person = {
    firstName : "Nutkamol",
    lastName  : "Hoisang",
    age       : 19,
    eyeColor  : "black"
  };
document.getElementById("ex8-4").innerHTML =
person.firstName + " " + person.lastName + " is " + person.age + " years old.";
 
//Ex8.5 Check Types of Strings and Numbers
document.getElementById("ex8-5").innerHTML = 
typeof "Student girl" + "<br>" +
typeof 3.14 + "<br>" +
typeof (3.14);
 
//Ex8.6 Undefined Variable
let var1 = "strawberry" + " X" + (3 + 4);
let var2;
let var3 = "";
document.getElementById("ex8-6-1").innerHTML = var1;
document.getElementById("ex8-6-2").innerHTML = var2 + "<br>" + typeof var2;
document.getElementById("ex8-6-3").innerHTML = "var3 is "+ var3 + "<br>" + typeof var3;
let var4 = "vanilla";
document.getElementById("ex8-6-4").innerHTML = "var4 is "+ var4 + "<br>" + typeof var4;