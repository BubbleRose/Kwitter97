//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
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
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  