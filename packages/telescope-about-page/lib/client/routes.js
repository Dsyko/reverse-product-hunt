Meteor.startup(function () {

	AboutController = RouteController.extend({
    view: 'about'
  });

  Router.map(function() {

    // About Page

    this.route('about', {
      path: '/about',
      controller: AboutController
    });
  });

});
