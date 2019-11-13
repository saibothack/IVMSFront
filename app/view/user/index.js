
Ext.define('IVMSFront.view.user.index',{
    extend: 'Ext.grid.Panel',
    xtype: 'user-index',

    requires: [
        'IVMSFront.view.user.indexController',
        'IVMSFront.view.user.indexModel'
    ],

    controller: 'user-index',
    viewModel: {
        type: 'user-index'
    },

    session: true,

    viewConfig: {
        forceFit: true
    },

    region: 'center',
    layout    : 'fit',

    title: 'Usuarios',
    plugins: 'gridfilters',

    bind: {
        store: '{UserListPagingStore}'
    },

    tbar: ['->',{
        text: 'Nuevo Usuario',
        handler: 'onAddClick'
    }],

    columns: [
        {
            text: 'Rol',  dataIndex: 'name',
            width:300,
            filter: {
                type: 'string'
            }
        }, {
            text: 'Nombre',  dataIndex: 'name',
            flex: 1,
            filter: {
                type: 'string'
            }
        },{
            text: 'Email',  dataIndex: 'email',
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
