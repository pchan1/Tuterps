FlowRouter.route( '/',{
	action: function(params) {
        BlazeLayout.render("App_body", {header: "header_temp",
                                        main: "main_page"});
        console.log("main_page loaded.")
        console.log(params)
    }
  }
 )


FlowRouter.route( '/new_account',{
	action: function(params) {
        BlazeLayout.render("App_body", {header: "header_temp",
                                        main: "show_form_page"});
        console.log("form_page loaded.")

    }
  }
 )
