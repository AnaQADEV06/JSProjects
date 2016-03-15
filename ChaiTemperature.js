/**
 * Created by AnaPinto on 3/15/2016.
 * Ex.3 Write a simple temperature converter along with the corresponding tests
 */

var expect = require('chai').expect;

/*
* class TemperatureConverter
* FCK var for Farenheit, Celsius, or Kelvin
* F var for Farenheit
* C var for Celsius
* K var for Kelvin
* */

var TemperatureConverter = function(){
    var FCK;
    var F;
    var C;
    var K;

};

/*
 * method convertFCK is for the following conversions: F to F, C to C and K to K
 */
TemperatureConverter.prototype.convertFCK = function(fck){
    this.FCK = fck;
    return this.FCK;
};

/* method convertFtoC is for the following conversion: F to C */

TemperatureConverter.prototype.convertFtoC = function(f){
    this.C = (f - 32) * 5/9;
    return this.C;
};

/* method convertFtoK is for the following conversion: F to K */

TemperatureConverter.prototype.convertFtoK = function(f){
    this.K = (f - 32) * 5/9 + 273.15;
    return this.K;
};

/* method convertCtoF is for the following conversion: C to F */

TemperatureConverter.prototype.convertCtoF = function(c){
    this.F = (c * 9/5) + 32 ;
    return this.F;
};

/* method convertCtoK is for the following conversion: C to K */

TemperatureConverter.prototype.convertCtoK = function(c){
    this.K = c + 273.15 ;
    return this.K;
};

/* method convertKtoF is for the following conversion: K to F */

TemperatureConverter.prototype.convertKtoF = function(k){
    this.F = (k - 273.15) * 9/5 +32;
    return this.F;
};

/* method convertKtoC is for the following conversion: K to C */

TemperatureConverter.prototype.convertKtoC = function(k){
    this.C = k - 273.15;
    return this.C;
};

var temp = new TemperatureConverter();

/* Test for method convertFCK */

describe('F to F, C to C or K to K', function(){

    it('#convertFCK 10 = 10',function(){
        var val1 = 10;
        var expectRes = 10;
        var actualRes = temp.convertFCK(val1);

        expect(actualRes).to.equal(expectRes);
    })

});

/* Test for method convertFtoC */

describe('F to C', function(){

    it('#convertFtoC F50 = C10',function(){
        var val1 = 50;
        var expectRes = 10;
        var actualRes = temp.convertFtoC(val1);

        expect(actualRes).to.equal(expectRes);
    })

});

/* Test for method convertFtoK */

describe('F to K', function(){

    it('#convertFtoK F50 = K283.15',function(){
        var val1 = 50;
        var expectRes = 283.15;
        var actualRes = temp.convertFtoK(val1);

        expect(actualRes).to.equal(expectRes);
    })

});

/* Test for method convertCtoF */

describe('C to F', function(){

    it('#convertCtoF C10 = F50',function(){
        var val1 = 10;
        var expectRes = 50;
        var actualRes = temp.convertCtoF(val1);

        expect(actualRes).to.equal(expectRes);
    })

});

/* Test for method convertCtoK */

describe('C to K', function(){

    it('#convertCtoK C10 = K283.15',function(){
        var val1 = 10;
        var expectRes = 283.15;
        var actualRes = temp.convertCtoK(val1);

        expect(actualRes).to.equal(expectRes);
    })

});

/* Test for method convertKtoF */

describe('K to F', function(){

    it('#convertKtoF K283.15 = F50',function(){
        var val1 = 283.15;
        var expectRes = 50;
        var actualRes = temp.convertKtoF(val1);

        expect(actualRes).to.equal(expectRes);
    })

});

/* Test for method convertKtoC */

describe('K to C', function(){

    it('#convertKtoC K283.15 = C10',function(){
        var val1 = 283.15;
        var expectRes = 10;
        var actualRes = temp.convertKtoC(val1);

        expect(actualRes).to.equal(expectRes);
    })

});