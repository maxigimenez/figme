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
                    list.removeColorFilter();
                    list.request();
                    break;
            }
        }.bind(this));

        search.addEventListener('search', function (e) {
            if ( e.target.value === '' ) {
                list.removeColorFilter();
                list.clear();
            }
        }.bind(this));

        if ( URIHash.detect('search') ) {
            this.query = URIHash.getFromIndex(2);
            list.request();
        }
    }
});
