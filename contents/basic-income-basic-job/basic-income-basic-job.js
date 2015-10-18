function basicIncomeInit() {
    'use strict';

    // # Basic income and basic job models
    // -----------------------------------
    // Data and math can't always separate truth from fiction. But even in the face of uncertainty, [they can often separate plausible from ridiculous](http://slatestarcodex.com/2015/08/12/stop-adding-zeroes/). For example, if you say we should eliminate the income tax and pay for it by cutting defense spending by 50%, I can collect the data, add up the numbers, and ask you what you're going to do about the other $1 trillion in lost revenue.</p>

    // Basic income is a system where the government directly gives money to all its citizens, rather than somewhat indirectly through complicated welfare programs. The idea is that removing the overhead and inefficiencies inherent in welfare programs and putting more money in the pocket of the poor could be very beneficial. Beyond that, there are many questions. Should the amount of money phase out for wealthy citizens? Which entitlements and regulations should it replace? And most importantly, how much will it cost and what will the benefits be?

    // ## Constants
    // ------------
    // These are just default values! The user can change most of them in the UI.
    var defaultState = {
        basicIncome: 7.25 * 40 * 50,
        basicIncomeType: 'minimumWage',
        ubiOrNit: 'nit',
        cutsTaxes: 0,
        cutsTaxesWelfare: true,
        cutsTaxesLoopholes: false,
        cutsTaxesDefense: true,
        cutsTaxesSocialSecurity: false,
        cutsTaxesMedicaid: false,
        cutsTaxesOnePercent: true,
        cutsTaxesCustom: false,
        cutsTaxesCustomValue: 0,
        gdpRangeMin: -5,
        gdpRangeMax: 15
    };
    var updating = false;

    var numAdults = 227e6; // In the 2010 census, there were 227 million adults.
    var taxAsPercentGdp = 0.243; // http://www.taxpolicycenter.org/taxfacts/displayafact.cfm?Docid=307&Topic2id=95
    var gdp = 18; // Trillions of dollars

    // Allow overriding the default values, based on parameters supplied in the URL. These will automatically be updated when the form is submitted.
    var parts = decodeURIComponent(window.location.hash).split(',');
    parts[0] = parts[0].slice(1); // Get rid of #
    parts = parts.map(function (part, i) {
        if (i === 0) {
            return hackyEscape(part);
        }
        return parseFloat(part);
    });
    if (parts.length === 5 && !isNaN(parts[1]) && !isNaN(parts[2]) && !isNaN(parts[3])) {
        var state = {
            basicIncome: parts[1],
            laborForce: parts[3],
            regionName: parts[0]
        };
    } else {
        var state = defaultState;
    }

    // I can hear you already! Maybe you don't want to cut all the programs I just proposed to cut. Maybe you want to cut some things that I didn't cut, such as defense spending. Here's the beauty of this model: [it's simple and it's open source](https://github.com/dumbmatter/basic-income-basic-job). With a little bit of programming knowledge, you can change these assumptions and see how it adds up. For example, you could keep Medicaid by cutting defense spending by 50%. The important thing is to do the math.

    // ## Basic income model
    // ---------------------
    // Now, we're going to enumerate all the costs and benefits associated with a basic income.

    function basicIncomeCostBenefit(state) {
        // This object will store all the costs and benefits of the basic income as key/value pairs. Values are in trillions. Costs are positives, benefits are negative.
        var amounts = {};

        var factor = state.ubiOrNit === 'ubi' ? 1 : 0.5;
        amounts.directCosts = factor * numAdults * state.basicIncome / 1e12;
        amounts.directSavings = -state.cutsTaxes / 1000;

        amounts.economicGrowth = -0.01 * (state.gdpRangeMin + state.gdpRangeMax) / 2 * taxAsPercentGdp * gdp;

        return amounts;
    }

    // ## Results
    // ----------
    // The model is complete! Continue reading below to see how it is run and how results are displayed. Or, [jump right to the results.](../index.html)

    // And one more time, [here is a link to the code](https://github.com/dumbmatter/basic-income-basic-job) so you can easily generate your own model based on your own assumptions.

    // ## Run model
    // ----------------------------------

    function run(state) {
        // The output of `basicIncomeCostBenefit` is an object containing all the cost/benefit components
        var biAmounts = basicIncomeCostBenefit(state);

        // The total cost/benefit
        var biTotal = Object.keys(biAmounts).reduce(function (total, key) {
            return biAmounts[key] + total;
        }, 0);

        // Assume the input max and min are 2 standard deviations from the mean
        var biTotalStddev = 0.01 * (state.gdpRangeMax - state.gdpRangeMin) / 4 * taxAsPercentGdp * gdp;
console.log(biAmounts, biTotal, biTotalStddev);

        // This will generate and display charts based on the generated results - see the next section for details
        render(biAmounts, biTotal, biTotalStddev);
    }

    // Update permalink by calling this function
    function updateUrl() {
        // Do this instead of directly setting window.location.hash to prevent adding extra history entries
        /*var baseUrl = window.location.origin + '/basic-income-basic-job/local/';
        var url = baseUrl + '#' + encodeURIComponent(state.regionName + ',' + state.basicIncome + ',' + numAdults + ',' + state.laborForce + ',' + state.disabledAdults);
        if (window.location.pathname.indexOf('local') >= 0) {
            window.location.replace(url);
        }*/
        document.getElementById('permalink').value = 'Not implemented yet!';
    }

    // Initialize UI
    var formEls = {
        basicIncome: document.getElementById('basicIncome'),
        basicIncomeType: document.getElementsByName('basicIncomeType'),
        ubiOrNit: document.getElementById('ubiOrNit'),
        cutsTaxes: document.getElementById('cutsTaxes'),
        cutsTaxesWelfare: document.getElementById('cutsTaxesWelfare'),
        cutsTaxesLoopholes: document.getElementById('cutsTaxesLoopholes'),
        cutsTaxesDefense: document.getElementById('cutsTaxesDefense'),
        cutsTaxesSocialSecurity: document.getElementById('cutsTaxesSocialSecurity'),
        cutsTaxesMedicaid: document.getElementById('cutsTaxesMedicaid'),
        cutsTaxesOnePercent: document.getElementById('cutsTaxesOnePercent'),
        cutsTaxesCustom: document.getElementById('cutsTaxesCustom'),
        cutsTaxesCustomValue: document.getElementById('cutsTaxesCustomValue'),
        gdpRangeMin: document.getElementById('gdpRangeMin'),
        gdpRangeMax: document.getElementById('gdpRangeMax')
    };
    state2form(state, formEls);
    $("#customize-form :input").change(function() {
        if (!updating) {
            updating = true;
            form2state(state, formEls);
            updating = false;
        }

        run(state);

        updateUrl();
    });

    // Run the simulations on page load
    run(state);

    // ## Display results
    // -----------------
    // Generate and display all charts
    function render(biAmounts, biTotal, biTotalStddev) {
        bars('biBars', 'tooltip', biAmounts);

        histogram('biHist', biTotal, biTotalStddev);
    }

    // The histograms need to be re-rendered when the size of the window changes, otherwise they won't fit in the window correctly
    window.addEventListener('resize', render);

    // Plot one of the histograms, showing the distribution of possible costs
// from http://bl.ocks.org/mbostock/4349187
// Sample from a normal distribution with mean 0, stddev 1.
function normal() {
    var x = 0,
        y = 0,
        rds, c;
    do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        rds = x * x + y * y;
    } while (rds == 0 || rds > 1);
    c = Math.sqrt(-2 * Math.log(rds) / rds); // Box-Muller transform
    return x * c; // throw away extra sample y * c
}

//taken from Jason Davies science library
// https://github.com/jasondavies/science.js/
function gaussian(x) {
    var gaussianConstant = 1 / Math.sqrt(2 * Math.PI),
        mean = 0,
        sigma = 1;

    x = (x - mean) / sigma;
    return gaussianConstant * Math.exp(-.5 * x * x) / sigma;
};
    function histogram(containerId, mean, stddev) {
        var container = document.getElementById(containerId);
        container.innerHTML = '';

        var data = [];

        // loop to populate data array with 
        // probabily - quantile pairs
        var q, p, el;
        for (var i = 0; i < 10000; i++) {
            q = normal() // calc random draw from normal dist
            p = gaussian(q) // calc prob of rand draw
            el = {
                "q": q * stddev + mean,
                "p": p
            }
            data.push(el)
        };

        // need to sort for plotting
        data.sort(function(x, y) {
            return x.q - y.q;
        }); 

        var margin = {top: 10, right: 30, bottom: 45, left: 30},
            width = container.offsetWidth - margin.left - margin.right,
            height = 200 - margin.top - margin.bottom;

        var x = d3.scale.linear()
            .range([0, width]);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient('bottom');

        var line = d3.svg.line()
            .x(function(d) {
                return x(d.q);
            })
            .y(function(d) {
                return y(d.p);
            });

        var svg = d3.select('#' + containerId).append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        x.domain(d3.extent(data, function(d) {
            return d.q;
        }));
        y.domain(d3.extent(data, function(d) {
            return d.p;
        }));

        svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line);

        svg.append('text')
            .attr('transform', 'translate(' + (width / 2) + ' ,' + (height + margin.bottom - 5) + ')')
            .style('text-anchor', 'middle')
            .text('Cost (trillions of dollars)');
    }

    // Plot one of the bar graphs, showing the average contribution of different components to the total cost
    function bars(containerId, tooltipId, amounts) {
        var container = document.getElementById(containerId);
        container.innerHTML = '';

        var width = 100;

        var categories = Object.keys(amounts).sort();
        var values = categories.map(function (category) {
            return amounts[category];
        });

        var maxValue = Math.max.apply(Math, values);
        var minValue = Math.min.apply(Math, values);

        var zero;
        if (minValue > 0 || maxValue < 0) {
            zero = 0;
        } else {
            zero = -minValue * 100 / (maxValue - minValue);
        }

        var data = [];
        values.forEach(function (value, i) {
            var scaled = value * 100 / (maxValue - minValue);
            var width = Math.abs(scaled);
            var sign = Math.sign(scaled);

            data.push({
                value: value,
                offset: sign === 1 ? zero : zero + scaled,
                width: width,
                sign: sign,
                category: categories[i]
            });
        });

        var div = d3.select('#' + tooltipId)
            .style('opacity', 0);

        var rows = d3.select('#' + containerId)
            .selectAll('table')
            .data(data)
            .enter().append('tr');

        rows.append('td')
            .html(function (d) { return d.category; });

        rows.append('td')
            .on('mouseover', function (d) {
                div.style('opacity', 1);
                div.html(function () {
                        if (d.sign === 1) {
                            return 'Costs $' + (d.value).toFixed(2) + ' trillion';
                        }
                        return 'Reduces costs $' + (-d.value).toFixed(2) + ' trillion';
                    });
            })
            .on('mouseout', function (d) {
                div.html('');
            })
            .append('div')
            .style('width', function (d) { return d.width + 'px'; })
            .style('height', '1em')
            .style('margin-left', function (d) { return d.offset + 'px'; })
            .style('background-color', function (d) { return d.sign === 1 ? 'red' : 'black'; });
    }

    // ## Utility functions
    // --------------------

    // ## WARNING WARNING SECURITY HOLE
    function hackyEscape(string) {
        return string.replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function state2form(state, formEls) {
        // Normal inputs
        var input = ['basicIncome', 'ubiOrNit', 'cutsTaxesCustomValue', 'gdpRangeMin', 'gdpRangeMax'];
        input.forEach(function (input) {
            formEls[input].value = state[input];
        });

        // Radio buttons
        for (var i = 0; i < formEls.basicIncomeType.length; i++) {
            var radio = formEls.basicIncomeType[i];
            radio.checked = radio.value === state.basicIncomeType;

            if (radio.value === 'custom') {
                if (radio.checked) {
                    formEls.basicIncome.disabled = false;
                } else {
                    formEls.basicIncome.disabled = true;
                }
            }
        }

        // Check boxes, cutsTaxes calculation
        var checkboxes = {
            cutsTaxesWelfare: 375,
            cutsTaxesLoopholes: 740,
            cutsTaxesDefense: 300,
            cutsTaxesSocialSecurity: 695,
            cutsTaxesMedicaid: 290,
            cutsTaxesOnePercent: 157,
            cutsTaxesCustom: state.cutsTaxesCustomValue,
        };
        state.cutsTaxes = 0;
        Object.keys(checkboxes).forEach(function (checkbox) {
            formEls[checkbox].checked = state[checkbox];
            if (formEls[checkbox].checked) {
                state.cutsTaxes += checkboxes[checkbox];
            }
        });

        formEls.cutsTaxes.value = state.cutsTaxes;

        if (state.cutsTaxesCustomValue === 0) {
            formEls.cutsTaxesCustomValue.value = '';
        }
        if (formEls.cutsTaxesCustom.checked) {
            formEls.cutsTaxesCustomValue.disabled = false;
        } else {
            formEls.cutsTaxesCustomValue.disabled = true;
        }
    }

    function form2state(state, formEls) {
        // Integer inputs
        var input = ['basicIncome', 'cutsTaxesCustomValue', 'gdpRangeMin', 'gdpRangeMax'];
        input.forEach(function (input) {
            if (!isNaN(parseInt(formEls[input].value, 10))) {
                state[input] = parseInt(formEls[input].value, 10);
            }
        });

        state.ubiOrNit = formEls.ubiOrNit.value === 'ubi' ? 'ubi' : 'nit'

        // Radio buttons
        for (var i = 0; i < formEls.basicIncomeType.length; i++) {
            var radio = formEls.basicIncomeType[i];
            if (radio.checked) {
                state.basicIncomeType = radio.value;
            }
        }
        if (state.basicIncomeType === '10k') {
            state.basicIncome = 10000;
        } else if (state.basicIncomeType === 'minimumWage') {
            state.basicIncome = 7.25 * 40 * 50;
        } else if (state.basicIncomeType === '20k') {
            state.basicIncome = 20000;
        } else {
            state.basicIncomeType = 'custom';
        }

        // Check boxes, cutsTaxes calculation
        var checkboxes = ['cutsTaxesWelfare', 'cutsTaxesLoopholes', 'cutsTaxesDefense', 'cutsTaxesSocialSecurity', 'cutsTaxesMedicaid', 'cutsTaxesOnePercent', 'cutsTaxesCustom'];
        checkboxes.forEach(function (checkbox) {
            state[checkbox] = formEls[checkbox].checked;
        });

        if (formEls.cutsTaxesCustomValue.value = '') {
            state.cutsTaxesCustomValue === 0
        }

        // Sync
        state2form(state, formEls);
    }

    // Because JavaScript's ecosystem is a wasteland, I wrote some helper functions for generating the random numbers used in the models

    function uniformRand(min, max) {
        return Math.random() * (max - min) + min;
    }

    function gaussRand(mu, sigma) {
        var marsaglia, radius, z1, z2;

        mu = mu !== undefined ? mu : 0;
        sigma = sigma !== undefined ? sigma : 1;

        do {
            z1 = 2 * Math.random() - 1;
            z2 = 2 * Math.random() - 1;
            radius = z1 * z1 + z2 * z2;
        } while (radius >= 1 || radius === 0);

        marsaglia = Math.sqrt(-2 * Math.log(radius) / radius);

        return (z1 * marsaglia) * sigma + mu;
    }

    function binomRand(N, p) {
        var count = Math.round(gaussRand(N * p, Math.sqrt(N * p * (1 - p))));
        return count > 0 ? count : 0;
    }
}

(function() {
    var setIntervalId = setInterval(function() {
        if (window.jQuery) {
            basicIncomeInit();
            clearInterval(setIntervalId);
        }
    }, 100);
}());