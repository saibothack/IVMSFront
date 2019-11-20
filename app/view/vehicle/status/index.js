
Ext.define('IVMSFront.view.vehicle.status.index',{
    extend: 'Ext.grid.Panel',
    xtype: 'vehicle-status-index',

    requires: [
        'IVMSFront.view.vehicle.status.indexController',
        'IVMSFront.view.vehicle.status.indexModel'
    ],

    controller: 'vehicle-status-index',
    viewModel: {
        type: 'vehicle-status-index'
    },

    session: true,

    viewConfig: {
        forceFit: true
    },

    region: 'center',
    layout    : 'fit',

    title: 'Estatus de vehiculos',
    plugins: 'gridfilters',

    bind: {
        store: '{VehicleStatusListPagingStore}'
    },

    tbar: ['->',{
        text: 'Nuevo estatus',
        handler: 'onAddClick'
    }],

    columns: [
        {
            text: 'Nombre',  dataIndex: 'name',
            flex: 1,
            filter: {
                type: 'string'
            },
            renderer : function(value, meta) {
                meta.style = "height: 50px; vertical-align: middle; display: table-cell;";
                return value;
            }
        },
        {
            text: 'Icono',  dataIndex: 'icon',
            flex: 1,
            filter: {
                type: 'string'
            },
            renderer : function(value, meta) {
                meta.style = "height: 50px; vertical-align: middle;";
                return value;
            }
        },
        {
            text: 'Color',  dataIndex: 'color',
            width:100,
            renderer : function(value, meta) {
                meta.style = "background-color:" + value + "; margin: 2px; height: 50px; ";
                return '';
            }
        }, {
            xtype: 'widgetcolumn',
            width:60,
            widget: {
                xtype: 'button',
                flex: 1,
                height: 50,
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
                flex: 1,
                height: 50,
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
            store: '{VehicleStatusListPagingStore}'
        },
        displayInfo: true,
        displayMsg: 'Mostrar {0} a {1} de {2} &nbsp;registros ',
        emptyMsg: "No existen registros para mostrar"
    }
});
