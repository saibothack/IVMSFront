Ext.define('IVMSFront.view.line.index',{
    extend: 'Ext.grid.Panel',
    xtype:'line-index',

    requires: [
        'IVMSFront.view.line.indexController',
        'IVMSFront.view.line.indexModel'
    ],

    controller: 'line-index',
    viewModel: {
        type: 'line-index'
    },

    session: true,

    viewConfig: {
        forceFit: true
    },

    region: 'center',
    layout    : 'fit',

    title: 'Lineas',
    plugins: 'gridfilters',

    bind: {
        store: '{LineListPagingStore}'
    },

    tbar: ['->',{
        text: 'Nueva Linea',
        handler: 'onAddClick'
    }],

    columns: [
        {
            text: 'Nombre',  dataIndex: 'name',
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
            store: '{LineListPagingStore}'
        },
        displayInfo: true,
        displayMsg: 'Mostrar {0} a {1} de {2} &nbsp;registros ',
        emptyMsg: "No existen registros para mostrar"
    }

});
