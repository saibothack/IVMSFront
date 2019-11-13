
Ext.define('IVMSFront.view.dashboard.index',{
    extend: 'Ext.panel.Panel',
    xtype: 'view-dashboard',

    requires: [
        'IVMSFront.view.dashboard.indexController',
        'IVMSFront.view.dashboard.indexModel'
    ],

    controller: 'dashboard-index',
    viewModel: {
        type: 'dashboard-index'
    },

});
