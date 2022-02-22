const firebaseConfig = {
    apiKey: "AIzaSyANN-oOh-X1d5y91fHCuprlPDBUG7-sPvg",
    authDomain: "kwitter-f2dc0.firebaseapp.com",
    databaseURL: "https://kwitter-f2dc0-default-rtdb.firebaseio.com",
    projectId: "kwitter-f2dc0",
    storageBucket: "kwitter-f2dc0.appspot.com",
    messagingSenderId: "553313514361",
    appId: "1:553313514361:web:94d6d0302908689532b5a8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}