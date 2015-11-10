Polymer({
    is: 'figme-colors',
    properties: {
        items: {
            type: Array,
            value: []
        }
    },
    push: function(value) {
        if (this.items.indexOf(value) === -1) {
            this.items.push(value);
            this.notifyPath('items', this.items.slice());
        }
    },
    flush: function() {
        this.set('items', []);
    },
    filter: function(e) {
        var list = document.querySelector('figme-list');
        if (list.color !== e.target.dataItem) {
            list.set('color', e.target.dataItem);
        }
    },
    _computeColor: function(color) {
        return 'background-color: ' + color;
    }
});
