---
title: "A new social contract: Basic Income vs. Basic Jobs"
author: jeremy-scheff
date: 2015-09-11
template: article.jade
code: https://github.com/Data4America/basic-income-basic-job
description: "Mathematical modeling of the impact of basic income, compared against if the government just gave everyone jobs."
published: false
---

Data and math can't always separate truth from fiction. But even in the face of uncertainty, [they can often separate plausible from ridiculous](http://slatestarcodex.com/2015/08/12/stop-adding-zeroes/). For example, if you say we should eliminate the income tax and pay for it by cutting defense spending by 50%, I can collect the data, add up the numbers, and ask you what you're going to do about the other $1 trillion in lost revenue.

Basic income is a system where the government directly gives money to all its citizens, rather than somewhat indirectly through complicated welfare programs. The idea is that removing the overhead and inefficiencies inherent in welfare programs and putting more money in the pocket of the poor could be very beneficial. Beyond that, there are many questions. Should the amount of money phase out for wealthy citizens? Which entitlements and regulations should it replace? And most importantly, how much will it cost and what will the benefits be?

<span class="more"></span>

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

## Preface

I consider this a draft and would appreciate a collaborative review process. If the outcome of that review process is that my article is bullshit, I'm fine with that. We should aim for a high standard of quality.

## Introduction

Here, a basic income model is compared against a "basic job" model where the government guarantees employment for all non-disabled adults.

## Methods

[Click here.](methods.html)

## Results

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

In both examples, there is clearly a lot of variability in how much the programs cost. But by doing a Monte Carlo simulation, the range of outcomes can be seen. From these results, it is apparent that our model of basic income is actually not more costly than our model of basic job, although there is enough overlap to call them roughly equivalent.

If better estimates and more thorough modeling can produce a narrower distribution that lies closer to $0 than to $2 trillion, that would be good. But regardless, given a US budget that is already denominated in trillions of dollars, this model shows that basic income need not be prohibitively expensive.

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

The red bars show costs, the black bars show reductions in costs.

Although basic income has much higher direct costs due to its broader population of recipients, this is mostly accounted for by increased productivity and decreased administrative costs.

Additionally, through this analysis you can see that it is unlikely that unleashing the creative geniuses stuck in crappy jobs will result in significant economic gains, although we might get a few more Harry Potters out of it.

## Discussion

Now the real question is, is that cost worth it? What programs could you eliminate with a basic income? [We currently spend about $1 trillion/year on anti-povery programs](http://www.cato-unbound.org/2014/08/26/basic-income-guarantee-simplicity-what-cost), but maybe you want to cut [even more than that](https://www.chrisstucchio.com/blog/2013/basic_income_vs_basic_job.html). Whatever your desired cuts, you should weight them against the costs of a basic income.

Ultimately, there are two conclusions here.

Basic income would not necessarily be prohibitively expensive, although of course the devil is in the details.

And mathematical modeling is a useful tool for quantitatively explaining your reasoning. I know my reasoning here is very simple and likely very wrong at times, but at least it's explicit. My only request is that criticism comes with a model.


## Create Your Own

<form class="ui form">
  <div class="field">
    <label>Region Name</label>
    <input type="text" id="regionName">
  </div>
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

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js"></script>
<script type="text/javascript" src="basic-income-basic-job.js"></script>
