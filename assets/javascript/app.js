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





   
