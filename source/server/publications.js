Space.messaging.Publication.extend('Space.eventSourcingDebug.Publications', {

  dependencies: {
    commits: 'Space.eventSourcing.Commits'
  },

  publications() {
    return [{
      'space-eventSourcing-commits'() {
        return this.commits.find();
      }
    }]
  }

});
