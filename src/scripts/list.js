Polymer({
    is: 'figme-list',
    properties: {
        items: {
            type: Object,
            observer: '_itemsHasChanged'
        },
        query: {
            type: String
        },
        ifMore: {
            type: Boolean,
            value: false
        },
        offset: {
            type: Number,
            value: 0
        },
        results: {
            type: Array,
            value: []
        },
        color: {
            type: String,
            value: ''
        }
    },
    ready: function () {
        this._attachClipboard();
    },
    request: function(getMore) {
        if (!getMore) {
            this.results = [];
            this.offset = 0;
        }
        this.$.search.params.offset = this.offset;
        this.$.search.params.q = this.query;
        this.$.search.generateRequest();
        URIHash.set('search', this.query);
    },
    clear: function(event) {
        if (event) { event.preventDefault(); }
        this.items = {};
        this.offset = 0;
        URIHash.flush();
        this.removeColorFilter();
    },
    more: function() {
        this.offset += 12;
        this.request(true);
    },
    filterColor: function(value) {
        return function(item) {
            if (!value) return true;
            return item.color && item.color.indexOf(value) > -1;
        };
    },
    removeColorFilter: function(event) {
        if (event) {
            event.preventDefault();
        } else {
            var colorElement = document.querySelector('figme-colors');
            if (colorElement) {
                colorElement.flush();
            }
        }
        this.color = '';
    },
    _itemsHasChanged: function(value) {
        if ( typeof value.data === 'undefined' ) {
            this.results = [];
            this.ifMore = false;
        } else {
            this.results = this.results.concat(value.data);
            this.ifMore = value.pagination.total_count > this.results.length;
        }
    },
    _attachClipboard: function() {
        new Clipboard('paper-icon-button.clipboard', {
            text: function (trigger) {
                var item = trigger.parentElement.parentElement.parentElement.item;
                return trigger.id === 'code' ? item.markdown : item.images.original.url;
            }
        })
        .on('success', function() {
            this.$.copied.show();
        }.bind(this));
    }
});
