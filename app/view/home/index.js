
Ext.define('IVMSFront.view.home.index',{
    extend: 'Ext.panel.Panel',
    xtype: 'app-home',

    requires: [
        'IVMSFront.view.home.indexController',
        'IVMSFront.view.home.indexModel'
    ],

    controller: 'home-index',
    viewModel: {
        type: 'home-index'
    },

    layout: 'border',
    items: [{
        xtype: 'container',
        region: 'north',
        height: 60,
        items: [
            {
                border: false,
                height: 60,
                xtype: 'panel',
                anchor: '100%',
                layout     : {
                    type : 'hbox'
                },
                bodyStyle:{"background-color":"#26a59a"},
                items: [
                    {
                        xtype:'image',
                        src: 'resources/images/logo50x50.png',
                        margin: '5 20 5 20',
                        alt: 'logo'
                    }, {
                        xtype: 'label',
                        text: 'IVMS Tracking',
                        cls: 'labelTitle',
                        margin: '5 20 5 50',
                    }
                ]
            }
        ]
    }, {
        region: 'center',
        layout : 'fit',
        id: 'viewPortCenter',
        title: '&nbsp;'
    }, {
        region: 'west',
        title: 'Menu',
        width: 200,
        anchor: '100% 100%',
        collapsible: true,
        split: true,
        layout: 'anchor',
        items: [
            {
                xtype: 'treepanel',
                reference:'homeMenuPanel',
                anchor: '100% 100%',
                rootVisible: false,
                root: {
                    expanded: true,
                    children: [
                        {
                            text: 'Dashboard',
                            leaf: true,
                            iconCls: 'fa fa-align-left',
                            cls: 'labelMenuItem',

                        },
                        {
                            text: 'Configuracion',
                            cls: 'labelMenuItem',
                            iconCls: 'fa fa-cog',
                            expanded: true,
                            children: [
                            {
                                text: 'Roles',
                                leaf: true,
                                iconCls: 'fa fa-lock',
                                cls: 'labelMenuItem'
                            },
                            {
                                text: 'Lineas',
                                leaf: true,
                                iconCls: 'fa fa-users',
                                cls: 'labelMenuItem'
                            },
                            {
                                text: 'Usuarios',
                                leaf: true,
                                iconCls: 'fa fa-user',
                                cls: 'labelMenuItem'
                            },
                            {
                                text: 'Conductores',
                                leaf: true,
                                iconCls: 'fa fa-truck',
                                cls: 'labelMenuItem'
                            },
                            {
                                text: 'Vehiculos Estatus',
                                leaf: true,
                                iconCls: 'fa fa-tachometer',
                                cls: 'labelMenuItem'
                            },
                            {
                                text: 'Vehiculos',
                                leaf: true,
                                iconCls: 'fa fa-tachometer',
                                cls: 'labelMenuItem',
                            },
                            {
                                text: 'Origenes',
                                leaf: true,
                                iconCls: 'fa fa-map-pin',
                                cls: 'labelMenuItem',
                            },
                            {
                                text: 'Productos',
                                leaf: true,
                                iconCls: 'fa fa-archive',
                                cls: 'labelMenuItem',
                            }
                        ] },
                        {
                            text: 'Remissiones',
                            leaf: true,
                            iconCls: 'fa fa-cloud',
                            cls: 'labelMenuItem',
                        },
                        {
                            text: 'Seguimiento',
                            leaf: true,
                            iconCls: 'fa fa-map',
                            cls: 'labelMenuItem',
                        },
                        {
                            text: 'Salir',
                            leaf: true,
                            iconCls: 'fa fa-sign-out',
                            cls: 'labelMenuItem',
                        }
                    ]
                }
            }
        ]
    }]
});
