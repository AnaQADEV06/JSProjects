/**
 * Created by AnaPinto on 1/29/2016.
 */

/*Test*/

/*
var test = 121;
var compareTest1 = ((test.toString()).split("")).toString();
var compareTest2 = (((test.toString()).split("")).reverse()).toString();
console.log(compareTest1);
console.log(compareTest2);

if(compareTest1 === compareTest2){

    console.log( test + " es un numero capicua");
}
else{
    console.log(test + " no es un numero capicua")
}
*/


/*Commint Monday 01 Feb*/

/*lookCapicua function completed and tested */

var lookCapicua = function(i, f){

    var f = f;
    for (var i = i; i <= f; i++) {


        var compare1 = ((i.toString()).split("")).toString();
        var compare2 = (((i.toString()).split("")).reverse()).toString();

        if(compare1 === compare2){

            console.log( i + " is a capicua number!");
            break;
        }

    }

};

