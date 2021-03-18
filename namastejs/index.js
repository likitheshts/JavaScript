/*
console.log(x);
console.log(getName2)
getName2();
var x=10;
function getName2(){
    console.log("namaste js");
}
getName=()=>{
    console.log("namaste js");
}

*/
/*var x=1;
a();
b();

console.log(x);
function a() {
var x=10;
console.log(x);    
}
function b(){
    var x=100;
    console.log(x);
}*/
/*function a() {
    c();
    console.log(b)
    function c(){
    console.log(b)

    }
}
var b=10
a();*/
/*function a()
{
    var b=10;
    c();
    function c() {
        console.log(b);
        
    }
}
a();*/
/*let a=10;
var b=100;
console.log(a);*/

/*function x() {
    var a=7;
    function y(){
        console.log(a);
    }
    y();
}
x();*/


//CLOSURES
/*
function x()
{
    var a=10;
   return function y()
    {
        console.log(a);
    }
    y();
}

x();


var z=x();
console.log(x);
z();

*/

//setTimeout
/*
function x()
{
    for(let i=1;i<=5;i++)
    {
        setTimeout(() => {
            console.log(i);
        },i*1000 );
    }
    console.log("namaste js");
}
x();
*/
/*
console.log(a)//undefined
let x=10;
var a=10;
console.log(x);//10
*/

/*
//function statement aka func declaration 
a();
function a()
{
    console.log("a is called");
}
a();


//function expresion
b();//error because of hoisting
var b=function sample() {
    console.log("b called");
}
b();


//anonymous function
var b=function () {
    console.log("hello");
}

//named function expression 

var b=function a() {
    console.log("named function");
}

b();//named function
a();//ERROR 


//parameters vs arguments

function a(parameters)
{
    //parametes local variables
}


a(arguments);


//first class functions

//The ability to use functions as values known as first class functions

//Arrow function

*/

/*
//Call back function
setTimeout(() => {
    console.log("timer");
}, 5000);

function x(y)
{
    console.log("x");
    y()
}
x(function y() {
    console.log("y");
})

*/
/*

//Event Listeners
function attach()
{
let count=0;
document.getElementById("clickme")
.addEventListener("click",function xyz() {
    console.log("button clicked",count++);
})
}
attach();

*/
