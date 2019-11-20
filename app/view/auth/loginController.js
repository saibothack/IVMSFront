Ext.define('IVMSFront.view.auth.loginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.auth-login',

    onLoginClick: function(bntSave) {
    	currentThis = this;

    	formLogin = bntSave.up('form');

    	if (formLogin.isValid()) {

			formLogin.submit({
				success: function(form, action) {
					localStorage.setItem("LoggedIn", true);
					localStorage.setItem("Token", action.result.token);
                    localStorage.setItem("User", JSON.stringify(action.result.user));

			        currentThis.getView().destroy();
                    IVMSFront.app.setMainView('IVMSFront.view.home.index');
                },
                failure: function(form, action) {
                	var obj = Ext.decode(action.response.responseText);
                    Ext.Msg.alert('Error', obj.message);
                }
			});
        }
    }

});
