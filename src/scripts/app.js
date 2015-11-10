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
                    ga('send', 'event', 'Search', 'Request', this.query);
                    list.removeColorFilter();
                    list.request();
                    break;
            }
        }.bind(this));

        search.addEventListener('search', function (e) {
            if ( e.target.value === '' ) {
                ga('send', 'event', 'Search', 'Clear', '');
                list.removeColorFilter();
                list.clear();
            }
        }.bind(this));

        if ( URIHash.detect('search') ) {
            this.query = URIHash.getFromIndex(2);
            list.request();
            setTimeout(function(){
                ga('send', 'event', 'Search', 'RequestFromURL', this.query);
            }.bind(this), 500);
        }
    }
});
