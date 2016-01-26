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
    'source/server/module.js',
    'source/server/publications.js'
  ], 'server');

  api.addFiles([
    'source/client/module.js',
    'source/client/components/commit-list/commit-list.html',
    'source/client/components/commit-list/commit-list.js',
    'source/client/components/commit-list/commit_list.scss'
  ], 'client');

});
