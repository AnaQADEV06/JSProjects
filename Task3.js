/**
 * Created by AnaPinto on 1/25/2016.
 */

var countWords = function (myparagraph){

    return myparagraph.length;
}

var paragraph = "Hello World!";
var totalWords = countWords(paragraph);
console.log("The number of words is: " + totalWords);

/*Commit Tuesday 02/03/2016*/

var askQuestion = function(name1){
    console.log("How are you?" +  name);
};


var sayHello = function(name2, cb){
    console.log("Hello " + name2);
    cb(name2);
}

var aName = 'Leo';
sayHello('Leo',function(name1){
    console.log("How are you? " +  name1);
});

/*Commit Wednesday 02/04/2016*/


(function(){
    var a = 2;
    var b = 3;
    var res = a+b;
    console.log('Sum is '  + res);
})();