var x = document.getElementById("myAudio");
var firebaseConfig = {
 apiKey: "AIzaSyBvRTPMptujPMgpkMxKug_tJvTrHLJ-OQM",
 authDomain: "aarav-social-website.firebaseapp.com",
 databaseURL: "https://aarav-social-website-default-rtdb.firebaseio.com",
 projectId: "aarav-social-website",
 storageBucket: "aarav-social-website.appspot.com",
 messagingSenderId: "166484540934",
 appId: "1:166484540934:web:b8537b2df3dec274ce8d87",
 measurementId: "G-2PWDBM3YKJ"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
 msg = document.getElementById("msg").value;
 time = document.getElementById("ct").innerHTML;
 msgWithTime = msg + "<br><h6 id='myTime'>" + time + "</h6>";
 firebase.database().ref(room_name).push({
  name: user_name,
  massage: msgWithTime,
  like: 0,
  cowntent: null
 });
 document.getElementById("msg").value = "";
 document.getElementById("myAudio").play();
 time = document.getElementById("ct").innerHTML;
}
function getData() {
 firebase.database().ref("/" + room_name).on('value', function (snapshot) {
  document.getElementById("output").innerHTML = "";
  snapshot.forEach(function (childSnapshot) {
   childKey = childSnapshot.key;
   childData = childSnapshot.val();
   if (childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['massage'];
    like = message_data['like'];
    commit = message_data['cowntent']
    time = document.getElementById("ct").innerHTML;
    name_with_tag = "<hr><h4 id='NameCss'> " + name + " 📥<!--<img class='user_tick' src='tick.png'>--></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "<br><h6>" + "</h6></h4>";
    like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button></div>";
    commit_with_tag = "<h6><input class='"+firebase_message_id+"'><button ></button></h6>";
    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
    playDoorBellDingDongSound();
   }
  });
 });
}

getData();

function updateLike(message_id) {
 console.log("clicked on button - " + message_id);
 button_id = message_id;
 likes = document.getElementById(button_id).value;
 update_likes = Number(likes) + 1;
 console.log(update_likes);
 firebase.database().ref(room_name).child(message_id).update({
  like: update_likes
 });
}

function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location.replace("index.html");
}

function playDoorBellDingDongSound() {
 window.onload = function () {
  document.getElementById("myAudio").play();
 }
}

function display_c() {
 var refresh = 1000;
 mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
 var y = new Date()
 document.getElementById('ct').innerHTML = y;
 display_c();
}
upSend.onchange = (evt) => {
 const [file] = upSend.files;
 if (file) {
  var missy = URL.createObjectURL(file);
  document.getElementById("msg").value = "<img src='" + missy + "'>";
 }
};
//selfi app
Webcam.set({
 width: 360,
 height: 250,
 image_format: 'jpeg',
 jpeg_quality: 90
});
var camera = document.getElementById("cam");

function picFunn() {
 Webcam.attach(camera);
 setTimeout(function () {

  Webcam.snap(function (data_uri) {
   document.getElementById("msg").value = '<img id="selfie_image" src="' + data_uri + '"/>';
   send();
   document.getElementById("camH1").innerHTML = "reload to stop the webcam";
  });
 }, 5000);
}
function mess(mossoge){
 document.getElementById("realtiv").innerHTML = "<strong>"+user_name+" said:</strong>"+mossoge;
 alert(mossoge);
}
display_ct();
document.domain = "CodeSend5";
