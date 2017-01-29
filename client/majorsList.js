import { Mongo } from 'meteor/mongo';
majors = new Mongo.Collection('list_of_majors')

Template.majors.helpers({

	majorL() {
	// Gets the 4 letter code for major departments

	    return majors.find().fetch()

	},


});


Template.major_name.events({
	'click button': function(event){
		major = event.target.textContent
		console.log('/'+major)
		FlowRouter.go('/classes?major='+major)

	}
})