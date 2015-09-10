class Space.eventSourcing.debug extends Space.ui.Module

  @publish this, 'Space.eventSourcing.debug'

  RequiredModules: ['Space.ui']

  Components: [
    'Space.eventSourcing.debug.CommitListComponent'
  ]

  Dependencies:
    mongo: 'Mongo'

  configure: ->
    super
    commits = new @mongo.Collection 'space_cqrs_commits'
    @injector.map('Space.eventSourcing.Commits').to commits
