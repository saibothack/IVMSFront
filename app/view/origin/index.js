
Ext.define('IVMSFront.view.origin.index',{
    extend: 'Ext.grid.Panel',
    xtype: 'origin-index',

    requires: [
        'IVMSFront.view.origin.indexController',
        'IVMSFront.view.origin.indexModel'
    ],

    controller: 'origin-index',
    viewModel: {
        type: 'origin-index'
    },

    session: true,

    viewConfig: {
        forceFit: true
    },

    region: 'center',
    layout    : 'fit',

    title: 'Origenes',
    plugins: 'gridfilters',

    bind: {
        store: '{OriginListPagingStore}'
    },

    tbar: ['->',{
        text: 'Nuevo origen',
        handler: 'onAddClick'
    }],

    columns: [
        {
            text: 'Nombre',  dataIndex: 'name',
            flex: 1,
            filter: {
                type: 'string'
            }
        }, {
            text: 'Direccion',  dataIndex: 'address',
            flex: 1,
            filter: {
                type: 'string'
            }
        },{
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
            store: '{OriginListPagingStore}'
        },
        displayInfo: true,
        displayMsg: 'Mostrar {0} a {1} de {2} &nbsp;registros ',
        emptyMsg: "No existen registros para mostrar"
    }
});
