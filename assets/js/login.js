  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCoKg8xLQFiLbQX0Q8psNFl_SFY511Jejw",
    authDomain: "signup-form-323d1.firebaseapp.com",
    projectId: "signup-form-323d1",
    storageBucket: "signup-form-323d1.appspot.com",
    messagingSenderId: "185548010451",
    appId: "1:185548010451:web:c2f9cff126609efa26b526",
    measurementId: "G-6XW09S6PH3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);

  let register = document.getElementById("register")
  let login = document.getElementById("login")
  let emailLogin = document.getElementById("emailLogin")
  let passwordLogin = document.getElementById("passwordLogin")
  let nameRegister = document.getElementById("nameRegister")
  let passwordRegister = document.getElementById("passwordRegister")
  let mailRegister = document.getElementById("emailRegister")

  register.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = nameRegister.value.trim();
    const email = mailRegister.value.trim();
    const password = passwordRegister.value.trim();
    
    createUserWithEmailAndPassword(auth, email , password)
    .then((credentials) =>{
        const user = credentials.user
        console.log("Registerred")
        setDoc(doc(db, 'users', user.uid), {
            username: username,
            email: email
          })
          
    })
    .then(() => {
        alert("Registration successful....")
        register.reset();
        localStorage.setItem('username', username);
        window.location.href = "index.html";
    })
    .catch((error) => {
        alert(error.message)
    })
  })

  login.addEventListener('submit' , (e) => {
    e.preventDefault()

    const email = emailLogin.value.trim();
    const password = passwordLogin.value.trim();

    signInWithEmailAndPassword(auth,email , password)
    .then((credentials) => {
        const user = credentials.user
        alert(`Welcome Back ${user.email}`)
        login.reset()
        localStorage.setItem('username', username);
        window.location.href = "index.html";
    })
    .catch((error) => {
        alert(error.message)
    })
  })
