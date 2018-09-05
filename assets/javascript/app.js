$(document).ready(function() 
{
    var config = {
        apiKey: "AIzaSyBdUwUzkwAY6oo002HYGaGW60cg8uo2XL8",
        authDomain: "stoner-296a6.firebaseapp.com",
        databaseURL: "https://stoner-296a6.firebaseio.com",
        projectId: "stoner-296a6",
        storageBucket: "stoner-296a6.appspot.com",
        messagingSenderId: "215447558618"
      };
      firebase.initializeApp(config);
    
    
    
    
    var database = firebase.database();
    
    $("#submitBtn").on("click" , function(event)
    
    {
        event.preventDefault();
        var searchInput = $("#searchInput").val().trim();
    
        $("#searchInput").val("");
    
        database.ref().push({
         
            searchInput: searchInput,
        });
    
    
    })
});

var handlebars = require('handlebars');

function searchResturants() {
    var queryResturants = 'https://developers.zomato.com/api/v2.1/search?entity_type=city&count=10&cuisines=%22%20%22&sort=rating&order=asc&apiKey=faa307d773dcd2b9932eb6a9abf30392'
    $.ajax({
        url: queryResturants,
        method: 'GET'
     }).then(function(response){
         console.log(response);
         $()
     })

}




   
