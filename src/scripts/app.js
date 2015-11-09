Polymer({
    is: 'figme-app',
    properties: {
        query: {
            type: String,
            value: ''
        }
    },
    ready: function() {
        var search = this.$.search;
        var list = this.$.list;

        search.addEventListener('keypress', function (e) {
            var code = e.keyCode || e.which;
            switch(code) {
                case 13:
                    list.request();
                    break;
            }
        }.bind(this));

        search.addEventListener('search', function (e) {
            if ( e.target.value === '' ) {
                list.clear();
            }
        }.bind(this));

        if ( list._detectQueryOnURL() ) {
            this.query = list._getQueryFromURL();
            list.request();
        }
    }
});
