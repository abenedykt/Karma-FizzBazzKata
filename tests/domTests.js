/*global myDom*/
/*global describe*/
/*global beforeEach*/
/*global it*/
/*global expect*/
/*global document*/
/*global $*/

describe("Simplest DOM test", function () {
    "use strict";
    function examplePieceOfHtml() {
        return '<div class="control"><p></p></div>';
    }

    beforeEach(function () {
        $(document.body).append(examplePieceOfHtml());
    });

    it('adds a highlight style when highlight is executed', function () {
        var control = $('.control');
        myDom.highlight(control);

        expect(control.hasClass('highlight-this')).toBeTruthy();
    });
});