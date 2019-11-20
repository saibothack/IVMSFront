Ext.define('IVMSFront.view.user.createModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user-create',

    formulas: {
    	token: {
    		get: function (get) {
	            var sToken = IVMSFront.util.Globals.getToken();
	            return sToken;
            },
    	}
    },

    stores: {
        RoleList: {
            model: 'IVMSFront.model.Role',
		    autoLoad: true,
		    remoteFilter: false,
		    enablePaging: false,

		    proxy: {
		        type: 'ajax',
		         headers : {
			        'Content-Type' : 'application/json;charset=utf-8',
			        'Authorization': 'Bearer {token}'
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
