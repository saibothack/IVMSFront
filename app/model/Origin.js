Ext.define('IVMSFront.model.Origin', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'address', type: 'string' },
        { name: 'latitude', type: 'string' },
        { name: 'longitude', type: 'string' }

    ]
});
