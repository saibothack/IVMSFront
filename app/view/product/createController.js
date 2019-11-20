Ext.define('IVMSFront.view.product.createController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.product-create',

    onSubmitForm: function(bntSave) {

    	formSubmit = bntSave.up('form');

    	if (formSubmit.isValid()) {

            var id = this.lookupReference('id').getValue();
            var name = this.lookupReference('name').getValue();
            var specifyLoad = this.lookupReference('specifyLoad').getValue();
            var url = '';
            var method = 'POST';

            if (id == 0) {
                url = IVMSFront.util.Globals.getServerPath() + 'Products';
            } else {
                url = IVMSFront.util.Globals.getServerPath() + 'Products/' + id;
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
                    name: name,
                    specifyLoad: specifyLoad
                },

                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    if (obj.success) {
                        formSubmit.reset()
                        Ext.data.StoreManager.lookup('store-product').reload();
                        if (id == 0)  Ext.Msg.alert('Notificacion', 'Su registro se dio de alta');
                        else Ext.Msg.alert('Notificacion', 'Su registro se modifico');
                    } else {
                        Ext.Msg.alert('Error', obj.message);
                    }
                    var win = formSubmit.up('window');
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
