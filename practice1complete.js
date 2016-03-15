/**
 * Created by AnaPinto on 3/7/2016.
 */

//2 3 5 = 5 * 2 - 3

var newSerie = function(indice){
    var n;
    var numbers = [2,3,5];


    for (var i = 0; i < indice -3 ; i++) {

        var number = numbers[numbers.length - 1] * numbers[numbers.length - 3] - numbers[numbers.length - 2];
        numbers.push(number);

    }

    return numbers;
}


var newSerie2 = function(indice){
    var n;
    var numbers = [1,2,3];


    for (var i = 0; i < indice -3 ; i++) {

        var number = (-1) * (numbers[numbers.length - 1] - numbers[numbers.length - 2] - numbers[numbers.length - 3]);
        numbers.push(number);

    }

    return numbers;
}

/*
* var3 = numbers.length - 1
*
* var2 = numbers.length - 2
*
* var1 = numbers.length - 3
*
* */


var newSerie3 = function(indice){
    var n;
    var numbers = [1,2,3];


    for (var i = 0; i < indice -3 ; i++) {

        var number =(numbers[numbers.length - 3] + numbers[numbers.length - 2] - numbers[numbers.length - 1]);
        numbers.push(number);

    }

    return numbers;
}

/*
 * var3 = numbers.length - 1
 *
 * var2 = numbers.length - 2
 *
 * var1 = numbers.length - 3
 *
 * */