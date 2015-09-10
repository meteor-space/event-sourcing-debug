class Space.eventSourcing.debug extends Space.Module

  @publish this, 'Space.eventSourcing.debug'

  RequiredModules: ['Space.eventSourcing']

  Singletons: [
    'Space.eventSourcing.debug.CommitsPublication'
  ]
