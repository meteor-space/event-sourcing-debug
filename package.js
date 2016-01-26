Package.describe({
  name: 'space:event-sourcing-debug',
  summary: 'Debug events and commands in an event-sourced Space application.',
  version: '0.3.2',
  debugOnly: true,
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.0.1');

  api.use([
    'ecmascript',
    'space:base@4.0.1'
  ]);

  api.use([
    'space:event-sourcing@3.0.0',
    'space:messaging@3.0.1'
  ], 'server');

  api.use([
    'templating',
    'blaze-html-templates',
    'fourseven:scss@3.4.1',
    'peerlibrary:blaze-components@0.16.2',
    'space:ui@6.0.0'
  ], 'client');

  api.addFiles([
    'source/server.js',
    'source/commits/server/publication.js'
  ], 'server');

  api.addFiles([
    'source/client.js',
    'source/commits/client/commit_list.html',
    'source/commits/client/commit_list.js',
    'source/commits/client/commit_list.scss'
  ], 'client');

});
