Template.login.events({
    'submit form': function(event, template){
        event.preventDefault();
        var username = event.target.username.value;
        var password = event.target.password.value;
        Meteor.loginWithPassword(username, password,function(error){
	    if(error){
		console.log(error.reason);
		var message = "There was an error logging in: <strong>" + error.reason + "</strong>";
	    } else {
		Router.go("/charts");
	    }
	});
    }

});

