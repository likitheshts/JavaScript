let grade=function(mymarks=85,totalm=100)
{
    let perc=mymarks/totalm*100;
    console.log(`your perc ${perc}`)
    if(mymarks>=90)
    {
        console.log("your grade is A")
    }
    else if(mymarks>=80)
    {
        console.log("your grade is b")
    }
    else if(mymarks>=70)
    {
        console.log("your grade is c")
    }
    else if(mymarks>=60)
    {
        console.log("your grade is d")
    }
    else if(mymarks>=50)
    {
        console.log("your grade is e")
    }
    else
    {
        console.log("your grade is F")
    }
}
grade();