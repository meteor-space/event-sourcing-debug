Space.messaging.Publication.extend('Space.eventSourcingDebug.Publications', {

  dependencies: {
    commits: 'Space.eventSourcing.Commits'
  },

  publications() {
    return [{
      'space-cqrs-commits'() {
        return this.commits.find();
      }
    }]
  }

});
