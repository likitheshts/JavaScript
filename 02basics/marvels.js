const superHeroes=['iron man','spider man','capt.america']
console.log(superHeroes);
console.log(superHeroes[1])
console.log(superHeroes.length)
console.log(superHeroes[superHeroes.length-1])


console.log(`we have ${superHeroes.length}`)

const numbers=['one','two','three','four']
numbers[1]='something'
console.log(numbers)
numbers.shift()
console.log(numbers)
numbers.unshift('some')
console.log(numbers)

numbers.pop()
console.log(numbers)

numbers.splice(2,1,'hey')
console.log(numbers)