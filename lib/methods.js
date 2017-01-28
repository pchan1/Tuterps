/*
	Meteor methods for updating Meteor.users to setName, setPhone, setBirthday, and setAddress.
*/

Meteor.methods({
	'setName': function(first, last){
		check(first, String);
		check(last, String);

		const newName = {
			firstName: first,
			lastName: last
		};

		Meteor.users.update(Meteor.userId(), {$set: {'profile.fullName': newName}});
	},

	'setYear': function(year){
		Meteor.users.update(Meteor.userId(), {$set: {'profile.year': year}});
	},

	'setEmail': function(email){
		Meteor.users.update(Meteor.userId(), {$set: email});
	},

	'setPassword': function(password){
		Meteor.users.update(Meteor.userId(), {$set: password});
	},

	'setPropic': function(propic){
		Meteor.users.update(Meteor.userId(), {$set: {'profile.propic': propic}});
	}
	
});