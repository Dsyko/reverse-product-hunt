Package.describe({summary: "Telescope Product Hunt theme"});

Package.onUse(function (api) {

	api.use(['telescope-theme-hubble'], ['client']);

	api.add_files([
		'lib/producthunt.js'
	], ['client', 'server']);

	api.add_files([
		'lib/client/style/product-hunt-theme.css',
	], ['client']);

});