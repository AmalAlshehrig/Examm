//sngin 
let username=document.getElementById("username")
let pname=document.getElementById("pname")
let user=document.getElementById("user")
let puser=document.getElementById("puser")
let password=document.getElementById("password")
let ppassword=document.getElementById("ppassword")
let email=document.getElementById("email")
let pemail=document.getElementById("pemail")
let btnUp=document.getElementById("Up")
let btnIn=document.getElementById("In")
let nameRegex = /^[a-zA-Z\-]+$/;
let emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//btn for singup
btnUp.addEventListener('click',()=>{
    // if(name1=='' || password1== '' || email1== '' || user1==''){
    //     alert("Add Your Infromation")
    // }
    if(username.value.length<3){
        pname.innerHTML="Your Name is less then 3"
    }
    if(!nameRegex.test(user.value)){
        puser.innerHTML="User Name is not valid "
    }
   if(password.value.length<4){
        ppassword.innerHTML="Your password is less then 4"
    }
    if(!emailRegex.test(email.value)){
        pemail.innerHTML="Your Email is not valid"
    }
    
  else   { let name1=username.value
    let user1=user.value
    let password1=password.value
    let email1=email.value
        fetch('https://655b0f10ab37729791a87aff.mockapi.io/Users', {
     method: 'POST',
    body: JSON.stringify({
        name1,
        user1,
        password1,
        email1
      }),
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
       },
})
.then((response) => response.json())
.then((json) => 
//console.log(json)
(window.location.href='login.html')
)}
})
