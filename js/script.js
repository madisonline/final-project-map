var map = L.map('map').setView([38.952881, -92.3303262], 13);
 
 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

$(document).ready(function() {
    getData();
});

function getData() {
    $.getJSON("js/dummy.json", function(data) {    
        drawMarkers(data);
    });
}

function drawMarkers(data) {
    
    for(i=0; i < data.length; i++) {
        
        var lat = data[i]["latitude"];
        var long = data[i]["longitude"];
        
        var name = data[i]["Name"];
        var text = data[i]["Text"];
        var photo = data[i]["Photo"];
        var video = data[i]["Video"];
        var audio = data[i]["Audio"];
        var location = data[i]["Location"];
        
        
        var markup = 
            
            "<span class='location'>"+location+"</span><br>"+
            "<span class='photo'>"+photo+"</span><br><br>"+
            "<span class='innertext'>"+text+ " — "+name+"</span><br><br>"+
            "<span class='video'>"+video+"</span><br><br>"+
            "<span class='audio'>"+audio+"</span><br><br>";

        
        var popupOptions = {
            minWidth : 400
            
        };
        
        L.marker([lat, long]).addTo(map)
        .bindPopup(markup, popupOptions)
        .openPopup();
    }
}







