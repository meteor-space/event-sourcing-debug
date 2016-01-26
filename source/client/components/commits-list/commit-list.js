Space.flux.BlazeComponent.extend('Space.eventSourcingDebug.CommitListComponent', {

  dependencies: {
    commits: 'Space.eventSourcing.Commits',
    ejson: 'EJSON',
    utils: 'underscore'
  },

  commits() {
    this.commits.find({}, { sort: { insertedAt: -1 } }).map((commit) => {
      // Map domain events
      commit.changes.events = commit.changes.events.map((event) => {
        event = this._parseEJSON(event);
        event.$value = this._beautifyJSONOutput(event.$value);
        return event
      });
      // Map domain commands
      commit.changes.commands = commit.changes.commands.map((command) => {
        command = this._parseEJSON(command);
        command.$value = this._beautifyJSONOutput(command.$value);
        return command;
      });
      return commit
    });
  },

  dateString(date) {
    return date.toISOString()
  },

  _parseEJSON(ejson) {
    return this._ejsonFromJSON(JSON.parse(ejson))
  },

  _ejsonFromJSON(json) {
    var key, ref, value;
    if ((json != null) && (json.$value != null)) {
      if (this.utils.isObject(json.$value)) {
        ref = json.$value;
        for (key in ref) {
          value = ref[key];
          json.$value[key] = this._ejsonFromJSON(value);
        }
      } else {
        json = ejson.$value;
      }
    }
    return json;
  },

  _beautifyJSONOutput(value) {
    value = JSON.stringify(value, null, 4);
    value = value.replace(/[\{\}\"\,]/g, '');
    return value = value.replace(/\n\s*\n/g, '\n');
  }

});

Space.eventSourcingDebug.CommitListComponent.register('space_eventSourcing_debug_commit_list');
