importScripts( '/cloud/cache-polyfill.js' );

var filesToCache = [
  // root
  '/cloud/',
  '/cloud/index.html',
  // css
  '/cloud/assets/css/main.css',
  '/cloud/assets/css/normalize.css',
  '/cloud/assets/css/syntax.css',
  // images
  '/cloud/assets/img/octocat.png',
  // pages
  '/cloud/agile_index.html','/cloud/best_practices_index.html','/cloud/data_index.html','/cloud/getting_started_index.html','/cloud/lean_index.html','/cloud/open_source_index.html','/cloud/patterns_index.html','/cloud/security_index.html','/cloud/setting_up_index.html','/cloud/testing_index.html','/cloud/tools','/cloud/supported_tools.html','/cloud/tools_index.html','/cloud/jekyll/update/2013/11/20/welcome-to-jekyll.html',
  // posts
  '/cloud/jekyll/update/2013/11/20/welcome-to-jekyll.html',
];

self.addEventListener( 'install', function( e ) {
  e.waitUntil(
    caches.open( '' )
      .then( function( cache ) {
        return cache.addAll( filesToCache );
    })
  );
});

self.addEventListener( 'fetch', function( event ) {
  event.respondWith(
    caches.match( event.request ).then( function( response ) {
      return response || fetch( event.request );
    })
 );
});
