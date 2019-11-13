Ext.define('IVMSFront.view.user.indexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-index',

    onAddClick: function() {
    	Ext.create('IVMSFront.view.user.create');
    },

});
