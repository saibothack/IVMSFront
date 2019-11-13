Ext.define('IVMSFront.view.line.indexModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.line-index',

    stores: {
        LineListPagingStore: {
        	storeId: 'store-line',
            model: 'IVMSFront.model.Line',

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
        }

    }

});
