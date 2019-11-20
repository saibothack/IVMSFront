Ext.define('IVMSFront.model.Product', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'specifyLoad', type: 'boolean' }

    ]
});
