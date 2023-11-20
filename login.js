//login
let user=document.getElementById("user")
let password=document.getElementById("password")
let btnIn=document.getElementById("In")

btnIn.addEventListener('click',()=>{
    fetch('https://655b0f10ab37729791a87aff.mockapi.io/Users')
       .then((response) => response.json())
       .then(data =>data.map(item=>{
        console.log(item.user1)
        if (item.user1 == user.value) {
       window.location.href='index.html'
        }else{
            sessionStorage.setItem('user',user.vale)
            localStorage.setItem()
            console.log("err");
        }
     }))
})

