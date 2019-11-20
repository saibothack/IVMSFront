Ext.define('IVMSFront.model.Vehicle', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'line', type: 'string' },
        { name: 'user', type: 'string' },
        { name: 'vehicleStatus', type: 'string' },
        { name: 'plates', type: 'string' },
        { name: 'model', type: 'string' }

    ]
});
