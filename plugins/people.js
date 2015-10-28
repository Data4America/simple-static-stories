var order = [
    'chris-mccoy',
    'renee-diresta',
    'craig-montuori',
    'nate-lubin',
    'andy-barkett',
    'becky-stark',
    'alex-albright',
    'horace-dediu',
    'jessica-kirkpatrick',
    'abe-stanway',
    'robert-manduca',
    'ceslee-montgomery',
    'tatsiana-maskalevich',
    'jay-wacker',
    'david-chudzicki',
    'tess-cheatle',
    'meeyong-rao',
    'theron-tingstad',
    'elissa-redmiles',
    'zhan-li',
    'jeremy-scheff',
    'ganesh-iyer',
    'sarah-levine',
    'sam-penrose',
    'andrew-trabulsi',
    'sam-drzymala',
    'christopher-nicholson',
    'blake-masters',
    'cyan-banister',
    'ramez-naam',
    'tim-urban',
    'frank-tsai',
    'seth-kaddish',
    'kyle-wiley',
    'britt-crawford',
    'waylin-ross',
    'susan-gentz',
    'chris-belsky'
];

function sortObjective(p) {
    // Sort by role, then by position in "order" above, then alphabetical by last name
    return (p.founder ? 1e9 : 0) + 
           (p.boardOfDirectors ? 1e8 : 0) + 
           (p.editorialBoard ? 1e7 : 0) + 
           (p.advisor ? 1e6 : 0) +
           (order.length - order.indexOf(p.id)) * 1e4 +
           -p.id.split('-')[1][0].charCodeAt(); //
}

module.exports = function(env, callback) {
    var defaults, getPeople, key, options, value;
    defaults = {
        people: 'authors'
    };
    options = {};
    for (key in defaults) {
        value = defaults[key];
        if (options[key] == null) {
            options[key] = defaults[key];
        }
    }
    getPeople = function(contents) {
        var people;
        people = contents[options.people]._.pages.map(function(item) {
            return item.metadata;
        });
        people.sort(function(a, b) {
            return sortObjective(b) - sortObjective(a);
        });
        return people;
    };
    env.helpers.getPeople = getPeople;
    return callback();
};
