/**
 * Created by AnaPinto on 3/15/2016.
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
        var actualRes = add(val1, val2);

        expect(actualRes).to.equal(expectRes);
    })

});
it('#add 1 - 2 = -1',function(){
    var val1 = 1;
    var val2 = -2;
    var expectRes = -1;
    var actualRes = add(val1, val2);

    expect(actualRes).to.equal(expectRes);
})


it('#add -1 - 2 = -3',function(){
    var val1 = -1;
    var val2 = -2;
    var expectRes = -3;
    var actualRes = add(val1, val2);

    expect(actualRes).to.equal(expectRes);
})



var expect = require('chai').expect;

var add = function(val1, val2){
    return val1 + val2;
};

describe('Simple Calculator', function(){

    var addArray = [{v1:1,v2:2,r:3},
        {v1:2,v2:3,r:5},
                {v1:10,v2:22,r:32}];

    addArray.forEach(function(el){
        it('#add' + el.v1 + ' + ' + el.v2 +' = '+ el.r ,function(){
            var val1 = el.v1;
            var val2 = el.v2;
            var expectRes = el.r;
            var actualRes = add(val1, val2);

            expect(actualRes).to.equal(expectRes);
        })

    });


});

