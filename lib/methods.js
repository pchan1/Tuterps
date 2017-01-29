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

	// 'setPropic': function(propic){
	// 	Meteor.users.update(Meteor.userId(), {$set: {'profile.propic': propic}});
	// },
	
});


if (Meteor.isServer) {
    Meteor.methods({

    	// Gets UMD.io departments API
    	'getDepartments': function () {
	    this.unblock();
	    return Meteor.http.call("GET", "http://api.umd.io/v0/courses/departments");
   		}
   	});
}

//invoke the server method
if (Meteor.isClient) {

	// Gets the 4 letter code for major departments
    departments = Meteor.call("getDepartments", function(error, results) {
    	var myresults = results.content;
    	var regex = new RegExp("\"dept_id\":\"(.{4})\"", "g");
    	var matches, deptNames = [];
    	while (matches = regex.exec(myresults)) {
    		deptNames.push(matches[1]); // matches[0] is full substring match
    									// matches[1-n] is a single group match
    	}

        return deptNames;
    });
}