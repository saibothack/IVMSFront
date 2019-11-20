Ext.define('IVMSFront.view.vehicle.status.createController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.vehicle-status-create',

    onSubmitForm: function(bntSave) {

    	formPost = bntSave.up('form');

    	if (formPost.isValid()) {

            var id = this.lookupReference('id').getValue();
            var name = this.lookupReference('name').getValue();
            var color = '#' + this.lookupReference('color').getValue();

            if (this.lookupReference('color').getValue() == null) {
                Ext.Msg.alert('Error', "Por favor seleccione un color para su estatus");
                return;
            }



            const toBase64 = file => new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                console.log(reader);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });

            async function UploadFile() {
                const file = document.querySelector('input[type="file"]').files[0];;
                var icon = await toBase64(file);

                var url = '';
                var method = 'POST';

                if (id == 0) {
                    url = IVMSFront.util.Globals.getServerPath() + 'VehicleStatus';
                } else {
                    url = IVMSFront.util.Globals.getServerPath() + 'VehicleStatus/' + id;
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
                        icon:icon,
                        color:color
                    },

                    success: function(response, opts) {
                        var obj = Ext.decode(response.responseText);
                        if (obj.success) {
                            formPost.reset()
                            Ext.data.StoreManager.lookup('store-vehicle-status').reload();
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

            UploadFile();

            console.log('end');
        }
    }

});
