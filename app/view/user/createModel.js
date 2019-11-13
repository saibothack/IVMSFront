Ext.define('IVMSFront.view.user.createModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user-create',

    stores: {
        RoleList: {
            model: 'IVMSFront.model.Role',
		    autoLoad: true,
		    remoteFilter: false,
		    enablePaging: false,

		    proxy: {
		        type: 'ajax',
		         headers : {
			        'Content-Type' : 'application/json;charset=utf-8'
			    },
		        noCache:false,
		        url: IVMSFront.util.Globals.getServerPath() + 'IVMSBackRoles/User',
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
