class Space.eventSourcingDebug extends Space.ui.Module

  @publish this, 'Space.eventSourcingDebug'

  RequiredModules: ['Space.ui']

  Components: [
    'Space.eventSourcingDebug.CommitListComponent'
  ]

  Dependencies:
    mongo: 'Mongo'

  configure: ->
    super
    commits = new @mongo.Collection 'space_cqrs_commits'
    @injector.map('Space.eventSourcing.Commits').to commits
