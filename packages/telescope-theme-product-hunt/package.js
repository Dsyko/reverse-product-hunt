Package.describe({summary: "Telescope Product Hunt theme"});

Package.onUse(function (api) {

	api.use(['templating', 'telescope-base', 'telescope-theme-hubble'], ['client']);

	api.add_files([
		'lib/client/style/product-hunt-theme.css',
		'lib/client/templates/ph_nav.html',
		'lib/client/templates/ph_submit_button.html',
		'lib/client/producthunt.js'
	], ['client']);

});