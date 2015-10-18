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
  .line {
      fill: none;
      stroke: steelblue;
      stroke-width: 1.5px;
  }

  .axis path, .axis line {
    fill: none;
    stroke: #000;
    shape-rendering: crispEdges;
  }

  .tooltip {
    color: #888;
    height: 2em;
  }
</style>

## Methods

The methods come down to four critical questions that govern the feasibility of a basic income program. None of these questions have obvious answers, so at the end, you'll be able to select what you think the most sensible answers are, and then you can see if your answers add up.

### 1. How big is the basic income?

### 2. Are we really going to send Bill Gates a check every month, or does something like a Negative Income Tax make more sense?

bill gates thing is misnomer, in reality his taxes would still be higher than UBI. But.. could still raise them more to offset it! Discuss NIT, which is same idea basically.

FIX THIS

Well, I'm going to cut some money right off the top. Although the simplest basic income system pays the same amount to everyone, is also possible to have a system like progressive income tax, where it gradually phases out. In fact, my fellow Rutgers alumnus Milton Friedman proposed to implement basic income through a negative income tax, which would naturally phase out as income increases. Let's assume that reduces costs to roughly `1/2 * numAdults * basicIncome` or $1.65 trillion. That's a lot of money, but we'll see how it all adds up at the end.

previous two questions address cost. but... how to pay for it? That's next two questions.

### 3. What spending cuts can be made?

### 4. What effect will basic income have on the economy?

discuss static vs dynamic

Then, **what happens to the labor force?** Would people who were previously unable to work due to ill-concieved government regulation like [welfare cliffs](https://www.illinoispolicy.org/reports/modeling-potential-income-and-welfare-assistance-benefits-in-illinois/) start working? [The number of Americans on disability has been rising too, at least partially due to people who want to work but make more money on disability.](http://apps.npr.org/unfit-for-work/) Some of them would start working again if they recieved an unconditional basic income. Alternatively, some workers may decide that their basic income revenue is enough for them and quit their jobs.

## Customize Results

<form class="ui form" id="customize-form">
  <div class="four fields">
    <div class="field">
      <label>Basic Income (per adult)</label>
      <div class="ui left labeled input">
        <div class="ui left label">$</div>
        <input type="text" id="basicIncome" disabled>
      </div>
      <div class="grouped fields">
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="basicIncomeType" value="10k">
            <label>$10k/year</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="basicIncomeType" value="minimumWage">
            <label>Full time minimum wage ($14.5k/year)</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="basicIncomeType" value="20k">
            <label>$20k/year</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="basicIncomeType" value="custom">
            <label>Custom</label>
          </div>
        </div>
      </div>
    </div>
    <div class="field">
      <label>UBI or NIT?</label>
      <select id="ubiOrNit">
        <option value="ubi">UBI while keeping taxes the same</option>
        <option value="nit">Use a NIT or increase taxes on the rich while applying UBI</option>
      </select>
    </div>
    <div class="field">
      <label>Cuts and taxes (billions)</label>
      <div class="ui left labeled input">
        <div class="ui label">$</div>
        <input type="text" id="cutsTaxes" disabled>
      </div>
      <div class="grouped fields">
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" id="cutsTaxesWelfare">
            <label>$375B - Eliminate redundant welfare <a href="http://www.usbig.net/papers/144-Sheahen-RefundableTaxCredit.pdf">[1]</a></label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" id="cutsTaxesLoopholes">
            <label>$740B - Eliminate tax loopholes <a href="http://www.usbig.net/papers/144-Sheahen-RefundableTaxCredit.pdf">[1]</a></label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" id="cutsTaxesDefense">
            <label>$300B - Cut defense spending in half <a href="https://en.wikipedia.org/wiki/2010_United_States_federal_budget">[2]</a></label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" id="cutsTaxesSocialSecurity">
            <label>$695B - Eliminate Social Security <a href="https://en.wikipedia.org/wiki/2010_United_States_federal_budget">[2]</a></label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" id="cutsTaxesMedicaid">
            <label>$290B - Eliminate Medicaid <a href="https://en.wikipedia.org/wiki/2010_United_States_federal_budget">[2]</a></label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" id="cutsTaxesOnePercent">
            <label>$157B - Raise taxes on top 1% to 40% <a href="http://www.nytimes.com/2015/10/17/business/putting-numbers-to-a-tax-increase-for-the-rich.html">[3]</a></label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" id="cutsTaxesCustom">
            <label><input type="text" id="cutsTaxesCustomValue" placeholder="Custom Amount"></checkbox>
          </div>
        </div>
      </div>
    </div>
    <div class="field">
      <label>GDP Growth Change</label>
      <div class="ui right labeled input">
        <input type="text" id="gdpRangeMin">
        <div class="ui right label">%</div>
      </div>
      <center>to</center>
      <div class="ui right labeled input">
        <input type="text" id="gdpRangeMax">
        <div class="ui right label">%</div>
      </div>
    </div>
  </div>
</form>

<div class="ui two column stackable grid">
  <div class="column">
    <h4>Distribution of possible costs</h4>
    <div id="biHist"></div>
  </div>
  <div class="column">
    <h4>Average costs by component</h4>
    <table id="biBars"></table>
    <div id="tooltip" class="tooltip"></div>
  </div>
</div>

<p>
  <div class="ui form">
    <div class="field">
      <input type="text" id="permalink" placeholder="Permalink">
    </div>
  </div>
</p>

In both examples, there is clearly a lot of variability in how much the programs cost. But by doing a Monte Carlo simulation, the range of outcomes can be seen. From these results, it is apparent that our model of basic income is actually not more costly than our model of basic job, although there is enough overlap to call them roughly equivalent.

If better estimates and more thorough modeling can produce a narrower distribution that lies closer to $0 than to $2 trillion, that would be good. But regardless, given a US budget that is already denominated in trillions of dollars, this model shows that basic income need not be prohibitively expensive.

The red bars show costs, the black bars show reductions in costs.

Although basic income has much higher direct costs due to its broader population of recipients, this is mostly accounted for by increased productivity and decreased administrative costs.

Additionally, through this analysis you can see that it is unlikely that unleashing the creative geniuses stuck in crappy jobs will result in significant economic gains, although we might get a few more Harry Potters out of it.

## Discussion

Now the real question is, is that cost worth it? What programs could you eliminate with a basic income? [We currently spend about $1 trillion/year on anti-povery programs](http://www.cato-unbound.org/2014/08/26/basic-income-guarantee-simplicity-what-cost), but maybe you want to cut [even more than that](https://www.chrisstucchio.com/blog/2013/basic_income_vs_basic_job.html). Whatever your desired cuts, you should weight them against the costs of a basic income.

Ultimately, there are two conclusions here.

Basic income would not necessarily be prohibitively expensive, although of course the devil is in the details.

And mathematical modeling is a useful tool for quantitatively explaining your reasoning. I know my reasoning here is very simple and likely very wrong at times, but at least it's explicit. My only request is that criticism comes with a model.

## Annotated source code

[Click here.](methods.html)
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js"></script>
<script type="text/javascript" src="basic-income-basic-job.js"></script>