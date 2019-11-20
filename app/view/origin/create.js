
Ext.define('IVMSFront.view.origin.create',{
    extend: 'Ext.panel.Panel',

    requires: [
        'IVMSFront.view.origin.createController',
        'IVMSFront.view.origin.createModel'
    ],

    controller: 'origin-create',
    viewModel: {
        type: 'origin-create'
    },

    html: 'Hello, World!!'
});
