$("#submitBtn2").on('click', function(){
    event.preventDefault();
    // console.log("test");
    $.ajax({
        
        headers:{
            "user-key": "faa307d773dcd2b9932eb6a9abf30392",
            "Accept": "application/json",
            "Content-type":"application/x-www-form-urlencoded"
        }, url: "https://developers.zomato.com/api/v2.1/search?entity_type=city&q=%22%20%22&count=10&sort=rating&order=asc",
           method: `GET`,
           success:function(response){
            //    var r=JSON.parse(response);
            //    $("#append").html(r.base);
            console.log(response);
           }
    })
});


