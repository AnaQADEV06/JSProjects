/**
 * Created by AnaPinto on 1/29/2016.
 */

/*Test*/


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