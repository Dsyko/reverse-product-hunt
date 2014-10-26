Meteor.startup(function () {

	AboutController = PostsListController.extend({
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
