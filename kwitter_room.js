//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBSiOa1BFMjcMrSfgQtS4pmw29J9QV9Yuk",
    authDomain: "kwitter-5a366.firebaseapp.com",
    databaseURL: "https://kwitter-5a366-default-rtdb.firebaseio.com",
    projectId: "kwitter-5a366",
    storageBucket: "kwitter-5a366.appspot.com",
    messagingSenderId: "911297189717",
    appId: "1:911297189717:web:08484d37f8c3f4b520c1dc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();