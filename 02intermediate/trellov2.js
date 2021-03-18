let trl={
    day:'monday',
    metting1:0,
    mettingdone:0,
}

let addmettings=function(todos,meet=0)
{
    todos.meeting1= todos.metting1 + meet
}

let meetdone=function(todos,meet=0)
{
    todos.mettingdone=todos.mettingdone-meet
}

let resetday=function(todos)
{
    todos.meeting1=0
    todos.mettingdone=0
}

let summary=function(todos)
{
    let meetleft=todos.metting1 + todos.mettingdone
    console.log(`still there are ${meetleft}`)
}


addmettings(trl,8)


meetdone(trl,1)
console.log(trl)
summary(trl)