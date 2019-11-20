
Ext.define('IVMSFront.view.vehicle.status.create',{
    extend: 'Ext.window.Window',
    xtype: 'vehicle-status-create',

    requires: [
        'IVMSFront.view.vehicle.status.createController',
        'IVMSFront.view.vehicle.status.createModel'
    ],

    controller: 'vehicle-status-create',
    viewModel: {
        type: 'vehicle-status-create'
    },

    modal: true,
    width:500,
    autoShow: true,
    title: 'Nuevo estatus',

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
            anchor: '100%',
            allowBlank: false,
            blankText: 'El nombre es requerido',
            reference: 'name'
        }, {
            fieldLabel: 'Icono',
            xtype: 'filefield',
            allowBlank: false,
            anchor: '100%',
            buttonText: 'Seleccione icono',
            reference: 'icon'
        }, {
            text: 'Seleccione un color',
            xtype: 'label',
        }, {
            anchor: '100%',
            fieldLabel: 'Color',
            xtype: 'colorpicker',
            reference: 'color'
        }],
        buttons: [{
            text: 'Guardar',
            listeners: {
                click: 'onSubmitForm'
            }
        }]
    }]
});
