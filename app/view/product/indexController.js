Ext.define('IVMSFront.view.product.indexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.product-index',

    onAddClick: function() {
    	Ext.create('IVMSFront.view.product.create');
    },

    onEditClick: function(button) {
        var windowCreate = Ext.create('IVMSFront.view.product.create');

        var form = windowCreate.down('form');
        form.loadRecord(button.getWidgetRecord());
    },

    onDeleteClick: function(button) {
    	Ext.MessageBox.confirm('Confirmar', 'Desea eliminar el registro?', confirmFunction);

        function confirmFunction (btn)
        {
            if (btn == 'yes')
            {
                var url = IVMSFront.util.Globals.getServerPath() + 'Products/' + button.getWidgetRecord().getData().id;

                Ext.Ajax.request({
                    url:  url,
                    method: 'DELETE',
                    headers : {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': 'Bearer ' + localStorage.getItem("Token")
                    },

                    success: function(response, opts) {
                        var obj = Ext.decode(response.responseText);
                        if (obj.success) {
                            Ext.data.StoreManager.lookup('store-product').reload();
                            Ext.Msg.alert('Notificacion', 'Su registro se elimino');
                        } else {
                            Ext.Msg.alert('Error', obj.message);
                        }
                    },

                    failure: function(response, opts) {
                        var obj = Ext.decode(response.responseText);
                        Ext.Msg.alert('Error', obj.message);
                    }
                 });
            }
        }
    },

});
