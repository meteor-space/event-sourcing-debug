class Space.cqrs.debug.CommitsPublication

  Dependencies:
    meteor: 'Meteor'
    commits: 'Space.cqrs.Commits'

  onDependenciesReady: ->
    @meteor.publish 'space-cqrs-commits', => @commits.find()
