Template.tutorProfile.helpers({
	about_me(){
		if (Meteor.user()){
			return Meteor.user().profile.aboutMe;
		}
	},

	year(){
		if (Meteor.user()){
			return Meteor.user().profile.year;
		}
	}
});