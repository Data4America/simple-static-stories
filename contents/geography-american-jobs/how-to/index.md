---
title: How To Make Your Own Jobs Map
author: robert-manduca
date: 2015-09-11
template: article.jade
code: https://github.com/Data4America/jobmaps
data: http://datahub.io/dataset/where-are-the-jobs
description: "Instructions for how to take jobs data and create a geographical map."
child: true
---

1. Download data on number of jobs at the smallest available level of spatial aggregation, and shapefiles of the associated geography. Also make sure you have GEOS installed on your computer (this should be installed if you have the osgeo or shapely packages in Python).

2. [Clone our git repo](https://github.com/Data4America/jobmaps) to get the files mentioned in the following steps.

3. Open the script `dotfile_wac.py`. Fill in the `dirpath` variable on line 16 with the path to your working directory. Adjust the four categories `makers`, `services`, `professions`, and `support` on lines 34-37 to conform to whatever categories you prefer.   Adjust or remove the `fips2abbrev` code on lines 182-186 if your data does not require translating from a FIPS code to a US postal abbreviation. Adjust the `wac_filename`, `input_filename`, and `output_filename` variables on lines 191-193 to conform to your files. 

4. Run the script `dotfile_wac.py`. This may take a while to run. It will produce one csv file per state (or whatever input files you used) with one line per job, giving the type of job, quadkey location, and lat/long coordinates associated with the random point assigned to that job. 

5. Run the script `sort_by_quadkey.py`, again filling in your directory and the output filenames you used. This will read in all the individual csv output files from step 3 and compile them into one large dataset, then sort that dataset by quadkey and output it is a csv. 

6. It may be the case that there are rows missing certain data in the csv from step 4. These should be output at the beginning or end of the file. You can check them by running `tail csvfile.csv` in the terminal and delete them by running sed `linenum1,linenum2d` csvfile.csv > newcsvfile.csv

7. Open the text file `zoomlevel.txt` in a text editor. Edit it to list the zoom levels that you want to have. 

8. Open the script `dotmap_server.pde` in Processing. Edit the `reader` variable in line 92 to point at your data file. Edit the colors on lines 168-186 to whatever colors you prefer. 

9. Run the script `dotmap_server.pde`. This will read in your master csv and output a series of map tiles, organized in a directory as `zoomlevel/tile_x_coordinate/tile_y_coordinate.png`.

10. Copy the output tiles to your website. 

11. Create a blank png image that is the same size as your tiles and copy it over to the website. 

11. You can create the webmap using leaflet:

        <script src="http://cdn.leafletjs.com/leaflet-0.7.5/leaflet.js"></script>
        <div id="map"></div>
        <script type="text/javascript">
        var map = L.map('map').setView([lat, long],zoomlevel);
            L.tileLayer('http://url_to_tile_directory/{z}/{x}/{y}.png', {
            maxZoom: 13,
            minZoom: 4,
            errorTileUrl: 'http://url_to_blank_tile.png',
            attribution: 'Make Sure to Attribute Your Data'
        }).addTo(map);
        </script>

12. Congratulations! You're done!

<script src="http://cdn.leafletjs.com/leaflet-0.7.5/leaflet.js"></script>
<script>
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

displayMap('map-manhattan', [40.7403, -73.9697], 11);
displayMap('map-los-angeles', [34.0500, -118.2500], 10);
displayMap('map-chicago', [41.8769, -87.6947], 11);
displayMap('map-dallas', [32.8067, -96.8170], 11);
displayMap('map-cleveland', [41.4822, -81.6697], 12);
displayMap('map-las-vegas', [36.1215, -115.1739], 11);
displayMap('map-miami', [25.7953, -80.2489], 11);
</script>