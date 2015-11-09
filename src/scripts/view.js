Polymer({
    is: 'figme-item-view',
    properties: {
        item: Object,
        isShown: {
            type: Boolean,
            value: false
        }
    },
    show: function() {
        this.isShown = true;
    },
    hide: function() {
        this.isShown = false;
    },
    download: function() {
        var link = document.createElement('a');
        link.download = null;
        link.href = this.item.images.original.url;
        link.click();
    },
    copy: function() {
        this.querySelector('#content-copy').click();
    }
});
