var FizzBazz = (function () {
    'use strict';
    var For = function (n) {
        var result = "", i = 1;

        for (i = 1; i <= n; i = i + 1) {

            if (i % 3 === 0 && i % 5 === 0) {
                result += "FizzBazz";
            } else if (i % 3 === 0) {
                result += "Fizz";
            } else if (i % 5 === 0) {
                result += "Buzz";
            } else {
                result += i.toString();
            }

            result += ' ';
        }
        return result.trim();
    };

    return {
        run: For
    };
}());
