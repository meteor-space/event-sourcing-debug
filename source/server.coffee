class Space.cqrs.debug extends Space.Module

  @publish this, 'Space.cqrs.debug'

  RequiredModules: ['Space.cqrs']

  Singletons: [
    'Space.cqrs.debug.CommitsPublication'
  ]
