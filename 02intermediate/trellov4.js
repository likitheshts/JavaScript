const tdos=['buy bread','go to gym','record videos']

console.log(tdos.indexOf('buy bread'))


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

const index=mytodo.findIndex(function(todo,index){
    return todo.tite === 'man'
})
console.log(index)




const todosss= function(anytod,tite){
    const to=anytod.findIndex(function(todo,index)
    {
        return todo.tite.toLowerCase() === tite.toLowerCase()
})
return anytod[to]
}

let printme=todosss(mytodo,'man')
console.log(printme)