var john={
    name:"i am john",
    age:24,
    isactive: true
}

var samy={
    name:"i am samy",
    age:18,
    isactive: true
}

var mike={
    name:"i am mike",
    age:30,
    isactive: false
}

let users = new Map()

users.set('jhon',john)
users.set('sam',samy)
users.set('miky',mike)
console.log(users.size)
console.log(users.get('sam'))
console.log(users.keys())

for (const key of users.keys()) {
    console.log(key)
    
}

for(const [key , value] of users.entries())
{
    console.log(key+'='+value.name)
}