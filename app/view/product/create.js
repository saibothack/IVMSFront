
Ext.define('IVMSFront.view.product.create',{
    extend: 'Ext.window.Window',
    xtype: 'product-create',

    requires: [
        'IVMSFront.view.product.createController',
        'IVMSFront.view.product.createModel'
    ],

    controller: 'product-create',
    viewModel: {
        type: 'product-create'
    },

    modal: true,
    autoShow: true,
    title: 'Nuevo producto',

    items: [{
        xtype:'form',
        bodyPadding: 12,
        items: [{
            xtype: 'hiddenfield',
            name: 'id',
            value: 0,
            reference: 'id'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Nombre',
            name: 'name',
            allowBlank: false,
            blankText: 'El nombre es requerido',
            reference: 'name'
        }, {
            xtype: 'checkboxfield',
            boxLabel  : 'Especificar carga?',
            name      : 'specifyLoad',
            inputValue: '1',
            reference: 'specifyLoad'
        },],
        buttons: [{
            text: 'Guardar',
            listeners: {
                click: 'onSubmitForm'
            }
        }]
    }]
});
