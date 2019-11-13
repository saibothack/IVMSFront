/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('IVMSFront.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'IVMSFront.view.main.MainController',
        'IVMSFront.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
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

    items: [{
                title: 'Dashboard',
                iconCls: 'fa-home',
                items: [{
                    xtype: 'view-dashboard'
                }]
            },{
                title: 'Roles',
                iconCls: 'fa-home',
                items: [{
                    xtype: 'role-index'
                }]
            }, {
                title: 'Lineas',
                iconCls: 'fa-user',
                items: [{
                    xtype: 'line-index'
                }]
            }, {
                title: 'Usuarios',
                iconCls: 'fa-users',
                items: [{
                    xtype: 'user-index'
                }]
            }, {
                title: 'Conductores',
                iconCls: 'fa-users',
                items: [{
                    xtype: 'user-index'
                }]
            }, {
                title: 'Vehiculos',
                iconCls: 'fa-users',
                items: [{
                    xtype: 'user-index'
                }]
            }, {
                title: 'Origenes',
                iconCls: 'fa-users',
                items: [{
                    xtype: 'user-index'
                }]
            }, {
                title: 'Productos',
                iconCls: 'fa-users',
                items: [{
                    xtype: 'user-index'
                }]
            }, {
                title: 'Settings',
                iconCls: 'fa-cog',
                bind: {
                    html: '{loremIpsum}'
                }
            }]
});
