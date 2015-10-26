class Space.eventSourcingDebug.CommitsPublication

  Dependencies:
    meteor: 'Meteor'
    commits: 'Space.eventSourcing.Commits'

  onDependenciesReady: ->
    @meteor.publish 'space-cqrs-commits', => @commits.find()
