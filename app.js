Ext.application({
    name: 'ExtJSDemo',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'ExtJS Demo',
                    html : 'Hello! Welcome to ExtJS Demo App.'
                }
            ]
        });
    }
});