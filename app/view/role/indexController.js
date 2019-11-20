Ext.define('IVMSFront.view.role.indexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.role-index',

    init: function() {
        console.log('inicia roles');
        console.log(IVMSFront.util.Globals.getToken());
    },

    onAddClick: function() {
    	Ext.create('IVMSFront.view.role.create');
    },

    onEditClick: function(button) {
        var windowCreate = Ext.create('IVMSFront.view.role.create');
        var form = windowCreate.down('form');
        form.loadRecord(button.getWidgetRecord());
    },

    onDeleteClick: function(button) {
    	Ext.MessageBox.confirm('Confirmar', 'Desea eliminar el registro?', confirmFunction);

        function confirmFunction (btn)
        {
            if (btn == 'yes')
            {
                var url = IVMSFront.util.Globals.getServerPath() + 'IVMSBackRoles/' + button.getWidgetRecord().getData().id;

                Ext.Ajax.request({
                    url:  url,
                    method: 'DELETE',
                    headers : {
                        'Authorization': 'Bearer  ' + localStorage.getItem("Token")
                    },

                    success: function(response, opts) {
                        var obj = Ext.decode(response.responseText);
                        if (obj.success) {
                            Ext.data.StoreManager.lookup('store-role').reload();
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
