
Ext.define('IVMSFront.view.vehicle.create',{
    extend: 'Ext.window.Window',
    xtype: 'vehicle-create',

    requires: [
        'IVMSFront.view.vehicle.createController',
        'IVMSFront.view.vehicle.createModel'
    ],

    controller: 'vehicle-create',
    viewModel: {
        type: 'vehicle-create'
    },

    modal: true,
    autoShow: true,
    title: 'Nueva unidad',

    items: [{
        xtype:'form',
        bodyPadding: 12,
        items: [{
            xtype: 'hiddenfield',
            name: 'id',
            value: 0,
            reference: 'id'
        }, {
            fieldLabel: 'Linea',
            xtype: 'combobox',
            name: 'lineID',
            reference: 'lineID',
            queryMode: 'local',
            bind: {
                store: '{LineList}'
            },
            displayField: 'name',
            valueField: 'id',
            allowBlank: false,
            blankText: 'La linea es requerida'
        }, {
            fieldLabel: 'Operador',
            xtype: 'combobox',
            name: 'userId',
            reference: 'userId',
            queryMode: 'local',
            bind: {
                store: '{UserList}'
            },
            displayField: 'email',
            valueField: 'id'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Placas',
            name: 'plates',
            allowBlank: false,
            blankText: 'Las placas son requeridas',
            reference: 'plates'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Modelo',
            name: 'model',
            allowBlank: false,
            blankText: 'El modelo es requerido',
            reference: 'model'
        }],
        buttons: [{
            text: 'Guardar',
            listeners: {
                click: 'onSubmitForm'
            }
        }]
    }]
});
