/*global FizzBazz*/
/*global describe*/
/*global beforeEach*/
/*global it*/
/*global expect*/
/*global document*/
/*global $*/

describe("FizzBazz game", function () {
    "use strict";

    it('is just a canary test', function () {
        expect(true).toBe(true);
    });

    it('should return "1" when executed with parameter 1', function () {
        var result = FizzBazz.run(1);
        expect(result).toBe("1");
    });

    it('should return "1 2" when executed with parameter 2', function () {
        var result = FizzBazz.run(2);
        expect(result).toBe("1 2");
    });

    it('should return "1 2 Fizz" when executed with parameter 3', function () {
        var result = FizzBazz.run(3);
        expect(result).toBe("1 2 Fizz");
    });

    it('should return "1 2 Fizz 4 Buzz" when executed with parameter 5', function () {
        var result = FizzBazz.run(5);
        expect(result).toBe("1 2 Fizz 4 Buzz");
    });

    it('should return "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBazz" when executed with parameter 15', function () {
        var result = FizzBazz.run(15);
        expect(result).toBe("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBazz");
    });
});

