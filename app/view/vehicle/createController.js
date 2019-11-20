Ext.define('IVMSFront.view.vehicle.createController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.vehicle-create',

    onSubmitForm: function(bntSave) {

    	formPost = bntSave.up('form');

    	if (formPost.isValid()) {

            var id = this.lookupReference('id').getValue();
            var lineID = this.lookupReference('lineID').getValue();
            var userId = this.lookupReference('userId').getValue();
            var plates = this.lookupReference('plates').getValue();
            var model = this.lookupReference('model').getValue();

            var url = '';
            var method = 'POST';

            if (id == 0) {
                url = IVMSFront.util.Globals.getServerPath() + 'Vehicles';
            } else {
                url = IVMSFront.util.Globals.getServerPath() + 'Vehicles/' + id;
                method = 'PUT';
            }

            Ext.Ajax.request({
                url:  url,
                method: method,
                headers : {
                    'Authorization': 'Bearer ' + localStorage.getItem("Token")
                },
                jsonData: {
                    id: parseInt(id),
                    lineID: parseInt(lineID),
                    userId: userId,
                    plates: plates,
                    model: model
                },

                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    if (obj.success) {
                        formPost.reset()
                        Ext.data.StoreManager.lookup('store-vehicle').reload();
                        if (id == 0)  Ext.Msg.alert('Notificacion', 'Su registro se dio de alta');
                        else Ext.Msg.alert('Notificacion', 'Su registro se modifico');
                    } else {
                        Ext.Msg.alert('Error', obj.message);
                    }
                    var win = formPost.up('window');
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
