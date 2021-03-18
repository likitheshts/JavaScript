function myvalidation(){
    let myvalue=document.getElementById('myform').value;

    if(isNaN(myvalue) || myvalue<1 || myvalue>20)
    {
        document.querySelector('#idone').textContent='inavlid input'
    }else{
        document.querySelector('#idone').textContent=`you have enetered ${myvalue}`
    }
}


//form validation
document.querySelector('.myform1').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.username.value)
    console.log(event.target.email.value)
    console.log(event.target.pass.value)
    console.log(event.target.pass2.value)
    let passs1=event.target.pass.value;
    let passs2=event.target.pass2.value;
    if(passs1 == passs2)
    {
      document.querySelector('p').textContent='Password  matching'

    }else{
        document.querySelector('p').textContent='Password not matching'
    }
    event.target.username.value=''
    event.target.email.value=''
    event.target.pass.value=''
    event.target.pass2.value=''





})