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

    // In the 2010 census, there were 227 million adults.
    var numAdults = 227e6;

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
    // Now, we're going to enumerate all the costs and benefits associated with a basic income. Because there is uncertainty in calculating each of these factors, I will often going pick a relatively wide range of random values to represent a variety of possible outcomes and repeat my calculations many times. This is called the [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method) and it's a good way to understand uncertainty in an estimate involving randomness.

    // Each time this function is called, the model will be run once. Because there is randomness in the model, the output will vary. Later, this function will be run many times to assess the full range of possible outcomes.
    function basicIncomeCostBenefit(state) {
        // This object will store all the costs and benefits of the basic income as key/value pairs.
        var amounts = {};

        //  First, **how much does it cost to send that much money to so many people?** Well, I'm going to cut some money right off the top. Although the simplest basic income system pays the same amount to everyone, is also possible to have a system like progressive income tax, where it gradually phases out. In fact, my fellow Rutgers alumnus Milton Friedman proposed to implement basic income through a negative income tax, which would naturally phase out as income increases. Let's assume that reduces costs to roughly `1/2 * numAdults * basicIncome` or $1.65 trillion. That's a lot of money, but we'll see how it all adds up at the end.
        amounts.directCosts = 1/2 * numAdults * state.basicIncome;

        // Then, **what happens to the labor force?** Would people who were previously unable to work due to ill-concieved government regulation like [welfare cliffs](https://www.illinoispolicy.org/reports/modeling-potential-income-and-welfare-assistance-benefits-in-illinois/) start working? [The number of Americans on disability has been rising too, at least partially due to people who want to work but make more money on disability.](http://apps.npr.org/unfit-for-work/) Some of them would start working again if they recieved an unconditional basic income. Alternatively, some workers may decide that their basic income revenue is enough for them and quit their jobs.
    // GDP range from -5 to 20

        return amounts;
    }

    // ## Results
    // ----------
    // The model is complete! Continue reading below to see how it is run and how results are displayed. Or, [jump right to the results.](../index.html)

    // And one more time, [here is a link to the code](https://github.com/dumbmatter/basic-income-basic-job) so you can easily generate your own model based on your own assumptions.

    // ## Run models and aggregate results
    // ----------------------------------
    // Arrays containing objects, each one the output of `basicIncomeCostBenefit` or `basicJobCostBenefit` which is an object containing all the cost/benefit components
    var biAmounts = [];
    var bjAmounts = [];

    // Arrays containing the total cost/benefit from each run, which is just one number per run
    var biTotals = [];
    var bjTotals = [];

    // Objects containing the average cost/benefit component values across all runs
    var biAmountsAvg;
    var bjAmountsAvg;

    function run(cyo) {
        // Number of simulations to run at once
        var N = 1000;

        var localState = cyo === 'CYO' ? state : defaultState;

        // Run the modesl N times and save the results
        for (var i = 0; i < N; i++) {
            biAmounts[i] = basicIncomeCostBenefit(localState);
            biTotals[i] = Object.keys(biAmounts[i]).reduce(function (total, key) {
                return biAmounts[i][key] / 1e12 + total;
            }, 0);

            bjAmounts[i] = basicJobCostBenefit(localState);
            bjTotals[i] = Object.keys(bjAmounts[i]).reduce(function (total, key) {
                return bjAmounts[i][key] / 1e12 + total;
            }, 0);
        }

        // Precompute the average values from all N simulations
        function amountsAvgReducer(avg, amounts) {
            Object.keys(amounts).forEach(function (key) {
                if (avg.hasOwnProperty(key)) {
                    avg[key] += amounts[key] / N;
                } else {
                    avg[key] = amounts[key] / N;
                }
            });

            return avg;
        }
        biAmountsAvg = biAmounts.reduce(amountsAvgReducer, {});
        bjAmountsAvg = bjAmounts.reduce(amountsAvgReducer, {});

        // This will generate and display charts based on the generated results - see the next section for details
        render(cyo);
    }

    // Run the simulations on page load
    //run();
    //run('CYO');

    // Update permalink by calling this function
    function updateUrl() {
        // Do this instead of directly setting window.location.hash to prevent adding extra history entries
        var baseUrl = window.location.origin + '/basic-income-basic-job/local/';
        var url = baseUrl + '#' + encodeURIComponent(state.regionName + ',' + state.basicIncome + ',' + numAdults + ',' + state.laborForce + ',' + state.disabledAdults);
        if (window.location.pathname.indexOf('local') >= 0) {
            window.location.replace(url);
        }
        document.getElementById('permalink').value = url;
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
            form2state(state, formEls);
        }
    /*    for (var key in formEls) {
            if (formEls.hasOwnProperty(key)) {
                if (key === 'regionName') {
                    // WARNING BIG HACK SECURITY RISK
                    value = hackyEscape(formEls[key].value);
                    state[key] = value;
                    if (document.getElementById('regionNameTitle')) { document.getElementById('regionNameTitle').innerHTML = value; }
                } else {
                    var value = parseFloat(formEls[key].value);
                    if (!isNaN(value)) {
                        console.log('set', key, 'to', value)
                        state[key] = value;
                    }
                }
            }
        }

        run('CYO');

        updateUrl();*/
    });

    // ## Display results
    // -----------------
    // Generate and display all charts
    function render(cyo) {
        cyo = cyo === 'CYO' ? 'CYO' : '';

        bars('biBars' + cyo, 'tooltip' + cyo, biAmountsAvg, bjAmountsAvg);
        bars('bjBars' + cyo, 'tooltip' + cyo, bjAmountsAvg, biAmountsAvg);

        var allTotals = biTotals.concat(bjTotals);
        var min = Math.floor(Math.min.apply(null, allTotals));
        var max = Math.ceil(Math.max.apply(null, allTotals));

        histogram('biHist' + cyo, biTotals, [min, max]);
        histogram('bjHist' + cyo, bjTotals, [min, max]);
    }

    // The histograms need to be re-rendered when the size of the window changes, otherwise they won't fit in the window correctly
    window.addEventListener('resize', render);

    // Plot one of the histograms, showing the distribution of possible costs
    function histogram(containerId, values, domain) {
        var container = document.getElementById(containerId);
        container.innerHTML = '';

        var margin = {top: 10, right: 30, bottom: 45, left: 30},
            width = container.offsetWidth - margin.left - margin.right,
            height = 200 - margin.top - margin.bottom;

        var x = d3.scale.linear()
            .domain(domain)
            .range([0, width]);

        // Generate a histogram with 10 evenly-spaced bins from input values
        var data = d3.layout.histogram()
            .bins(x.ticks(10))(values);

        var y = d3.scale.linear()
            .domain([0, d3.max(data, function (d) { return d.y; })])
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient('bottom');

        var svg = d3.select('#' + containerId).append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        var bar = svg.selectAll('.bar')
            .data(data)
            .enter().append('g')
            .attr('class', 'bar')
            .attr('transform', function (d) { return 'translate(' + x(d.x) + ',' + y(d.y) + ')'; });

        bar.append('rect')
            .attr('x', 1)
            .attr('width', x(data[0].dx + domain[0]) - 1)
            .attr('height', function (d) { return height - y(d.y); });

        svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);

        svg.append('text')
            .attr('transform', 'translate(' + (width / 2) + ' ,' + (height + margin.bottom - 5) + ')')
            .style('text-anchor', 'middle')
            .text('Cost (trillions of dollars)');
    }

    // Plot one of the bar graphs, showing the average contribution of different components to the total cost
    function bars(containerId, tooltipId, amounts, amounts2) {
        var container = document.getElementById(containerId);
        container.innerHTML = '';

        var width = 100;

        var categories = Object.keys(amounts).sort();
        var values = categories.map(function (category) {
            return amounts[category];
        });

        var categories2 = Object.keys(amounts2).sort();
        var values2 = categories2.map(function (category) {
            return amounts2[category];
        });

        var maxValue = Math.max.apply(Math, values.concat(values2));
        var minValue = Math.min.apply(Math, values.concat(values2));

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
                            return 'Costs $' + (d.value / 1e12).toFixed(2) + ' trillion';
                        }
                        return 'Reduces costs $' + (-d.value / 1e12).toFixed(2) + ' trillion';
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
console.log('state2form');

        updating = true;

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
        var cutsTaxes = 0;
        Object.keys(checkboxes).forEach(function (checkbox) {
            formEls[checkbox].checked = state[checkbox];
            if (formEls[checkbox].checked) {
                cutsTaxes += checkboxes[checkbox];
            }
        });

        formEls.cutsTaxes.value = cutsTaxes;

        if (state.cutsTaxesCustomValue === 0) {
            formEls.cutsTaxesCustomValue.value = '';
        }

        updating = false;
    }

    function form2state(state, formEls) {
console.log('form2state');

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