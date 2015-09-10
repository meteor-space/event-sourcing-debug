class Space.eventSourcingDebug extends Space.Module

  @publish this, 'Space.eventSourcingDebug'

  RequiredModules: ['Space.eventSourcing']

  Singletons: [
    'Space.eventSourcingDebug.CommitsPublication'
  ]
