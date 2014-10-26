Package.describe({summary: "Telescope about package"});

Package.onUse(function (api) {

  api.use(['telescope-lib', 'telescope-base', 'aldeed:simple-schema'], ['client', 'server']);

  api.use([
    'jquery',
    'underscore',
    'iron:router',
    'templating'
  ], 'client');

  api.add_files(['lib/about.js'], ['client', 'server']);

  api.add_files([
    'lib/client/routes.js',
    'lib/client/views/about.html',
    'lib/client/css/about.css'
    ], ['client']);
  
  api.export(['viewParameters']);
});