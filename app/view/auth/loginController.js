Ext.define('IVMSFront.view.auth.loginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.auth-login',

    onLoginClick: function(bntSave) {
    	currentThis = this;

    	formLine = bntSave.up('form');

    	if (formLine.isValid()) {
			formLine.submit({
				success: function(form, action) {
					localStorage.setItem("LoggedIn", true);
					localStorage.setItem("Token", action.result.token);

			        currentThis.getView().destroy();

			        // Add the main view to the viewport
			        Ext.create({
			            xtype: 'app-main'
			        });
                },
                failure: function(form, action) {
                	var obj = Ext.decode(action.response.responseText);
                    Ext.Msg.alert('Error', obj.message);
                }
			});
        }
    }

});
