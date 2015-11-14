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
            regionName: ['', ''],
            numAdults: [0, ''],
            taxAsPercentGdp: [0, ''],
            gdp: [0, ''],
            basicIncome: 7.25 * 40 * 50,
            basicIncomeType: 'minimumWage',
            ubiOrNit: 'nit',
            cutsTaxes: [],
            gdpRangeMin: -1,
            gdpRangeMax: 1
        };
/*    var defaultState = {
        regionName: ['USA', 'https://en.wikipedia.org/wiki/United_States'],
        numAdults: [245000000, 'http://quickfacts.census.gov/qfd/states/00000.html'],
        taxAsPercentGdp: [0.243, 'http://www.taxpolicycenter.org/taxfacts/displayafact.cfm?Docid=307&Topic2id=95'],
        gdp: [17.4, 'http://data.worldbank.org/indicator/NY.GDP.MKTP.CD?order=wbapi_data_value_2014+wbapi_data_value+wbapi_data_value-last&sort=desc'],
        basicIncome: 7.25 * 40 * 50,
        basicIncomeType: 'minimumWage',
        ubiOrNit: 'nit',
        cutsTaxes: [
            ['Eliminate redundant welfare', '375', 'http://www.usbig.net/papers/144-Sheahen-RefundableTaxCredit.pdf'],
            ['Eliminate tax loopholes', '740', 'http://www.usbig.net/papers/144-Sheahen-RefundableTaxCredit.pdf'],
            ['Cut defense spending in half', '300', 'https://en.wikipedia.org/wiki/2010_United_States_federal_budget'],
            ['Eliminate Social Security', '695', 'https://en.wikipedia.org/wiki/2010_United_States_federal_budget'],
            ['Eliminate Medicaid', '290', 'https://en.wikipedia.org/wiki/2010_United_States_federal_budget'],
            ['Raises taxes on top 1% to 40%', '157', 'http://www.nytimes.com/2015/10/17/business/putting-numbers-to-a-tax-increase-for-the-rich.html']
        ],
        gdpRangeMin: -5,
        gdpRangeMax: 15
    };*/
    var updating = false;

    // Allow overriding the default values, based on parameters supplied in the URL. These will automatically be updated when the form is submitted.
    var hash = decodeURIComponent(window.location.hash);
    if (hash) {
        var state = hash2state(hash.slice(1)); // Get rid of # before passing to function
    } else {
        var state = defaultState;
    }

    // I can hear you already! Maybe you don't want to cut all the programs I just proposed to cut. Maybe you want to cut some things that I didn't cut, such as defense spending. Here's the beauty of this model: [it's simple and it's open source](https://github.com/dumbmatter/basic-income-basic-job). With a little bit of programming knowledge, you can change these assumptions and see how it adds up. For example, you could keep Medicaid by cutting defense spending by 50%. The important thing is to do the math.

    // ## Basic income model
    // ---------------------
    // Now, we're going to enumerate all the costs and benefits associated with a basic income.

    function cutsTaxesTotal(cutsTaxes) {
        return cutsTaxes.reduce(function (total, cutTax) {
            var parsed = parseInt(cutTax[1], 10);
            if (isNaN(parsed)) {
                return total;
            }
            return total + parsed;
        }, 0);
    }

    function basicIncomeCostBenefit(state) {
        // This object will store all the costs and benefits of the basic income as key/value pairs. Values are in trillions. Costs are positives, benefits are negative.
        var amounts = {};

        var factor = state.ubiOrNit === 'ubi' ? 1 : 0.5;
        amounts.directCosts = factor * state.numAdults[0] * state.basicIncome / 1e12;
        amounts.directSavings = -cutsTaxesTotal(state.cutsTaxes) / 1000;

        amounts.economicGrowth = -0.01 * (state.gdpRangeMin + state.gdpRangeMax) / 2 * state.taxAsPercentGdp[0] * state.gdp[0];

        return amounts;
    }

    // ## Results
    // ----------
    // The model is complete! Continue reading below to see how it is run and how results are displayed. Or, [jump right to the results.](../index.html)

    // And one more time, [here is a link to the code](https://github.com/dumbmatter/basic-income-basic-job) so you can easily generate your own model based on your own assumptions.

    // ## Run model
    // ----------------------------------
    var biAmounts, biTotal, biTotalStddev;
    function run(state) {
        // The output of `basicIncomeCostBenefit` is an object containing all the cost/benefit components
        biAmounts = basicIncomeCostBenefit(state);

        // The total cost/benefit
        biTotal = Object.keys(biAmounts).reduce(function (total, key) {
            return biAmounts[key] + total;
        }, 0);

        // Assume the input max and min are 2 standard deviations from the mean
        biTotalStddev = 0.01 * (state.gdpRangeMax - state.gdpRangeMin) / 4 * state.taxAsPercentGdp[0] * state.gdp[0];

        // This will generate and display charts based on the generated results - see the next section for details
        render();
    }

    // Update permalink by calling this function
    function updateUrl() {
        // Do this instead of directly setting window.location.hash to prevent adding extra history entries
        var baseUrl = window.location.origin + '/basic-income/custom/';
        var url = baseUrl + '#' + encodeURIComponent(state2hash(state));
        document.getElementById('cliptext').value = url;
    }

    // Initialize UI
    function initSourceFields() {
        var els = document.getElementsByClassName('ubiSource');
        for (var i = 0; i < els.length; i++) {
            els[i].innerHTML = '<a onclick="(function () { console.log(this); this.parentElement.childNodes[1].style.display = \'block\'; this.style.display = \'none\'; }.bind(this)())">+ Add Source</a><input type="text" placeholder="Source URL" id="' + els[i].dataset.name + '" style="display: none" />';
        }
    }

    initSourceFields();

    var formEls = {
        regionName: document.getElementById('regionName'),
        regionNameSource: document.getElementById('regionNameSource'),
        numAdults: document.getElementById('numAdults'),
        numAdultsSource: document.getElementById('numAdultsSource'),
        taxAsPercentGdp: document.getElementById('taxAsPercentGdp'),
        taxAsPercentGdpSource: document.getElementById('taxAsPercentGdpSource'),
        gdp: document.getElementById('gdp'),
        gdpSource: document.getElementById('gdpSource'),
        basicIncome: document.getElementById('basicIncome'),
        basicIncomeType: document.getElementsByName('basicIncomeType'),
        ubiOrNit: document.getElementsByName('ubiOrNit'),
        cutsTaxes: document.getElementById('cutsTaxes'),
        cutsTaxesEntries: document.getElementById('cutsTaxesEntries'), // cutsTaxesEntries children are dynamic!
        gdpRangeMin: document.getElementById('gdpRangeMin'),
        gdpRangeMax: document.getElementById('gdpRangeMax')
    };

    var textEls = {
        reviewNumAdults: document.getElementById('reviewNumAdults'),
        reviewGdp: document.getElementById('reviewGdp'),
        reviewTaxAsPercentGdp: document.getElementById('reviewTaxAsPercentGdp'),
        reviewBasicIncome: document.getElementById('reviewBasicIncome'),
        reviewUbiOrNit: document.getElementById('reviewUbiOrNit'),
        reviewCutsTaxes: document.getElementById('reviewCutsTaxes'),
        reviewGdpRangeMin: document.getElementById('reviewGdpRangeMin'),
        reviewGdpRangeMax: document.getElementById('reviewGdpRangeMax'),
        regionNameText: document.getElementsByClassName('regionNameText')
    };

    state2form(state, formEls, textEls);
    $("#customize-form").on('change', 'input', function() {
        if (!updating) {
            updating = true;
            form2state(state, formEls);
            updating = false;
        }

        run(state);
    });

    // Run the simulations when lastSlide becomes visible
    $(document).on('lastSlide', function () {
        run(state);
    });

    $('.ubi-popup').popup({
        on: 'click'
    });

    run(state);

    // ## Display results
    // -----------------
    // Generate and display all charts
    function render() {
        bars('biBars', biAmounts);

        distribution('biDist', biTotal, biTotalStddev);

        updateUrl();
    }

    // The distribution needs to be re-rendered when the size of the window changes, otherwise it won't fit in the window correctly
    window.addEventListener('resize', render);

    // Plot the distribution of possible costs
    function distribution(containerId, mean, stddev) {
        var container = document.getElementById(containerId);
        container.innerHTML = '';

        var data = [];

        var N = 1000;
        var minx = mean - 5 * stddev;
        if (minx > 0) {
            minx = 0;
        }
        var maxx = mean + 5 * stddev;
        if (maxx < 0) {
            maxx = 0;
        }
        var dx = (maxx - minx) / N;
        var xval = minx;
        var k1 = 1 / (stddev * Math.sqrt(2 * Math.PI));
        var k2 = -1 / (2 * Math.pow(stddev, 2));
        for (var i = 0; i < N; i++) {
            data.push({
                x: xval,
                y: k1 * Math.exp(k2 * Math.pow(xval - mean, 2))
            })
            xval += dx;
        }

        data.forEach(function(d) {
          d.date = d.x;
          d.close = d.y;
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
            .orient('bottom')
            .ticks(5);

        var area = d3.svg.area()
            .x(function(d) { return x(d.x); })
            .y0(height)
            .y1(function(d) { return y(d.y); });

        var svg = d3.select('#' + containerId).append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        x.domain(d3.extent(data, function(d) {
            return d.x;
        }));
        y.domain(d3.extent(data, function(d) {
            return d.y;
        }));

        svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);

        svg.append("path")
            .datum(data.filter(function (d) { return d.x > 0; }))
            .attr("class", "area positive")
            .attr("d", area);

        svg.append("path")
            .datum(data.filter(function (d) { return d.x < 0; }))
            .attr("class", "area negative")
            .attr("d", area);

        var today = new Date();
        var dd = today.getDate();    //<<===== no need
        var mm = today.getMonth()+1; //January is 0!   //<<===== no need
        var yyyy = today.getFullYear();  //<<===== no need


        svg.append("line")
            .attr("x1", x(0))
            .attr("y1", 0)
            .attr("x2", x(0))
            .attr("y2", height)
            .attr("class", "vertical-line");

        svg.append('text')
            .attr('transform', 'translate(' + (width / 2) + ' ,' + (height + margin.bottom - 5) + ')')
            .style('text-anchor', 'middle')
            .text('Cost (trillions of dollars)');
    }

    // Plot one of the bar graphs, showing the average contribution of different components to the total cost
    function bars(containerId, amounts) {
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

        var rows = d3.select('#' + containerId)
            .selectAll('table')
            .data(data)
            .enter().append('tr');

        rows.append('td')
            .html(function (d) { return d.category; });

        rows.append('td')
            .append('div')
            .style('width', function (d) { return d.width + 'px'; })
            .style('height', '1em')
            .style('margin-left', function (d) { return d.offset + 'px'; })
            .style('background-color', function (d) { return d.sign === 1 ? 'firebrick' : 'steelblue'; });

        rows.append('td')
            .html(function (d) { return formatTrillions(d.value); })
    }

    // ## Utility functions
    // --------------------

    function formatTrillions(num) {
        var str = '';
        if (num < 0) {
            str += '-';
            num = -num;
        }
        str += '$' + num.toFixed(2) + 'T';
        return str;
    }

    // ## WARNING WARNING SECURITY HOLE
    function hackyEscape(string) {
        return string.replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function cutsTaxesRow(entry, i) {
        entry = entry !== undefined ? entry : ['', '', ''];

        return '<div class="cutsTaxesRemoveContainer"><a class="cutsTaxesRemove" data-i="' + i + '">X</a></div><div class="three fields"><div class="eight wide field"><input type="text" name="cutsTaxesName" placeholder="Name" value="' + entry[0] + '"></div><div class="two wide field">' + '<input type="text" name="cutsTaxesAmount" placeholder="Amount (billions of $)" value="' + entry[1] + '"></div><div class="six wide field">' + '<input type="text" name="cutsTaxesSource" placeholder="Source URL" value="' + entry[2] + '"></div></div>';
    }

    function addCutsTaxesRow() {
        state.cutsTaxes.push(['', '', '']);

        state2form(state, formEls, textEls);
    }

    function removeCutsTaxesRow(e) {
        var i = parseInt(e.target.dataset.i);

        if (!isNaN(i)) {
            state.cutsTaxes.splice(i, 1);
        }

        state2form(state, formEls, textEls);
    }

    function state2form(state, formEls, textEls) {
        // Normal inputs
        var input = ['basicIncome', 'gdpRangeMin', 'gdpRangeMax'];
        input.forEach(function (input) {
            if (formEls[input]) {
                formEls[input].value = state[input];
            }
        });

        // Sourced inputs
        var input = ['regionName', 'numAdults', 'taxAsPercentGdp', 'gdp'];
        input.forEach(function (input) {
            if (formEls[input]) {
                formEls[input].value = state[input][0];
            }
            if (formEls[input + 'Source']) {
                formEls[input + 'Source'].value = state[input][1];
            }
        });

        // Radio buttons
        var groups = ['basicIncomeType', 'ubiOrNit'];
        groups.forEach(function (group) {
            for (var i = 0; i < formEls[group].length; i++) {
                var radio = formEls[group][i];
                radio.checked = radio.value === state[group];

                if (group === 'basicIncomeType' && radio.value === 'custom') {
                    if (radio.checked) {
                        formEls.basicIncome.disabled = false;
                    } else {
                        formEls.basicIncome.disabled = true;
                    }
                }
            }
        })

        // cutsTaxes stuff
        if (formEls.cutsTaxes) {
            formEls.cutsTaxes.value = cutsTaxesTotal(state.cutsTaxes);
        }
        if (formEls.cutsTaxesEntries) {
            formEls.cutsTaxesEntries.innerHTML = '';
            state.cutsTaxes.forEach(function (entry, i) {
                formEls.cutsTaxesEntries.innerHTML += cutsTaxesRow(entry, i);
            });
            formEls.cutsTaxesEntries.innerHTML += '<a id="cutsTaxesAdd">+ Add</a>';
            document.getElementById('cutsTaxesAdd').addEventListener('click', addCutsTaxesRow);
            Array.prototype.forEach.call(document.getElementsByClassName('cutsTaxesRemove'), function (removeEl) {
                removeEl.addEventListener('click', removeCutsTaxesRow);
            });
        }

        // Review slide, other text content
        if (textEls.reviewNumAdults) {
            textEls.reviewNumAdults.innerHTML = state.numAdults[0];
        }
        if (textEls.reviewGdp) {
            textEls.reviewGdp.innerHTML = state.gdp[0];
        }
        if (textEls.reviewTaxAsPercentGdp) {
            textEls.reviewTaxAsPercentGdp.innerHTML = state.taxAsPercentGdp[0];
        }
        if (textEls.reviewBasicIncome) {
            textEls.reviewBasicIncome.innerHTML = state.basicIncome;
        }
        if (textEls.reviewUbiOrNit) {
            textEls.reviewUbiOrNit.innerHTML = state.ubiOrNit.toUpperCase();
        }
        if (textEls.reviewCutsTaxes) {
            textEls.reviewCutsTaxes.innerHTML = cutsTaxesTotal(state.cutsTaxes);
        }
        if (textEls.reviewGdpRangeMin) {
            textEls.reviewGdpRangeMin.innerHTML = state.gdpRangeMin;
        }
        if (textEls.reviewGdpRangeMax) {
            textEls.reviewGdpRangeMax.innerHTML = state.gdpRangeMax;
        }
        if (textEls.regionNameText) {
            for (var i = 0; i < textEls.regionNameText.length; i++) {
                textEls.regionNameText[i].innerHTML = state.regionName[0];
            }
        }
    }

    function form2state(state, formEls) {
        // Sourced text inputs
        state.regionName[0] = escape(formEls.regionName.value);

        // Integer inputs
        var input = ['basicIncome', 'gdpRangeMin', 'gdpRangeMax'];
        input.forEach(function (input) {
            if (!isNaN(parseInt(formEls[input].value, 10))) {
                state[input] = parseInt(formEls[input].value, 10);
            }
        });

        // Sourced integer inputs
        input = ['numAdults'];
        input.forEach(function (input) {
            if (!isNaN(parseInt(formEls[input].value, 10))) {
                state[input][0] = parseInt(formEls[input].value, 10);
            }
        });

        // Sourced float inputs
        input = ['taxAsPercentGdp', 'gdp'];
        input.forEach(function (input) {
            if (!isNaN(parseFloat(formEls[input].value))) {
                state[input][0] = parseFloat(formEls[input].value);
            }
        });

        // Sources
        input = ['regionName', 'numAdults', 'taxAsPercentGdp', 'gdp'];
        input.forEach(function (input) {
            state[input][1] = escape(formEls[input + 'Source'].value);
        });

        // Radio buttons
        var groups = ['basicIncomeType', 'ubiOrNit'];
        groups.forEach(function (group) {
            for (var i = 0; i < formEls[group].length; i++) {
                var radio = formEls[group][i];
                if (radio.checked) {
                    state[group] = radio.value;
                }
            }
        });
        if (state.basicIncomeType === '10k') {
            state.basicIncome = 10000;
        } else if (state.basicIncomeType === 'minimumWage') {
            state.basicIncome = 7.25 * 40 * 50;
        } else if (state.basicIncomeType === '20k') {
            state.basicIncome = 20000;
        } else {
            state.basicIncomeType = 'custom';
        }

        if (state.gdpRangeMin >= state.gdpRangeMax) {
            state.gdpRangeMax = state.gdpRangeMin + 1;
        }

        // cutsTaxes
        var names = document.getElementsByName('cutsTaxesName');
        var amounts = document.getElementsByName('cutsTaxesAmount');
        var sources = document.getElementsByName('cutsTaxesSource');
        state.cutsTaxes = Array.prototype.map.call(names, function (name, i) {
            return [escape(name.value), escape(amounts[i].value), escape(sources[i].value)];
        });

        // Sync
        state2form(state, formEls, textEls);
    }

    function state2hash(state) {
        var sortedKeys = Object.keys(state).sort();

        var values = sortedKeys.map(function (key) {
            return state[key];
        });

        var hash = JSON.stringify(values);

        return hash;
    }
    function hash2state(hash) {
        var sortedKeys = Object.keys(defaultState).sort();

        var values = JSON.parse(hash);

        if (sortedKeys.length !== values.length) {
            console.log('Hash has wrong number of values');
        }

        var localState = {};
        sortedKeys.forEach(function (key, i) {
            localState[key] = values[i];
        });

        return localState;
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

    // From underscore.js
    // List of HTML entities for escaping.
    var escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '`': '&#x60;'
    };

    // Functions for escaping and unescaping strings to/from HTML interpolation.
    var createEscaper = function(map) {
      var escaper = function(match) {
        return map[match];
      };
      // Regexes for identifying a key that needs to be escaped
      var source = '(?:' + Object.keys(map).join('|') + ')';
      var testRegexp = RegExp(source);
      var replaceRegexp = RegExp(source, 'g');
      return function(string) {
        string = string == null ? '' : '' + string;
        return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
      };
    };
    var escape = createEscaper(escapeMap);
}

(function() {
    var setIntervalId = setInterval(function() {
        if (window.jQuery) {
            try {
                basicIncomeInit();
            } catch (e) {
                throw e;
            } finally {
                clearInterval(setIntervalId);
            }
        }
    }, 100);
}());