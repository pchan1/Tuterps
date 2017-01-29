Template.dashboard.events({
	'click .tutorBtn': function(event){
		FlowRouter.go('/majors');
	},

	'click .studentBtn': function(event){
		FlowRouter.go('/tutorDashboard');
	}
});