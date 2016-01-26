Space.eventSourcingDebug = Space.Module.define('Space.eventSourcingDebug', {

  requiredModules: [
    'Space.eventSourcing',
    'Space.messaging'
  ],

  singletons: [
    'Space.eventSourcingDebug.Publications'
  ]

});
