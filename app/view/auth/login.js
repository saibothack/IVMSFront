
Ext.define('IVMSFront.view.auth.login',{
    extend: 'Ext.panel.Panel',
    xtype: 'login',

    requires: [
        'IVMSFront.view.auth.loginController',
        'IVMSFront.view.auth.loginModel'
    ],

    controller: 'auth-login',
    viewModel: {
        type: 'auth-login'
    },

    items: {
        xtype: 'window',
        title: 'Iniciar sesion',
        closable: false,
        autoShow: true,
        resizable: false,
        modal: true,
        items: {
            xtype: 'form',
            bodyPadding: 12,
            url: IVMSFront.util.Globals.getServerPath() + 'Auth/Login',
            reference: 'loginForm',
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
    }
});
