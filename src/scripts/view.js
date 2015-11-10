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
        ga('send', 'event', 'Preview', 'show', this.item.id);
    },
    hide: function() {
        this.isShown = false;
        ga('send', 'event', 'Preview', 'hide', this.item.id);
    },
    download: function() {
        var link = document.createElement('a');
        link.download = null;
        link.href = this.item.images.original.url;
        link.click();
        ga('send', 'event', 'Copy', 'Download', this.item.id);
    },
    copy: function() {
        this.querySelector('#content-copy').click();
    }
});
