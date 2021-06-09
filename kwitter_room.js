var firebaseConfig = {
    apiKey: "AIzaSyBOH5aujY-eIzEBLDzVPxnpiPy4A8nIV5Q",
    authDomain: "emarald-and-ruby-d1c17.firebaseapp.com",
    databaseURL: "https://emarald-and-ruby-d1c17-default-rtdb.firebaseio.com",
    projectId: "emarald-and-ruby-d1c17",
    storageBucket: "emarald-and-ruby-d1c17.appspot.com",
    messagingSenderId: "1034709602018",
    appId: "1:1034709602018:web:6c3494d4e61712c084d8bb"
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



