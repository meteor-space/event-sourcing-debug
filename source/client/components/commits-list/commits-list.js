Space.ui.BlazeComponent.extend('Space.eventSourcingDebug.CommitsListComponent', {

  dependencies: {
    commitsStore: 'Space.eventSourcingDebug.CommitsStore',
    ejson: 'EJSON',
    utils: 'underscore'
  },

  commits() {
    return this.commitsStore.commits().map((commit) => {
      // Prepare event data for display
      commit.changes.events = commit.changes.events.map((event) => {
        event.value = this._formatDataForDisplay(event.data);
        return event
      });
      // Prepare command data for display
      commit.changes.commands = commit.changes.commands.map((command) => {
        command.value = this._formatDataForDisplay(command.data);
        return command;
      });
      return commit
    });
  },

  dateString(date) {
    return date.toISOString()
  },

  _formatDataForDisplay(data) {
    value = JSON.stringify(data, null, 4);
    value = value.replace(/[\{\}\"\,]/g, '');
    return value = value.replace(/\n\s*\n/g, '\n');
  }

})
  // Register blaze-component for template
  .register('space_eventSourcing_debug_commits_list');
