var startingspots = [[44.971538,-93.170895],[41.875952,-87.631127],[34.05223420, -118.2436849],[39.73915360, -104.9847034],[42.331427,-83.0457538],[39.952335,-75.163789],[29.7628844,-95.3830615],[40.7142691,-74.0059729],[47.606857,-122.333504],[37.790001,-122.314965],[25.779798,-80.192696],[36.135657,-115.163026],[38.8993488,-77.0145665]];
var stspot = Math.floor(Math.random()*13);
function displayMap(containerId, coords, zoom) {
    var layers = {
        Jobs: L.tileLayer('http://jobstiles.s3-website-us-west-2.amazonaws.com/tiles4/{z}/{x}/{y}.png', {
            errorTileUrl: 'http://www.robertmanduca.com/projects/jobs/blank.png',
            detectRetina: false,
            attribution: 'Jobs: Map data from US Census <a href="http://lehd.ces.census.gov" target="_blank">LEHD</a>, Imagery © <a href="http://www.robertmanduca.com" target="_blank">Robert Manduca</a>'
        }),
        Streets: L.tileLayer('http://tile.stamen.com/toner-background/{z}/{x}/{y}.png', {
            opacity: 0.17,
            attribution: 'Background: Map tiles by <a href="http://stamen.com" target="_blank">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0" target="_blank">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright" target="_blank">ODbL</a>.'         
        }),
        Labels: L.tileLayer('http://tile.stamen.com/toner-labels/{z}/{x}/{y}.png', {
            opacity: 0.7        
        })
    };

    var map = L.map(containerId, {
        center: coords,
        minZoom: 4,
        maxZoom: 13,
        zoom: zoom,
        layers: [layers.Jobs, layers.Streets, layers.Labels]
    });

    L.control.layers({}, layers).addTo(map);
}

displayMap('map', startingspots[stspot], 11);