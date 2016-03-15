/**
 * Created by AnaPinto on 3/15/2016.
 */

var TemperatureConverter = function(){
    var FCK;
    var F;
    var C;
    var K;

};

/*
* convertFCK method is for FtoF, CtoC and KtoK
*/
TemperatureConverter.prototype.convertFCK = function(fck){
    this.FCK = fck;
    return this.FCK;
};

/**/

TemperatureConverter.prototype.convertFtoC = function(f){
    this.C = (f - 32) * 5/9;
    return this.C;
};


TemperatureConverter.prototype.convertFtoK = function(f){
    this.K = (f - 32) * 5/9 + 273.15;
    return this.K;
};


/**/

TemperatureConverter.prototype.convertCtoF = function(c){
    this.F = (c * 9/5) + 32 ;
    return this.F;
};


TemperatureConverter.prototype.convertCtoK = function(c){
    this.K = c + 273.15 ;
    return this.K;
};

/**/

TemperatureConverter.prototype.convertKtoF = function(k){
    this.F = (k - 273.15) * 9/5 +32;
    return this.F;
};


TemperatureConverter.prototype.convertKtoC = function(k){
    this.C = k - 273.15;
    return this.C;
};

var temp = new TemperatureConverter();

