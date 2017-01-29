import { Mongo } from 'meteor/mongo';


Template.tutorDashboard.helpers({
	tutor_entries(){
		if (Meteor.user()){
			console.log( Meteor.user().profile.tutor_entries )
			return Meteor.user().profile.tutor_entries


		}


	}


});




Template.tutorDashboard.events({
	'submit form': function(event){
		event.preventDefault()
		courseID = event.target.courseID.value
		hourly = event.target.hourly.value
		days = event.target.days.value
		
		
		prev_entries = Meteor.user().profile.tutor_entries ? Meteor.user().profile.tutor_entries : []
		prev_entries.push( {course: courseID, wage: hourly, availability:days}, )

		curProfile =  Meteor.user().profile ? Meteor.user().profile : []

		curProfile.tutor_entries = prev_entries

		Meteor.users.update(Meteor.userId(), {$set: {profile: curProfile}});


		tutor_list = classesL.find({course:courseID}).fetch().tutors
		tutor_list.push(Meteor.user())

		classesL.update({course:courseID}, {tutors:tutor_list})
		console.log( classesL.find({course:courseID}).fetch())

	},

	'click button': function(event){

		console.log(event)
	}



})

/*
Template.tutor_classes.events({
	'click button': function(event){

		console.log(event.target)
	}


})*/