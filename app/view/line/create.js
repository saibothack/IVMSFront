
Ext.define('IVMSFront.view.line.create',{
    extend: 'Ext.window.Window',
    xtype: 'line-create',

    requires: [
        'IVMSFront.view.line.createController',
        'IVMSFront.view.line.createModel'
    ],

    controller: 'line-create',
    viewModel: {
        type: 'line-create'
    },

    modal: true,
    autoShow: true,
    title: 'Nueva Linea',
    width: 300,
    bodyPadding: 10,

    items: [{
        xtype:'form',
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
