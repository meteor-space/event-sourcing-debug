class Space.cqrs.debug extends Space.ui.Module

  @publish this, 'Space.cqrs.debug'

  RequiredModules: ['Space.ui']

  Components: [
    'Space.cqrs.debug.CommitListComponent'
  ]

  Dependencies:
    mongo: 'Mongo'

  configure: ->
    super
    commits = new @mongo.Collection 'space_cqrs_commits'
    @injector.map('Space.cqrs.Commits').to commits
