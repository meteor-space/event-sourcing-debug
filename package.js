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
    'coffeescript',
    'templating',
    'blaze-html-templates',
    'fourseven:scss@3.4.1',
    'peerlibrary:blaze-components@0.16.2',
    'space:event-sourcing@1.2.0',
    'space:ui@5.3.0',
  ]);

  api.addFiles([
    'source/server.coffee',
    'source/commits/server/cqrs_commits_publication.coffee'
  ], 'server');

  api.addFiles([
    'source/client.coffee',
    'source/commits/client/commit_list.html',
    'source/commits/client/commit_list.coffee',
    'source/commits/client/commit_list.scss'
  ], 'client');

});
