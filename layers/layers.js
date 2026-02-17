var wms_layers = [];


        var lyr_WorldImagery_0 = new ol.layer.Tile({
            'title': 'World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_stations_list_CLIMAT_data_Madacopie_1 = new ol.format.GeoJSON();
var features_stations_list_CLIMAT_data_Madacopie_1 = format_stations_list_CLIMAT_data_Madacopie_1.readFeatures(json_stations_list_CLIMAT_data_Madacopie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stations_list_CLIMAT_data_Madacopie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stations_list_CLIMAT_data_Madacopie_1.addFeatures(features_stations_list_CLIMAT_data_Madacopie_1);
var lyr_stations_list_CLIMAT_data_Madacopie_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stations_list_CLIMAT_data_Madacopie_1, 
                style: style_stations_list_CLIMAT_data_Madacopie_1,
                popuplayertitle: 'stations_list_CLIMAT_data_Mada copie',
                interactive: true,
    title: 'stations_list_CLIMAT_data_Mada copie<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_1_0.png" /> Existing synop station<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_1_1.png" /> Existing UA station<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_1_2.png" /> GBON Compliant-ASECNA<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_1_3.png" /> Planned Synop station<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_1_4.png" /> Planned UA station<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_1_5.png" /> Planned Regional Maintenance Center<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_1_6.png" /> Headquarters Maintenance Center<br />' });

lyr_WorldImagery_0.setVisible(true);lyr_stations_list_CLIMAT_data_Madacopie_1.setVisible(true);
var layersList = [lyr_WorldImagery_0,lyr_stations_list_CLIMAT_data_Madacopie_1];
lyr_stations_list_CLIMAT_data_Madacopie_1.set('fieldAliases', {'WMO-Statio': 'WMO-Statio', 'StationNam': 'StationNam', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Height': 'Height', 'Country': 'Country', 'StType': 'StType', });
lyr_stations_list_CLIMAT_data_Madacopie_1.set('fieldImages', {'WMO-Statio': 'TextEdit', 'StationNam': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Height': 'TextEdit', 'Country': 'TextEdit', 'StType': 'TextEdit', });
lyr_stations_list_CLIMAT_data_Madacopie_1.set('fieldLabels', {'WMO-Statio': 'no label', 'StationNam': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Height': 'no label', 'Country': 'no label', 'StType': 'no label', });
lyr_stations_list_CLIMAT_data_Madacopie_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});