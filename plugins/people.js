function sortObjective(p) {
  // Sort by role, then by last name
  return (p.founder ? 1e9 : 0) + 
         (p.boardOfDirectors ? 1e8 : 0) + 
         (p.editorialBoard ? 1e7 : 0) + 
         (p.advisor ? 1e6 : 0) +
         -p.id.split('-')[1][0].charCodeAt();
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
