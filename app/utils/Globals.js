Ext.define("IVMSFront.util.Globals",{
    singleton : true,
    version:'1.0',
    config: {
        serverPath:'https://localhost:5001/api/'
    },

    getToken: function() {
    	var token =  localStorage.getItem("Token");
    	return token;
    },

    constructor : function(config) {
        this.initConfig(config);
    }
});