const hello=(name)=>`name is ${name}`
console.log(hello('liki'))


const mytodo=[{
    tite:'hdllo',
    isdone:false
},
{
    tite:'man',
    isdone:true
},
{
    tite:'ddd',
    isdone:true,
}]

const finddone=mytodo.filter((todo)=> todo.isdone === true)
finddone.forEach(todo=>{console.log(todo.tite)})