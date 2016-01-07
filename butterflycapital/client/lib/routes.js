Router.route('/', {
    template: 'home',
	waitOn: function () {
    return Meteor.subscribe('users');
	}
});

Router.route('/register', {
    template: 'register'
});

Router.route('/charts', {
    template: 'chart'
});

