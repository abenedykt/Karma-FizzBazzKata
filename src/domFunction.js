/*global myDom*/

var myDom = (function () {
    'use strict';
    function highlight(item) {
        item.addClass('highlight-this');
    }

    return {
        highlight: highlight
    };
}());
