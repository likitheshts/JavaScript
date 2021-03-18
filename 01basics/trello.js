const days=['mon','tue','wed','thu','fri','sat','sun']

console.log(days)

days.forEach(function(day,index)
{
    console.log(`starts with ${index+1} - ${day}`)
})

for(let index=days.length-1;index>=0;index--)
{

    console.log(days[index])
}



let todos=[]
todos.push('have breakfast')
todos.push('use phone')
todos.push('sleep')
todos.push('repeat')


todos.forEach(function(any,index)
{
    console.log(`your daily routine is ${index+1} -> ${any}`)
}
)