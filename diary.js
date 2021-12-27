var firebaseConfig = {
    apiKey: "AIzaSyDVaaP7aFN3-_n74QlrHgxRS_bC-iqVbLw",
    authDomain: "my-personal-diary-b32aa.firebaseapp.com",
    databaseURL: "https://my-personal-diary-b32aa-default-rtdb.firebaseio.com",
    projectId: "my-personal-diary-b32aa",
    storageBucket: "my-personal-diary-b32aa.appspot.com",
    messagingSenderId: "17901988124",
    appId: "1:17901988124:web:01cb33f5adf06bde2472d9"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


function Diary(){
    window.location = "new.html";
    user_passcode = document.getElementById("user_passcode").value
    localStorage.setItem("user_passcode", user_passcode)
    }
function submit() {
    var date = document.getElementById("date").value
    var content = document.getElementById("content").value
    passcode= document.getElementById("user_passcode").value
    var userPasscode = localStorage.setItem("user_passcode",passcode)
    firebase.database().ref(userPasscode).push({
        date: date,
        content: content
    });
    }




