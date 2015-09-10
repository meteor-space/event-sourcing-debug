Package.describe({
  name: 'space:event-sourcing-debug',
  version: '0.3.0',
  summary: 'Debug events and commands in an event-sourced Space application.',
  debugOnly: true
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');

  api.use([
    'coffeescript',
    'templating',
    'fourseven:scss@3.1.1',
    'peerlibrary:blaze-components@0.12.0',
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
