var ul = document.getElementById('lists');
var li;

fetch('https://randomuser.me/api/')
.then((response)=>response.json())

///from here you can include your function
.then((response)=>console.log(response))








.catch((error)=>console.log("Error"))