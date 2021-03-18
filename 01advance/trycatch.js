const converti=(dollors)=>
{   if(typeof dollors === 'number')
{
    dollors*64
}else{
    throw Error('ammtttttttt')
}
}

try{
    const myva=converti('five')
    console.log(myva)
}catch(error)
{
    console.log(error)
}