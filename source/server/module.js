Space.eventSourcingDebug = Space.Module.define('Space.eventSourcingDebug', {

  requiredModules: [
    'Space.eventSourcing'
  ],

  singletons: [
    'Space.eventSourcingDebug.CommitsPublication'
  ]

});
