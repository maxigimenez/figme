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
        var boxes = document.querySelectorAll('.box');
        for ( var i = 0; i < boxes.length; i++ ) {
            Polymer.dom(boxes[i]).setAttribute('class', 'box figme-colors');
        }

        var list = document.querySelector('figme-list');
        var newVal = '';

        if (list.color !== e.target.dataItem) {
            newVal = e.target.dataItem;
            Polymer.dom(e.target).setAttribute('class', 'box selected figme-colors');
        }

        this.updateStyles();
        list.set('color', newVal);
    },
    _computeColor: function(color) {
        return 'background-color: ' + color;
    }
});
