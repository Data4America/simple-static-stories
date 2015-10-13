---
title: "My Basic Income Policy Analysis for <Name of Geography>"
author: jeremy-scheff
date: 2015-09-11
template: article.jade
code: https://github.com/Data4America/basic-income-basic-job
description: "Mathematical modeling of the impact of basic income, compared against if the government just gave everyone jobs."
child: true
---

<style>
  .bar rect {
    fill: steelblue;
    shape-rendering: crispEdges;
  }

  .axis path, .axis line {
    fill: none;
    stroke: #000;
    shape-rendering: crispEdges;
  }

  .tooltip {
    color: #888;
    height: 2em;
    margin-top: 1em;
  }
</style>

<form class="ui form">
  <div class="four fields">
    <div class="field">
      <label>Basic Income ($/person)</label>
      <input type="text" id="basicIncome">
    </div>
    <div class="field">
      <label># Adults</label>
      <input type="text" id="numAdults">
    </div>
    <div class="field">
      <label># in Labor Force</label>
      <input type="text" id="laborForce">
    </div>
    <div class="field">
      <label># Disabled Adults</label>
      <input type="text" id="disabledAdults">
    </div>
  </div>
  <center>
    <div class="ui button" id="recalculate">Generate</div>
  </center>
</form>

<p>
  <div class="ui form">
    <div class="field">
      <input type="text" id="permalink" placeholder="Permalink">
    </div>
  </div>
</p>

### Histograms of total costs, 1000 simulations

<div class="ui two column stackable grid">
  <div class="column">
    <h4>Basic income</h4>
    <div id="biHistCYO"></div>
  </div>
  <div class="column">
    <h4>Basic job</h4>
    <div id="bjHistCYO"></div>
  </div>
</div>

<a href="javascript:run('CYO')">Click to re-run Monte Carlo simulations</a>

### Average values of components, 1000 simulations

<div class="ui two column stackable grid">
  <div class="column" style="padding-bottom: 0">
    <h4>Basic income</h4>
    <table id="biBarsCYO"></table>
  </div>
  <div class="column" style="padding-bottom: 0">
    <h4>Basic job</h4>
    <table id="bjBarsCYO"></table>
  </div>
</div>
<div id="tooltipCYO" class="tooltip"></div>

<a href="javascript:run('CYO')">Click to re-run Monte Carlo simulations</a>

## Compare Against The U.S.

### Histograms of total costs, 1000 simulations

<div class="ui two column stackable grid">
  <div class="column">
    <h4>Basic income</h4>
    <div id="biHist"></div>
  </div>
  <div class="column">
    <h4>Basic job</h4>
    <div id="bjHist"></div>
  </div>
</div>

<a href="javascript:run()">Click to re-run Monte Carlo simulations</a>

### Average values of components, 1000 simulations

<div class="ui two column stackable grid">
  <div class="column" style="padding-bottom: 0">
    <h4>Basic income</h4>
    <table id="biBars"></table>
  </div>
  <div class="column" style="padding-bottom: 0">
    <h4>Basic job</h4>
    <table id="bjBars"></table>
  </div>
</div>
<div id="tooltip" class="tooltip"></div>

<a href="javascript:run()">Click to re-run Monte Carlo simulations</a>

<a href="..">Read the original article for details!</a>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js"></script>
<script type="text/javascript" src="../basic-income-basic-job.js"></script>