
Ext.define('IVMSFront.view.product.index',{
    extend: 'Ext.grid.Panel',
    xtype: 'product-index',

    requires: [
        'IVMSFront.view.product.indexController',
        'IVMSFront.view.product.indexModel'
    ],

    controller: 'product-index',
    viewModel: {
        type: 'product-index'
    },

    session: true,

    viewConfig: {
        forceFit: true
    },

    region: 'center',
    layout    : 'fit',

    title: 'Productos',
    plugins: 'gridfilters',

    bind: {
        store: '{ProductListPagingStore}'
    },

    tbar: ['->',{
        text: 'Nuevo producto',
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
            text: 'Especificar carga',  dataIndex: 'specifyLoad',
            width:200,
            filter: {
                type: 'boolean'
            },
            renderer: function (t, meta, record) {
                var data = record.getData();
                if (data.specifyLoad) return 'Si';
                else return 'No';
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
            store: '{ProductListPagingStore}'
        },
        displayInfo: true,
        displayMsg: 'Mostrar {0} a {1} de {2} &nbsp;registros ',
        emptyMsg: "No existen registros para mostrar"
    }
});
