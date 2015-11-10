URIHash = {};

URIHash.set = function(path, value) {
    window.location.hash = '/' + path + '/' + encodeURIComponent(value);
};

URIHash.flush = function() {
    window.location.hash = '/';
};

URIHash.detect = function(path) {
    return window.location.hash.indexOf(path) > -1;
};

URIHash.getFromIndex = function(index) {
    return decodeURIComponent(window.location.hash.split('/')[index]);
};
