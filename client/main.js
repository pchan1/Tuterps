// Accounts.onLogin(
//     function(){
//     	console.log(Accounts.user())
//         FlowRouter.go('/account')
//     }
// )

  $(document)
    .ready(function() {
      $('.ui.form')
        .form({
          fields: {
            email: {
              identifier  : 'email',
              rules: [
                {
                  type   : 'empty',
                  prompt : 'Please enter your e-mail'
                },
                {
                  type   : 'email',
                  prompt : 'Please enter a valid e-mail'
                }
              ]
            },
            password: {
              identifier  : 'password',
              rules: [
                {
                  type   : 'empty',
                  prompt : 'Please enter your password'
                },
                {
                  type   : 'length[6]',
                  prompt : 'Your password must be at least 6 characters'
                }
              ]
            }
          }
        })
      ;
    })
  ;

  Template.main_page.events({
  		'submit .register': function(event){
  			event.preventDefault();
	        var email = $('[name=email]').val();
	        var password = $('[name=password]').val();
	        
	        Accounts.createUser({
	            email: email,
	            password: password
	        });
	        FlowRouter.go('/account');
  		}
  })