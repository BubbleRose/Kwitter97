//YOUR FIREBASE LINKS
var firebaseConfig = {
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) {
             childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
      getData();
//Start code
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }

      function send() {
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name : user_name,
                  message : msg,
                  like:0
                  
            });
            document.getElementById("msg").value = "";

      }
      
//End code
      

