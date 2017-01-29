/*
  Event for when the createProfileForm is submitted. 
  Will call the setName, setYear, setEmail, setPassword, and setPropic functions
  to add to the Meteor.users database. 
*/

Template.editProfileForm.events({
	'submit form': function(event){
        // if ( $('.ui.form').form('is valid') ) {
            event.preventDefault();
            var firstName = event.target.firstName.value;
            var lastName = event.target.lastName.value;
            Meteor.call('setName', firstName, lastName);

            var year = event.target.year.value;
            Meteor.call('setYear', year);

            var email = event.target.email.value;
            Meteor.call('setEmail', email);

            var password = event.target.password.value;
            Meteor.call('setPassword', password);

            

            // var propic = event.target.profilePicture.value;
            // Meteor.call('setPropic', propic);

            console.log(Meteor.users.find().fetch());
        // }
    }
});



