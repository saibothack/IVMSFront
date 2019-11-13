Ext.define('IVMSFront.view.role.createController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.role-create',

    onSubmitForm: function(bntSave) {

    	formLine = bntSave.up('form');

    	if (formLine.isValid()) {

            var id = this.lookupReference('id').getValue();
            var name = this.lookupReference('name').getValue();
            var url = '';
            var method = 'POST';

            if (id == 0) {
                url = IVMSFront.util.Globals.getServerPath() + 'IVMSBackRoles';
            } else {
                url = IVMSFront.util.Globals.getServerPath() + 'IVMSBackRoles/' + id;
                method = 'PUT';
            }

            Ext.Ajax.request({
                url:  url,
                method: method,
                jsonData: {
                    id: id,
                    name: name
                },

                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    if (obj.success) {
                        formLine.reset()
                        Ext.data.StoreManager.lookup('store-role').reload();
                        if (id == 0)  Ext.Msg.alert('Notificacion', 'Su registro se dio de alta');
                        else Ext.Msg.alert('Notificacion', 'Su registro se modifico');
                    } else {
                        Ext.Msg.alert('Error', obj.message);
                    }
                    var win = formLine.up('window');
                    win.close();
                },

                failure: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    Ext.Msg.alert('Error', obj.message);
                }
             });
        }
    }

});
