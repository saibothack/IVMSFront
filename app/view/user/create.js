
Ext.define('IVMSFront.view.user.create',{
    extend: 'Ext.window.Window',
    xtype: 'user-create',

    requires: [
        'IVMSFront.view.user.createController',
        'IVMSFront.view.user.createModel'
    ],

    controller: 'user-create',
    viewModel: {
        type: 'user-create'
    },

    modal: true,
    autoShow: true,
    title: 'Nuevo Rol',
    width: 300,
    bodyPadding: 10,

    items: [{
        xtype:'form',
        items: [{
            xtype: 'hiddenfield',
            name: 'id',
            reference: 'id'
        }, {
            fieldLabel: 'Rol',
            xtype: 'combobox',
            name: 'roleID',
            reference: 'roleID',
            queryMode: 'local',
            bind: {
                store: '{RoleList}'
            },
            displayField: 'name',
            valueField: 'id',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: 'Nombre',
            name: 'name',
            allowBlank: false,
            blankText: 'El nombre es requerido',
            reference: 'name'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Email',
            name: 'email',
            allowBlank: false,
            blankText: 'El email es requerido',
            reference: 'email',
            vtype: 'email'
        }],
        buttons: [{
            text: 'Guardar',
            listeners: {
                click: 'onSubmitForm'
            }
        }]
    }]
});
