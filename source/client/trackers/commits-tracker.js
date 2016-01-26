Space.messaging.Tracker.extend('Space.eventSourcingDebug.CommitsTracker', {

  dependencies: {
    commitsStore: 'Space.eventSourcingDebug.CommitsStore',
    subsManager: 'SubsManager'
  },

  _subsManager: null,

  onDependenciesReady() {
    // Use a SubsManager to cache previously loaded subscription data
    this._subsManager = new this.subsManager();
    Space.messaging.Tracker.prototype.onDependenciesReady.call(this)
  },

  autorun() {
    let limit = this.commitsStore.limit();
    if(limit == null) return;
    // Subscribe to commits
    this._subsManager.subscribe('space-eventSourcing-commits', limit);
  }

});
