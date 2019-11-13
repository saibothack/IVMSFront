Ext.define("IVMSFront.util.Globals",{
    singleton : true,


    version:'1.0',
    config: {
        serverPath:'https://localhost:44316/api/'
    },

    constructor : function(config) {
        this.initConfig(config);
    }
});