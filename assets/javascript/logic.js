$( document ).ready( function() {
var firebaseConfig = {
    apiKey: "AIzaSyCwJ4l3bj7gwKZV9HesoNMQHX_ES4mWie8",
    authDomain: "service-storage-dc859.firebaseapp.com",
    databaseURL: "https://service-storage-dc859.firebaseio.com",
    projectId: "service-storage-dc859",
    storageBucket: "service-storage-dc859.appspot.com",
    messagingSenderId: "130590530959",
    appId: "1:130590530959:web:c882dee8bfa3fa02387ffa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
// declaring variables 

var name = $("#nameInput").val().trim();
var role = $("#roleInput").val().trim();
var startDate = $("#startDateInput").val().trim();
var monthsWorked;
var monthlyRate = $("#ropInput").val().trim();
var totalBilled;
//   function takes in name role start date and monthly rate 
 

// function to calculate the months worked
//  and total billed

// function to push data to list 
$("#submit").on("click", function (event) {
    event.preventDefault();
    var name = $("#nameInput").val().trim();
    var role = $("#roleInput").val().trim();
    var startDate = $("#startDateInput").val().trim();
    var monthlyRate = $("#ropInput").val().trim();
    database.ref().set({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        // dateAdded: timestamp.database.ServerValue.TIMESTAMP
      });
})
database.ref().orderByChild("dateAdded").limitToLast(5).on("child_added", function(childSnapshot){
    console.log(childSnapshot)
},
{

})
});