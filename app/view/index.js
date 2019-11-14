
Ext.define('IVMSFront.view.index',{
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.plugin.Viewport',
    ],

    controller: 'index',
    viewModel: {
        type: 'index'
    },

    defaults: {
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 10
                }
            }
        }
    },
});
