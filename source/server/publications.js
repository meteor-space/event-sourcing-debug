Space.messaging.Publication.extend('Space.eventSourcingDebug.Publications', {

  dependencies: {
    commitsCollection: 'Space.eventSourcing.Commits'
  },

  publications() {
    return [{
      'space-eventSourcing-commits'(context, limit) {
        return this.commitsCollection.find({}, { limit: limit });
      }
    }]
  }

});
