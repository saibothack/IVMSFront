
Ext.define('IVMSFront.view.role.create',{
    extend: 'Ext.window.Window',
    xtype: 'role-create',

    requires: [
        'IVMSFront.view.role.createController',
        'IVMSFront.view.role.createModel'
    ],

    controller: 'role-create',
    viewModel: {
        type: 'role-create'
    },

    modal: true,
    autoShow: true,
    title: 'Nuevo Rol',

    items: [{
        xtype:'form',
        bodyPadding: 10,
        items: [{
            xtype: 'hiddenfield',
            name: 'id',
            value: 0,
            reference: 'id'
        },{
            xtype: 'textfield',
            fieldLabel: 'Nombre',
            name: 'name',
            allowBlank: false,
            blankText: 'El nombre es requerido',
            reference: 'name'
        }],
        buttons: [{
            text: 'Guardar',
            listeners: {
                click: 'onSubmitForm'
            }
        }]
    }]
});
