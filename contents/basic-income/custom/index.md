---
title: "Modeling basic income - does it add up?"
author: jeremy-scheff
date: 2015-10-29
template: page.jade
code: https://github.com/Data4America/simple-static-stories/blob/development/contents/basic-income/basic-income.js
description: "Mathematical modeling of the impact of basic income, allowing users to interactively customize the model and see if they can make the numbers add up."
child: true
published: false
extra: "Download the code for this visualization|https://github.com/Data4America/jobmaps, Download The Data|https://datahub.io/dataset/where-are-the-jobs, Learn how we did it|https://data4america.org/geography-american-jobs/how-to/"
---

<link rel="stylesheet" type="text/css" href="../basic-income.css">

<h2>Basic income model for <span class="regionNameText"></span> by <span class="personNameText"></span></h2>

<table class="ui definition table">
  <thead>
    <tr>
      <th></th>
      <th>Your Selection</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Basic Income (per adult)</td>
      <td>$<span id="reviewBasicIncome"></span>/year</td>
    </tr>
    <tr>
      <td>UBI or NIT?</td>
      <td><span id="reviewUbiOrNit"></span></td>
    </tr>
    <tr>
      <td>Spending cuts and tax increases</td>
      <td>$<span id="reviewCutsTaxes"></span>B</td>
    </tr>
    <tr>
      <td>GDP Change</td>
      <td><span id="reviewGdpRangeMin"></span> to <span id="reviewGdpRangeMax"></span></td>
    </tr>
  </tbody>
</table>

<div class="ui two column stackable grid">
  <div class="column">
    <h4>Distribution of possible costs</h4>
    <div id="biDist"></div>
  </div>
  <div class="column">
    <h4>Average costs/savings by component</h4>
    <table id="biBars" class="biBars"></table>
  </div>
</div>

<br>
<center><h2><a href="..">Click here to learn more and make your own version!</a></h2></center>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js"></script>
<script type="text/javascript" src="../basic-income.js"></script>
