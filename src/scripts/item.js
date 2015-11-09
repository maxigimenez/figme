Polymer({
    is: 'figme-item',
    properties: {
        item: Object
    },
    ready: function() {
        this.item.markdown = '![Generated with Figme.co]('+this.item.images.original.url+')';
        this._attachWatchers();
        this._extractColor();
    },
    _attachWatchers: function() {
        var element = this.querySelector('.item');
        var view = this.querySelector('figme-item-view');
        var loading = element.querySelector('.loading');
        var timer;

        element.addEventListener('mouseover', function(event) {
            if ( view.querySelector('iron-image').loaded ) {
                view.show();
                return;
            }
            loading.style.display = 'block';
            timer = setInterval(function(){
                if ( view.querySelector('iron-image').loaded ) {
                    loading.style.display = 'none';
                    view.show();
                    clearInterval(timer);
                }
            }, 150);
        });

        element.addEventListener('mouseout', function(event) {
            view.hide();
            loading.style.display = 'none';
            clearInterval(timer);
        });
    },
    _extractColor: function() {
        if (!this.item.color) {
            var colors = document.querySelector('figme-colors');
            var image = document.createElement('img');
            image.onload = function(){
                var color = new ColorThief();
                var value = color.getColor(image);
                var hex = this._rgbToHex(value[0], value[1], value[2]);
                colors.push(hex);
                this.item.color = hex;
                image = null;
            }.bind(this);
            image.crossOrigin = 'Anonymous';
            image.src = this.item.images.original_still.url;
        }
    },
    _rgbToHex: function(r, g, b) {
        var componentToHex = function(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? '0' + hex : hex;
        };
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
});
