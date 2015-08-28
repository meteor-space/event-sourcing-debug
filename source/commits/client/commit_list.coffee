class Space.cqrs.debug.CommitListComponent extends Space.ui.BlazeComponent

  @register 'space_cqrs_debug_commit_list'

  Dependencies:
    commits: 'Space.cqrs.Commits'
    ejson: 'EJSON'
    utils: 'underscore'

  setReactiveState: ->
    commits: =>
      @commits.find({}, sort: insertedAt: -1).map (commit) =>
        # Map domain events
        commit.changes.events = commit.changes.events.map (event) =>
          event = @_parseEJSON event
          event.$value = @_beautifyJSONOutput event.$value
          return event
        # Map domain commands
        commit.changes.commands = commit.changes.commands.map (command) =>
          command = @_parseEJSON command
          command.$value = @_beautifyJSONOutput command.$value
          return command
        return commit

  dateString: (date) -> date.toISOString()

  _parseEJSON: (ejson) ->
    return @_ejsonFromJSON JSON.parse(ejson)

  _ejsonFromJSON: (json) ->
    if json? and json.$value?
      if @utils.isObject(json.$value)
        for key, value of json.$value
          json.$value[key] = @_ejsonFromJSON(value)
      else
        json = ejson.$value
    return json

  _beautifyJSONOutput: (value) ->
    value = JSON.stringify value, null, 4
    value = value.replace /[\{\}\"\,]/g, '' # remove noise
    value = value.replace /\n\s*\n/g, '\n' # remove newlines
