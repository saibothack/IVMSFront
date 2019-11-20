
Ext.define('IVMSFront.view.driver.index',{
    extend: 'Ext.panel.Panel',

    requires: [
        'IVMSFront.view.driver.indexController',
        'IVMSFront.view.driver.indexModel'
    ],

    controller: 'driver-index',
    viewModel: {
        type: 'driver-index'
    },

    html: 'Hello, World!!'
});
