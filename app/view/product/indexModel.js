Ext.define('IVMSFront.view.product.indexModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.product-index',
    
	formulas: {
    	token: {
    		get: function (get) {
	            var sToken = IVMSFront.util.Globals.getToken();
	            return sToken;
            },
    	}
    },

    stores: {
        ProductListPagingStore: {
        	storeId: 'store-product',
            model: 'IVMSFront.model.Product',

            remoteFilter: true,
		    enablePaging: true,
		    autoLoad: {start: 0, limit: 10},
		    pageSize: 10,

		    proxy: {
		        type: 'ajax',
		         headers : {
			        'Authorization': 'Bearer {token}'
			    },
		        noCache:false,
		        url: IVMSFront.util.Globals.getServerPath() + 'Products',
		        reader: {
		            type: 'json',
		            rootProperty: 'data',
		            totalProperty: 'total',
		            messageProperty : "message"
		        },
		        listeners : {
		            exception : function(proxy, response, operation) {
		                if (!operation.success) {
		                    if ((response.responseText != 'undefined') && (response.responseText != null) && (response.responseText != ''))  {
		                		var obj = Ext.decode(response.responseText);
		                    	Ext.Msg.alert('Error Role Store', obj.message);
		                	} else {
		                		Ext.Msg.alert('Error Role Store', 'Error de red');
		                	}
		                }
		            }
		        }
		    }
        }

    }

});
