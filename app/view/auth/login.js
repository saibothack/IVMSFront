
Ext.define('IVMSFront.view.auth.login',{
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'IVMSFront.view.auth.loginController',
        'IVMSFront.view.auth.loginModel'
    ],

    controller: 'auth-login',
    viewModel: {
        type: 'auth-login'
    },

    bodyPadding: 10,
    title: 'Iniciar sesion',
    closable: false,
    autoShow: true,
    resizable: false,
    modal: true,

    items: {
        xtype: 'form',
        url: IVMSFront.util.Globals.getServerPath() + 'Auth/Login',
        reference: 'form',
        jsonSubmit: true,
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Email',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Contraseña',
            allowBlank: false
        }],
        buttons: [{
            text: 'Ingresar',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});
