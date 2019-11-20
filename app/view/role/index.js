
Ext.define('IVMSFront.view.role.index',{
    extend: 'Ext.grid.Panel',
    xtype:'role-index',

    requires: [
        'IVMSFront.view.role.indexController',
        'IVMSFront.view.role.indexModel'
    ],

    controller: 'role-index',
    viewModel: {
        type: 'role-index'
    },

    session: true,

    anchor: '100% 100%',
    viewConfig: {
        forceFit: true
    },
    autoHeight    : false,
    layout    : 'fit',
    region    : 'center',

    title: 'Roles',
    plugins: 'gridfilters',

    bind: {
        store: '{RoleListPagingStore}'
    },

    tbar: ['->',{
        iconCls: 'x-fa fa-plus',
        text: 'Nuevo Rol',
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
            store: '{RoleListPagingStore}'
        },
        displayInfo: true,
        displayMsg: 'Mostrar {0} a {1} de {2} &nbsp;registros ',
        emptyMsg: "No existen registros para mostrar"
    }



});
