'use strict';

import { greet, invertCase } from '../js/app'; //import the functions to test!

/* tests go here */


describe('Basic Math', function () {

    it('should add numbers correctly', function () {

        let sum = 1 + 1;

        // make assertion
        expect(sum).toEqual(2);
    });

});

describe('invert() function', function() {

    it('should invert from all caps', function() {
        let returnValue = invertCase("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

        expect(returnValue).toEqual("abcdefghijklmnoqprstuvwxyz");
    });

    it('should invert from all lowercase', function() {
        expect(invertCase("abcdefghijklmnoqprstuvwxyz")).toEqual("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    
    it('should work with mixed', function() {
        let returnValue = invertCase("aBcDefgHijkLmnopqRsTuvwXyZ");
        expect(returnValue).toEqual("AbCdEFGhIJKlMNOQPrStUVWxYz");
    });

    it('should ignore spaces', function() {
        expect(invertCase("hello world")).toEqual("HELLO WORLD");
    });

});
