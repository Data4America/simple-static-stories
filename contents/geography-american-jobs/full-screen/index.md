---
title: How To Make Your Own Jobs Map
author: robert-manduca
date: 2015-09-11
template: blank.jade
---
<html>
  <head>
    <meta charset="utf-8">
    <title>Where The Jobs?</title>
    <link href="mapstyle.css" rel="stylesheet">
    <link rel="stylesheet" href="../leaflet-0.7.5.css" />
    <!--<link rel="stylesheet" href="leaflet.css" />-->
     <script src="../leaflet-0.7.5.js"></script>
      <!-- Add after Leaflet library -->
   </head>
  <body>
    <div id = "overlay"></div>
    <div id = "about"></div>
    <div id="header">
      <h1>
        Where Are The Jobs?
        <span class="subtitle">Employment in America, 2010</span>
      </h1>
    </div>
    <div id="map">
    </div>
    <div id="footer">
      <span>One Dot = One Job. </span><span style="color:#D93400">Manufacturing and Logistics    </span><span> - </span><span style="color:#163CA8">Professional Services    </span><span> - </span><span style="color:#0D8A51">Healthcare, Education, and Government    </span><span> - </span><span style="color:#F0D038">Retail, Hospitality, and Other Services</span><p></p>
      <span><a href="..">Read the full article on Data4America</a>
    </div>


  <script src="maps.js"></script>



  </body>
</html>
