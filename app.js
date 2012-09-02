Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'ExtJSDemo',

    controllers: [
        'Users'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'userlist'
            }
        });
    }
});