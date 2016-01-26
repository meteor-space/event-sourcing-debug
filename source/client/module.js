Space.eventSourcingDebug = Space.Module.define('Space.eventSourcingDebug', {

  dependencies: {
    mongo: 'Mongo'
  },

  requiredModules: [
    'Space.ui'
  ],

  components: [
    'Space.eventSourcingDebug.CommitListComponent'
  ],

  onInitialize() {
    const commits = new this.mongo.Collection('space_eventSourcing_commits');
    this.injector.map('Space.eventSourcing.Commits').to(commits);
  }

});
