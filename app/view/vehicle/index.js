
Ext.define('IVMSFront.view.vehicle.index',{
    extend: 'Ext.grid.Panel',
    xtype: 'vehicle-index',


    requires: [
        'IVMSFront.view.vehicle.indexController',
        'IVMSFront.view.vehicle.indexModel'
    ],

    controller: 'vehicle-index',
    viewModel: {
        type: 'vehicle-index'
    },

    session: true,

    viewConfig: {
        forceFit: true
    },

    region: 'center',
    layout    : 'fit',

    title: 'Unidades',
    plugins: 'gridfilters',

    bind: {
        store: '{VehicleListPagingStore}'
    },

    tbar: ['->',{
        text: 'Nueva unidad',
        handler: 'onAddClick'
    }],

    columns: [
        {
            text: 'Linea',  dataIndex: 'line',
            flex: 1,
            filter: {
                type: 'string'
            }
        }, {
            text: 'Conductor',  dataIndex: 'user',
            flex: 1,
            filter: {
                type: 'string'
            }
        }, {
            text: 'Placas',  dataIndex: 'plates',
            flex: 1,
            filter: {
                type: 'string'
            }
        }, {
            text: 'Modelo',  dataIndex: 'model',
            flex: 1,
            filter: {
                type: 'string'
            }
        }, {
            text: 'Estatus',  dataIndex: 'vehicleStatus',
            flex: 1,
            filter: {
                type: 'string'
            }
        }, {
            xtype: 'widgetcolumn',
            width:60,
            widget: {
                xtype: 'button',
                iconCls: 'x-fa fa-edit',
                tooltip: 'Modificar',
                handler: 'onEditClick'
            }
        },
        {
            xtype: 'widgetcolumn',
            width:60,
            widget: {
                xtype: 'button',
                iconCls: 'x-fa fa-key',
                tooltip: 'Reestablecer contraseña',
                handler: 'onDeleteClick'
            }
        },
        {
            xtype: 'widgetcolumn',
            width:60,
            widget: {
                xtype: 'button',
                iconCls: 'x-fa fa-trash',
                tooltip: 'Eliminar',
                handler: 'onDeleteClick'
            }
        }
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        pageSize:10,
        bind: {
            store: '{UserListPagingStore}'
        },
        displayInfo: true,
        displayMsg: 'Mostrar {0} a {1} de {2} &nbsp;registros ',
        emptyMsg: "No existen registros para mostrar"
    }
});
