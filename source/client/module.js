Space.eventSourcingDebug = Space.Module.define('Space.eventSourcingDebug', {

  dependencies: {
    mongo: 'Mongo'
  },

  requiredModules: [
    'Space.ui',
    'Space.flux',
    'Space.messaging'
  ],

  stores: [
    'Space.eventSourcingDebug.CommitsStore'
  ],

  components: [
    'Space.eventSourcingDebug.CommitsListComponent'
  ],

  singletons: [
    'Space.eventSourcingDebug.CommitsTracker'
  ],

  onInitialize() {
    const commits = new this.mongo.Collection('space_eventSourcing_commits');
    this.injector.map('Space.eventSourcing.Commits').to(commits);
    this.injector.map('SubsManager').to(SubsManager);
  }

});
