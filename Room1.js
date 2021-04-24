var firebaseConfig = {
      apiKey: "AIzaSyAp9wL5V-D8aSfVJvIdG8QOm9dsjkhExYg",
      authDomain: "lets-chat-2bf2f.firebaseapp.com",
      databaseURL: "https://lets-chat-2bf2f-default-rtdb.firebaseio.com",
      projectId: "lets-chat-2bf2f",
      storageBucket: "lets-chat-2bf2f.appspot.com",
      messagingSenderId: "264420179472",
      appId: "1:264420179472:web:1d25b52c3ed6ccb9fcd495"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  User = localStorage.getItem("Username");
  document.getElementById("welcome").innerHTML = "Welcome "+User+"!";
  function rooming()
  {
        Roomname = document.getElementById("Roomname").value;
        firebase.database().ref("/").child(Roomname).update({
              purpose: "adding room in kwitter"
        });

        localStorage.setItem("room", Roomname);
        window.location = "Page.html";

        
  }

  function getData() {firebase.database().ref("/").on('value',
      function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(
            function(childSnapshot) {childKey =
  childSnapshot.key;
   Rooms = childKey;
   //Start code
   console.log("roomname - "+Rooms);
   Row = "<div class='Roomname' id="+Rooms+" onclick='redirect(this.id)'>#"+Rooms+"</div>"
   document.getElementById("output").innerHTML += Row;
   //End code
                  });
            });
      }
  getData();

  function redirect(PS)
  {
      console.log(PS);
      localStorage.setItem("room", PS);

      window.location = "Page.html";
  }

  function logout()
  {
        localStorage.removeItem("Username");
        localStorage.removeItem("room");

        window.location.replace("index.html");
  }
  