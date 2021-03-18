let py=new Promise((resolve,reject)=>{
    let a=1+2
    if(a==2)
    {
        resolve('Success')
    }
    else
    {
        reject('Failed')
    }
})

py.then((message)=>{
    console.log('inside then success'+message)
})
.catch((message)=>{
    console.log('inside cztcjh'+message)
})