/**
 * Created by AnaPinto on 3/14/2016.
 */

//TDD Style
/*
var assert = require('assert');

suite('Hello World',function() {
    test('Message', function () {
        var actualMessage = 'Hello World';
        var expectedMessage = 'Hello World';
        assert.equal(actualMessage, expectedMessage, 'error');
    });
});

var assert = require('assert');

suite('Hello Anita',function() {
    test('Message', function () {
        var actualMessage = 'Hello Anita';
        var expectedMessage = 'Hello Anita';
        assert.equal(actualMessage, expectedMessage, 'error');
    });
});
*/

var expect = require('chai').expect;

var add = function(val1, val2){
    return val1 + val2;
};

describe('Simple Calculator', function(){

    it('#add 1 + 2 = 3',function(){
        var val1 = 1;
        var val2 = 2;
        var expectRes = 3;
        var actualRes = sum(val1, val2);

        expect(actualRes).to.equal(expectRes);
    })

});