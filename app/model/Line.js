Ext.define('IVMSFront.model.Line', {
    extend: 'Ext.data.Model',

    idProperty:'id',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' }
    ]
});
