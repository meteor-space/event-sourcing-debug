Package.describe({
  name: 'space:event-sourcing-debug',
  summary: 'Debug events and commands in an event-sourced Space application.',
  version: '0.4.0',
  debugOnly: true,
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.0.1');

  api.use([
    'ecmascript',
    'space:base@4.1.1',
    'meteorhacks:subs-manager@1.6.2'
  ]);

  api.use([
    'space:event-sourcing@3.0.0',
    'space:messaging@3.1.1'
  ], 'server');

  api.use([
    'fourseven:scss@3.4.1',
    'peerlibrary:blaze-components@0.16.2',
    'space:ui@6.0.0',
    'space:flux@0.7.0'
  ], 'client');

  api.addFiles([
    'source/server/module.js',
    'source/server/publications.js'
  ], 'server');

  api.addFiles([
    'source/client/module.js',
    'source/client/events.js',
    'source/client/stores/commits-store.js',
    'source/client/trackers/commits-tracker.js',
    'source/client/components/commits-list/commits-list.html',
    'source/client/components/commits-list/commits-list.js',
    'source/client/components/commits-list/commits-list.scss'
  ], 'client');

});
