---
title: "Modeling basic income - does it add up?"
author: jeremy-scheff
date: 2015-11-12
template: basic-income.jade
code: https://github.com/Data4America/simple-static-stories/blob/development/contents/basic-income/basic-income.js
description: "Mathematical modeling of the impact of basic income, allowing users to interactively customize the model and see if they can make the numbers add up."
links: "Download the code for this visualization|https://github.com/Data4America/jobmaps, Download The Data|https://datahub.io/dataset/where-are-the-jobs, Learn how we did it|https://data4america.org/geography-american-jobs/how-to/"
isStandard: true
article: true
icon: "red university"
published: false
---

Data and math can't always separate truth from fiction. But even in the face of uncertainty, [they can often separate plausible from ridiculous](http://slatestarcodex.com/2015/08/12/stop-adding-zeroes/). For example, if you say we should eliminate the income tax and pay for it by cutting defense spending by 50%, I can collect the data, add up the numbers, and ask you what you're going to do about the other $1 trillion in lost revenue.

Basic income is a system where the government directly gives money to all its citizens, rather than somewhat indirectly through complicated welfare programs. The idea is that removing the overhead and inefficiencies inherent in welfare programs and putting more money in the pocket of the poor could be very beneficial. Beyond that, there are many questions. Should the amount of money phase out for wealthy citizens? Which entitlements and regulations should it replace? And most importantly, how much will it cost and what will the benefits be? Mathematical modeling allows us to quantitatively state our hypothesis, evaluate its plausibility, and explore alternative options.

<span class="more"></span>

## Methods

The model is primarily driven by four critical questions that govern the feasibility of a basic income program. None of these questions have obvious answers, so at the end, you'll be able to select what you think the most sensible answers are, and then you can see if your answers add up.

### 1. How big is the basic income?

It's obvious that giving everyone $100k/year would make little sense - it would just lead to inflation. It's similarly obvious that giving everyone $100/year wouldn't really help much because it's so small.

A good starting point might be the equivalent of a full time minimum wage job, which works out to $14.5k/year. If you think that should be higher or lower, you can edit it below.

### 2. Are we really going to send Bill Gates a check every month, or does something like a Negative Income Tax make more sense?

There are broadly two schools of thought about basic income:

* **Send everyone a check every month.** This is appealing because it's very simple, very clear, and very egalitarian.

* **Give the full basic income only to people making $0, and gradually phase it out for people making more.** This approach is also known as a [negative income tax](https://www.youtube.com/watch?v=xtpgkX588nM).

In reality, the two approaches aren't so different. For example, you could send everyone a $1000 check every month, but raise taxes on the rich so that they pay an extra $1000/month. The important thing is, a lot of money could be saved by taking the second approach, possibly [as much as 50%](http://www.philipharvey.info/ubiandnit.pdf). And that makes sense - imagine if people making $0 get the full basic income, rich people get nothing, and there is a continuum in between so that a person with a median income gets half the basic income.

The previous two questions define how much a basic income program would cost. The next two address how to pay for it.

### 3. What spending cuts and revenue increases can be made?

With a basic income in place, there would be no need for many welfare programs. And the US has a lot of them: TANF, SNAP, WIC, etc. There are programs with overlapping goals. There are redundant state/local/federal programs. There are programs with very high administrative costs. These programs could all be eliminated if basic income existed as an alternative. In total, that adds up to [about $375 billion dollars](http://www.usbig.net/papers/144-Sheahen-RefundableTaxCredit.pdf).

Unfortunately, basic income would cost much more than that, so you might want to propose other cuts as well. Conservatives might use a [more broad definition of welfare and want to cut up to $1 trillion/year in anti-poverty programs](http://www.cato-unbound.org/2014/08/26/basic-income-guarantee-simplicity-what-cost). Liberals might want to raise taxes on the super-rich and shift some of our world-leading military spending over to basic income spending. And people in between might want to do some combination. Below, you can define what you think the optimal mix is.

### 4. What effect will basic income have on the economy?

Economic models fall largely into two categories: [static and dynamic](https://en.wikipedia.org/wiki/Static_analysis). Dynamic models attempt to assess how the economy will respond to a change. That may seem like a good thing, but it is a possible source of bias. For example, cutting taxes may lead to economic growth, but how much? If an answer is uncertain, a dynamic model may just represent the bias of whoever designed it. From that perspective, static models are more conservative.

However, with a policy as large as basic income, static analysis may be unrealistic. Just consider the economic implications. Poor people would have much more money to spend, which could have [a stimulatory effect similar to food stamps](http://money.cnn.com/2008/01/29/news/economy/stimulus_analysis/). People who were previously unable to work due to ill-concieved government regulation like [welfare cliffs](https://www.illinoispolicy.org/reports/modeling-potential-income-and-welfare-assistance-benefits-in-illinois/) could start working. [The number of Americans on disability has been rising too, at least partially due to people who want to work but make more money on disability.](http://apps.npr.org/unfit-for-work/) Some of them would start working again if they recieved a basic income.

On the other hand, some workers may decide that their basic income revenue is enough for them and quit their jobs or work less. That would have a negative impact on the economy. So maybe the effect of basic income would actually be negative!

Because of this wide range of uncertainty, the form below allows you to enter a range of possible changes in GDP that would result from the implementation of basic income. The model then assumes that tax revenue as a percentage of GDP would remain constant, resulting in additional (or decreased) revenue equal to that rate times the change in the GDP.

## Customize results

<form class="ui form" id="INLINEcustomize-form">
  <div class="four fields">
    <div class="field">
      <label>Basic Income (per adult)</label>
      <div class="ui left labeled input">
        <div class="ui left label">$</div>
        <input type="text" id="INLINEbasicIncome" disabled>
      </div>
      <div class="grouped fields">
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="INLINEbasicIncomeType" value="10k">
            <label>$10k/year</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="INLINEbasicIncomeType" value="minimumWage">
            <label>Full time minimum wage ($14.5k/year)</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="INLINEbasicIncomeType" value="20k">
            <label>$20k/year</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="INLINEbasicIncomeType" value="custom">
            <label>Custom</label>
          </div>
        </div>
      </div>
    </div>
    <div class="field">
      <label>UBI or NIT?</label>
      <select id="INLINEubiOrNit">
        <option value="ubi">UBI while keeping taxes the same</option>
        <option value="nit">Use a NIT or increase taxes on the rich while applying UBI</option>
      </select>
    </div>
    <div class="field">
      <label>Cuts and taxes (billions)</label>
      <div class="ui left labeled input">
        <div class="ui label">$</div>
        <input type="text" id="INLINEcutsTaxes" disabled>
      </div>
      <div class="grouped fields">
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" id="INLINEcutsTaxesWelfare">
            <label>$375B - Eliminate redundant welfare <a href="http://www.usbig.net/papers/144-Sheahen-RefundableTaxCredit.pdf">[1]</a></label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" id="INLINEcutsTaxesLoopholes">
            <label>$740B - Eliminate tax loopholes <a href="http://www.usbig.net/papers/144-Sheahen-RefundableTaxCredit.pdf">[1]</a></label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" id="INLINEcutsTaxesDefense">
            <label>$300B - Cut defense spending in half <a href="https://en.wikipedia.org/wiki/2010_United_States_federal_budget">[2]</a></label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" id="INLINEcutsTaxesSocialSecurity">
            <label>$695B - Eliminate Social Security <a href="https://en.wikipedia.org/wiki/2010_United_States_federal_budget">[2]</a></label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" id="INLINEcutsTaxesMedicaid">
            <label>$290B - Eliminate Medicaid <a href="https://en.wikipedia.org/wiki/2010_United_States_federal_budget">[2]</a></label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" id="INLINEcutsTaxesOnePercent">
            <label>$157B - Raise taxes on top 1% to 40% <a href="http://www.nytimes.com/2015/10/17/business/putting-numbers-to-a-tax-increase-for-the-rich.html">[3]</a></label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" id="INLINEcutsTaxesCustom">
            <label><input type="text" id="INLINEcutsTaxesCustomValue" placeholder="Custom Amount"></checkbox>
          </div>
        </div>
      </div>
    </div>
    <div class="field">
      <label>GDP Change</label>
      <div class="ui right labeled input">
        <input type="text" id="INLINEgdpRangeMin">
        <div class="ui right label">%</div>
      </div>
      <center>to</center>
      <div class="ui right labeled input">
        <input type="text" id="INLINEgdpRangeMax">
        <div class="ui right label">%</div>
      </div>
    </div>
  </div>
</form>

<div class="ui two column stackable grid">
  <div class="column">
    <h4>Distribution of possible costs</h4>
    <div id="INLINEbiDist"></div>
  </div>
  <div class="column">
    <h4>Average costs/savings by component</h4>
    <table id="INLINEbiBars" class="biBars"></table>
  </div>
</div>

<script type="text/javascript" src="basic-income-inline.js"></script>

## Build your own model
