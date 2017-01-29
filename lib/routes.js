FlowRouter.route( '/',{
	action: function(params) {
        BlazeLayout.render("App_body", {header: "header_temp",
                                        main: "main_page"});
    }
})


FlowRouter.route( '/account',{
	action: function(params) {
        BlazeLayout.render("App_body", {header: "header_temp",
                                        main: "show_form_page"});
    }
})


FlowRouter.route('/dashboard', {
    action: function(params) {
        BlazeLayout.render("App_body", {header: "header_temp",
                                        main: "show_dashboard_page"});
    }

})

FlowRouter.route('/majors', {
    action: function(params) {
        BlazeLayout.render("App_body", {header: "header_temp",
                                        main: "show_majors_page"});
    }

})

FlowRouter.route('/classes', {

    action: function(params) {
        BlazeLayout.render("App_body", {header: "header_temp",
                                        main: "show_classes_page"});
    }

})

FlowRouter.route('/tutorDashboard', {
    action: function(params) {
        BlazeLayout.render("App_body", {header: "header_temp",
                                        main: "show_tutorDashboard_page"});
    }

})