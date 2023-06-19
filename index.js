// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDkaCVwia9887lntsvLcsOZ_5rRWOc9VxQ",
    authDomain: "transconvo.firebaseapp.com",
    projectId: "transconvo",
    storageBucket: "transconvo.appspot.com",
    messagingSenderId: "957343496060",
    appId: "1:957343496060:web:5511d4437e0792a15bd6f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics=getAnalytics(app);
const auth =getAuth()

//Getting All the objects of html
var email = document.getElementById("Email")
var passwords = document.getElementById("password")

//Making an function for starting data
window.signup=function(e){
    e.preventDefault();
    var obj={
        username: username.value,
        email: email.value,
        passwords: passwords.value
    }

    createUserWithEmailAndPassword(auth, obj.email, obj.passwords)
    .then(function(success){
        alert("Signup Successfully")
        window.location.replace("Home.html")
    })

    .catch(function(err){
        alert("error"+err)
    })
    console.log(obj)
}

//For login
document.getElementById("login").addEventListener("click", function() {
    var email =  document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert(user.email+" Login successfully!!!");
      window.location.replace("Home.html")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
});

//For Interface
const logregBox=document.querySelector('.logreg-box');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');

registerLink.addEventListener("click", ()=>{
    logregBox.classList.add("active");
});
loginLink.addEventListener("click", ()=>{
    logregBox.classList.remove("active");
});

//For Logout
document.getElementById("logout").addEventListener("click", function(){
    signOut(auth).then(()=>{
        console.log("Loggout Successful");
        alert("Log-out successful.");
        document.getElementById("logout").style.display="none";
    }).catch((error)=>{
        console.log("An error happened.");
    });
});