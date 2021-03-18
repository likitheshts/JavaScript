let myytvideo1 = {
    title:'loops',
    videolength:'14',
    videdesc:'dfgrgregreg',
    author:"liki"
}

console.log(myytvideo1)

console.log(`hey new video on title by ${myytvideo1.author}`)

myytvideo1.title="heelllllo"
console.log(myytvideo1)


let myytvideo2 = {
    title:'foreach',
    videolength:'20',
    videdesc:'fsgssweee',
    author:"likkdjjjj"
}

let changevideolength=function(muobject){
   return{
       format1: `time is ${muobject.videolength+2}`,
       format2: `time is ${muobject.videolength+4}`

   }
  
}


let ad1=changevideolength(myytvideo1)
console.log(ad1.format2)