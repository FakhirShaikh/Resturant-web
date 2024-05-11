let user_name=document.getElementById("name")
let signup_email=document.getElementById("email")
let signup_password=document.getElementById("password")
var password_eye = document.getElementById('password-eye');

// console.log(firebase.auth)
async function createAccount(){
    
    if(user_name.value==0 && signup_email.value==0 && signup_password.value==0 ){
        // console.log("plz fill the input")
        Toastify({

            text: "plz fill the input",
            
            duration: 3000
            
            }).showToast();
             } 
        
    // else{
    //     console.log(signup_email.value)
    //     console.log(signup_password.value)
    //     console.log(user_name.value)
    // }
 await   firebase.auth().createUserWithEmailAndPassword(signup_email.value, signup_password.value)
  .then(async (snap) => {
    //   console.log(snap.user)
    //   console.log(snap.user.uid)
    let userId=snap.user.uid
      
    var object = {
        signup_email:signup_email.value,
        signup_password:signup_password.value,
        user_name:user_name.value,
        userType:"user",
        userId,

    }
    await firebase.database().ref("users").child(userId)
    .set(object)
    window.location.href="../login/index.html"
    Toastify({
        text: "Account created",
        duration: 3000,
        
        }).showToast();
        // Signed in 
        // ...
    })

    .catch((e) => {
        
    Toastify({

        text: e.code,
        
        duration: 3000,

        }).showToast();
    console.log(e)
    // ..
  });

}

password_eye.onclick = function () {



    if (password_eye.classList.contains('fa-eye-slash')) {
  
        this.classList.toggle('fa-eye');
      this.classList.toggle('fa-eye-slash');
  
      signup_password.setAttribute('type', 'text');
    } else {
  
  
      signup_password.setAttribute('type', 'password');
  
      this.classList.toggle('fa-eye-slash');
      this.classList.toggle('fa-eye');
  
    };
  }