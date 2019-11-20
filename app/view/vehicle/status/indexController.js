Ext.define('IVMSFront.view.vehicle.status.indexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.vehicle-status-index',

    onAddClick: function() {
    	Ext.create('IVMSFront.view.vehicle.status.create');
    },

    onEditClick: function(button) {
        var windowCreate = Ext.create('IVMSFront.view.vehicle.status.create');

        var form = windowCreate.down('form');
        form.loadRecord(button.getWidgetRecord());
    },

    onDeleteClick: function(button) {
    	Ext.MessageBox.confirm('Confirmar', 'Desea eliminar el registro?', confirmFunction);

        function confirmFunction (btn)
        {
            if (btn == 'yes')
            {
                var url = IVMSFront.util.Globals.getServerPath() + 'VehicleStatus/' + button.getWidgetRecord().getData().id;

                Ext.Ajax.request({
                    url:  url,
                    method: 'DELETE',
                    headers : {
                        'Authorization': 'Bearer  ' + localStorage.getItem("Token")
                    },

                    success: function(response, opts) {
                        var obj = Ext.decode(response.responseText);
                        if (obj.success) {
                            Ext.data.StoreManager.lookup('store-vehicle-status').reload();
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
