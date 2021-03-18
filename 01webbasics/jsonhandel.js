const student={
    name:'liki',
    age:20,
    isactive:true
}

const studentobjtostring= JSON.stringify(student)
console.log(typeof(studentobjtostring))

//localStorage.setItem('student',studentobjtostring)
const tojson=JSON.parse(studentobjtostring)
console.log(typeof(tojson))

console.log(tojson.age)