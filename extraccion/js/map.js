function getColor(name) {

    return name == "Distrito Suroeste" ? '#800026' :
            name == "Distrito La Costa"  ? '#BD0026' :
            name == "Distrito Norte"  ? '#E31A1C' :
            name == "Distrito Noreste"  ? '#FC4E2A' :
            name == "Distrito Oeste"  ? '#FD8D3C' :
            name == "Distrito Centro"   ? '#FEB24C' :
            name == "Distrito Noroeste"   ? '#FED976' :
            name == "Distrito Este"   ? '#FED976' :  '#FFEDA0';
}


function style1(feature) {
    return {
        // fillColor: getColor(feature.properties.name),
        fillColor: '#800026',
        weight: 2,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7,
        
    };
}


function style2(feature) {
    return {
        // fillColor: getColor(feature.properties.name),
        fillColor: '#FED976',
        weight: 3,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
    };
}


function featureSelected(event) {

    if(distritosLayerSelect){
        console.log("EEE");
        distritosLayerSelect.clearLayers();
        map.removeLayer(distritosLayer);
    }
    var distritosLayerSelect = L.geoJson(distritos,{      
        onEachFeature: function(feature, layer) {

            layer.bindPopup("<h5 class='infoHeader'><strong>"+ feature.properties.name +"</strong></h5><p class='text-center'>"+ feature.properties.descriptio +"</p>");

            if (feature.properties.altitudemo == event){
                layer.setStyle({fillColor :'green',weight: 2,color: 'blue'});
            }
            else{
                layer.setStyle({fillColor: '#800026', weight: 2, opacity: 1, color: 'white', fillOpacity: 0.7});
            }
        }
    });

    console.log(distritosLayerSelect);

    // distritosLayer.clearLayers();
    map.removeLayer(distritosLayer);
    
    distritosLayerSelect.addTo(map);

}





var map = L.map('map').setView([-31.6166, -60.7117], 13);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);


var distritosLayer = L.geoJson(distritos,{
    style: style1,
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<h5 class='infoHeader text-center'><strong>"+ feature.properties.name +"</strong></h5><p class='text-center'>"+ feature.properties.descriptio +"</p>");
    }

});

distritosLayer.addTo(map);