/*
let name3='john'
var name1='james'
const name2='hello'

console.log(name3,name1,name2);



const superheroes=['iron man', 'spiderman ','captian america'];

console.log(superheroes[superheroes.length-1]);
console.log(`we have ${superheroes.length} super heroes`);


//start
superheroes.shift();
console.log(superheroes);


superheroes.unshift('bat man')
console.log(superheroes);
//to delete a number

superheroes.pop();
console.log(superheroes);


//middle

superheroes.splice(2,1,'Something')
console.log(superheroes);


let fun=function (name="liki") {
    console.log(`hello ${name}`);
    
}

fun('hey boi');


superheroes.forEach(function (superheroes,index) {
    console.log(superheroes);
    console.log(index);
})

for (let index = 0; index < superheroes.length; index++) {
    
    console.log(superheroes[index]);
}

let mytodo=[];

mytodo.push("Eat brekfast");
mytodo.push("go to gym");
mytodo.push("learn react");

mytodo.forEach(function (mytodo,index) {
    console.log(`my ${index +1 } task is to do ${mytodo}`);
})
*/
/*
let myobj={ 
    title:"Video subject",
    author:"liki",
    videoLength: 20,
    videodesc:"sample"
}
let myobj2={ 
    title:"Video subject",
    author:"liki",
    videodesc:"sample"
}

console.log(myobj);

console.log(`New video on ${myobj.title} by ${myobj.author}`);


let change=function(obj) {
    console.log(`video length is ${obj.videoLength}`);
}

change(myobj2);//undefined



//MEETINGS 

let trello={
    day:"monday",
    meetings:0,
    meetdone:0
}

let addmettings=function(todo,meet) {
    todo.meetings=todo.meetings+meet
}

let meetingdone=function(todo,meet) {
    todo.meetdone=meet
}

let reset =function(todo) {
    todo.meetings=0
    todo.meetdone=0
}

let summary=function(todo) {
    let meetings_left
    meetings_left=todo.meetings-todo.meetdone;
    console.log(`you have ${meetings_left} meetings left today`);
}

addmettings(trello,10);
meetingdone(trello,6);
summary(trello);

console.log(trello);


let trello2={
    day:"tuesday",
    meetings:0,
    meetdone:0,
    addmeeeting: function(num) {
        this.meetings=this.meetings+num
    },
    summary:function() {
        return `you have ${this.meetings-this.meetdone} meetings left`
    }
}
trello2.addmeeeting(10);
console.log(trello2.summary());

//Email and pass verification

let email='abc123gmail.com'
let pass='12345'

let userchecker=function (checker)
{
    if( (checker.includes(123)) && (checker.length>6) && (checker.includes('@') ))
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
}
userchecker(email);
*/
//Array of objects

const arr1=[{
    title:"eat bread",
    isdone:"true"
},
{
    title:"go to gym",
    isdone:"false"
},
{
    title:"sleep",
    isdone:"false"
}]

let fun=arr1.findIndex(function(todo,index) {
    return todo.title == "go to gym"
})

console.log(fun);




//Arrow
const hello=(name) => `hello boi ${name}`
console.log(hello('whatsup!'));


let thingsdone=arr1.filter((todo) => todo.isdone === "false")
console.log(thingsdone);


const camera={
    name : "sony",
    price:125335,
    model:"y",
    myfun:function(){ return `price is ${this.price}`}
}

console.log(camera.myfun());

console.log('5' + 5);//55


//maps
let myobj={ 
    title:"Video subject",
    author:"liki",
    videoLength: 20,
    videodesc:"sample"
}
let myobj2={ 
    title:"Video subject",
    author:"liki",
    videodesc:"sample"
}

let users=new Map();

users.set('john',myobj)
users.set('mike',myobj2)

console.log(users);
console.log(users.size);
console.log(users.get('mike'));


for ( const key of users.keys())
{
    console.log(key);
}

