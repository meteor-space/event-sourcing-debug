Space.flux.Store.extend('Space.eventSourcingDebug.CommitsStore', {

  dependencies: {
    commitsCollection: 'Space.eventSourcing.Commits'
  },

  sessionVars(){
    return [{
      limit: 100
    }]
  },

  eventSubscriptions() {
    return [{
      'Space.eventSourcingDebug.CommitsLimitChanged': this._onCommitsLimitChanged
    }];
  },

  commits() {
    return this.commitsCollection.find({}, { sort: { insertedAt: -1 } });
  },

  _onCommitsLimitChanged(event) {
    if (event.limit === this.limit()) {
      this._setSessionVar('limit', event.limit);
    }
  }

});
