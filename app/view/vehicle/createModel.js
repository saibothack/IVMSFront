Ext.define('IVMSFront.view.vehicle.createModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.vehicle-create',

    formulas: {
    	token: {
    		get: function (get) {
	            var sToken = IVMSFront.util.Globals.getToken();
	            return sToken;
            },
    	}
    },
    
    stores: {
        LineList: {
            model: 'IVMSFront.model.Line',
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
		        url: IVMSFront.util.Globals.getServerPath() + 'Lines',
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
		                    Ext.Msg.alert('Error Line Store', obj.message);
		                }
		            }
		        }
		    }
        },

        UserList: {
            model: 'IVMSFront.model.User',
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
		        url: IVMSFront.util.Globals.getServerPath() + 'IVMSBackUsers/Drivers',
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
		                    Ext.Msg.alert('Error User Store', obj.message);
		                }
		            }
		        }
		    }
        }
    }

});
