Package.describe({
  name: 'space:cqrs-debug',
  version: '0.1.0',
  summary: 'Visual debugging for space:cqrs.',
  debugOnly: true
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');

  api.use([
    'coffeescript',
    'templating',
    'fourseven:scss@0.9.6',
    'peerlibrary:blaze-components@0.9.2',
    'space:cqrs@5.0.0',
    'space:ui@5.1.0',
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
