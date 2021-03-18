let username='abcc15'
let pass='1234'


let userchecker = function(mystring)
{
    if((mystring.includes(1234) && (mystring.length > 6)))
    {
        return true
    }
    else{
        return false
    }
}



let passchecker = function(number)
{
    if((number.includes(123)) && (number.length > 8))
    {
        return true
    }
    else{
        return false
    }
}

console.log(userchecker(username))