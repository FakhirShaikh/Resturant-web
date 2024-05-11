let login_btn=document.getElementById("login-btn")
let signup_btn=document.getElementById("signup-btn")

login_btn.addEventListener("click",()=>{
    window.location.href="./auth/login/index.html"
})

signup_btn.addEventListener("click",()=>{
    window.location.href="./auth/signup/index.html"
})
