Ext.define('IVMSFront.view.role.indexModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.role-index',
    
    stores: {
        RoleListPagingStore: {
        	storeId: 'store-role',
            model: 'IVMSFront.model.Role',

            remoteFilter: true,
		    enablePaging: true,
		    autoLoad: {start: 0, limit: 10},
		    pageSize: 10,

		    proxy: {
		        type: 'ajax',
		         headers : {
			        'Content-Type' : 'application/json;charset=utf-8'
			    },
		        noCache:false,
		        url: IVMSFront.util.Globals.getServerPath() + 'IVMSBackRoles',
		        reader: {
		            type: 'json',
		            rootProperty: 'data',
		            totalProperty: 'total',
		            messageProperty : "message"
		        },
		        listeners : {
		            exception : function(proxy, response, operation) {
		                if (!operation.success) {
		                    var obj = Ext.decode(response.responseText);
		                    Ext.Msg.alert('Error Role Store', obj.message);
		                }
		            }
		        }
		    }
        }
    }
});
