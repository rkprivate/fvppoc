Template.register.events({
    'submit form': function(event, template){
        event.preventDefault();
        var username = event.target.username.value;
        var password = event.target.password.value;
	var email = event.target.email.value;
	Accounts.createUser({
	    username: username,
            email: email,
            password: password,
	    function(error){
		    if(error){
			console.log(error.reason);
			var message = error.reason;
			console.log(message);
		    } else {
			Router.go("/");
		    }
	    }
        });
	console.log(Meteor.users.find().fetch());
	Router.go("/");
    }
});