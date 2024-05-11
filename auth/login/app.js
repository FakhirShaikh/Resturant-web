let login_email = document.getElementById("email")
let login_password = document.getElementById("password")
var password_eye = document.getElementById('password-eye');

async function loginAccount(){

  if (login_email.value ==="") {
    Toastify({

      text: "add email first",

      duration: 3000

    }).showToast();


  }
  else if (login_password.value === "") {
    Toastify({

        text: "add password first",
    
        duration: 3000
    
      }).showToast();
    }
    else {
      await firebase.auth().signInWithEmailAndPassword(login_email.value,login_password.value)
      .then(async (snap) => {
        //   console.log(snap.user.uid)
        let userId = snap.user.uid

        await firebase.database().ref("users").child(userId).get()
          .then((snapshot) => {
            // console.log(snapshot.val())
            if (snapshot.val() != undefined && snapshot.val()["userType"]=="user") {
              // console.log("user panel")              
              Toastify({
                text: "login",
                duration: 3000
                
              }).showToast();
              window.location.replace("../../user panel/home/index.html")
            }
           else if (snapshot.val() != undefined && snapshot.val()["userType"]=="admin") {
              // console.log("admin panel")
              Toastify({              
                text: "login",
                
                duration: 3000
              }).showToast();
              window.location.replace("../../admin panel/dashboard/index.html")
            }
            
          })
        })
        
        .catch((e) => {
          // console.log(e.code)
          Toastify({
            
            text: e.code,
            
            duration: 3000
            
          }).showToast();
          
        })
      
      

    }
  }
  
  password_eye.onclick = function () {



    if (password_eye.classList.contains('fa-eye-slash')) {
  
      this.classList.toggle('fa-eye');
      this.classList.toggle('fa-eye-slash');
  
      login_password.setAttribute('type', 'text');
    } else {
  
  
      login_password.setAttribute('type', 'password');
  
      this.classList.toggle('fa-eye-slash');
      this.classList.toggle('fa-eye');
  
    };
  }