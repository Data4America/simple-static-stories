module.exports = (env, callback) ->

  # directory containing contents
  defaults = people: 'authors' 

  # assign defaults any option not set in the config file
  options = {}
  for key, value of defaults
    options[key] ?= defaults[key]

  getPeople = (contents) ->
    # helper that returns a list of people found in the contents folder
    # note that each person is assumed to have his own file in the people directory
    people = contents[options.people]._.pages.map (item) -> item.metadata
    people.sort (a, b) -> b.date - a.date
    return people

  # add the helper to the environment so we can use it later
  env.helpers.getPeople = getPeople

  # tell the plugin manager we are done
  callback()