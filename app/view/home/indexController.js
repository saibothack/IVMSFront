Ext.define('IVMSFront.view.home.indexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home-index',

    init: function() {
    	console.log('Inicia');
        console.log(localStorage.getItem("Token"));
    	console.log("entra");
    	var menu = this.lookupReference('homeMenuPanel')
    	menu.on('itemclick', function(comp, record, item, index, e, eOpts) {

    		switch(index) {
    			case 0:
    				var viewPortCenter = Ext.getCmp('viewPortCenter');
					viewPortCenter.removeAll();
					viewPortCenter.add({
					    xtype:'view-dashboard'
					});
    				break;
				case 2:
					var viewPortCenter = Ext.getCmp('viewPortCenter');
					viewPortCenter.removeAll();
					viewPortCenter.add({
					    xtype:'role-index'
					});
    				break;
				case 3:
					var viewPortCenter = Ext.getCmp('viewPortCenter');
					viewPortCenter.removeAll();
					viewPortCenter.add({
					    xtype:'line-index'
					});
    				break;
				case 4:
					var viewPortCenter = Ext.getCmp('viewPortCenter');
					viewPortCenter.removeAll();
					viewPortCenter.add({
					    xtype:'user-index'
					});
    				break;
				case 5:
					var viewPortCenter = Ext.getCmp('viewPortCenter');
					viewPortCenter.removeAll();
					viewPortCenter.add({
					    xtype:'role-index'
					});
    				break;
				case 6:
					var viewPortCenter = Ext.getCmp('viewPortCenter');
					viewPortCenter.removeAll();
					viewPortCenter.add({
					    xtype:'vehicle-status-index'
					});
    				break;
				case 7:
					var viewPortCenter = Ext.getCmp('viewPortCenter');
					viewPortCenter.removeAll();
					viewPortCenter.add({
					    xtype:'vehicle-index'
					});
    				break;
				case 8:
					var viewPortCenter = Ext.getCmp('viewPortCenter');
					viewPortCenter.removeAll();
					viewPortCenter.add({
					    xtype:'origin-index'
					});
    				break;
				case 9:
					var viewPortCenter = Ext.getCmp('viewPortCenter');
					viewPortCenter.removeAll();
					viewPortCenter.add({
					    xtype:'product-index'
					});
    				break;
				case 10:
					var viewPortCenter = Ext.getCmp('viewPortCenter');
					viewPortCenter.removeAll();
					viewPortCenter.add({
					    xtype:'role-index'
					});
    				break;
				case 11:
					var viewPortCenter = Ext.getCmp('viewPortCenter');
					viewPortCenter.removeAll();
					viewPortCenter.add({
					    xtype:'role-index'
					});
    				break;

    		};
    	})

    }

});
