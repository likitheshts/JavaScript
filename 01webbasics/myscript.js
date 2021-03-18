//const mpele=document.querySelectorAll('p')
//mpele.forEach((p)=>p.remove())


const mynewele=document.createElement('p')

mynewele.textContent='added via js'

document.querySelector('body').appendChild(mynewele)

document.querySelector('button').addEventListener('click',(event)=>{
    event.target.textContent='i was clicked'
})

//track input form
document.querySelector('#myform').addEventListener('change',(event)=>{
    console.log(event.target.value)
})