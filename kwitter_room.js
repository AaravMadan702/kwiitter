
var firebaseConfig = {
      apiKey: "AIzaSyC3r7C30QL4s6QyNSjIa_mt1GHyhgA5pmU",
      authDomain: "kwitter-3bbad.firebaseapp.com",
      databaseURL: "https://kwitter-3bbad-default-rtdb.firebaseio.com",
      projectId: "kwitter-3bbad",
      storageBucket: "kwitter-3bbad.appspot.com",
      messagingSenderId: "526225811450",
      appId: "1:526225811450:web:c6fa31a969ec04f4212643"
    };
    
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom(){
          room_name = document.getElementById("room_name").value;
          
          firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
          localStorage.setItem("room_name", room_name);
           window.location = "kwitter_page.html";    }

    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      
      localStorage.removeItem("room_name");
      window.location = "index.html";

}
