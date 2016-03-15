/**
 * Created by AnaPinto on 3/7/2016.
 */

// A
var select = 1;
var number;
switch (select) {
    case 1:
        number = "2";
        break;
    case 2:
        number = "2 3";
        break;
    case 3:
        number = "2 3 5";
        break;
    case 4:
        number = "2 3 5 7";
        break;
    case 5:
        number = "2 3 5 7 16";
        break;
    case 6:
        number = "2 3 5 7 16 73";
        break;
}

// B

var numbers = [2,3,5,7,16,73];
var indice = 1;

if(indice == 1) {
    for (var i = 0; i < indice; i++) {
        console.log(numbers[i]);
    }
}

// C

var selectNumbers = function(indice) {

    switch (indice) {
        case 1:
            for (var i = 0; i < 1; i++) {
                console.log(numbers[i]);
            }
            break;
        case 2:
            for (var i = 0; i < 2; i++) {
                console.log(numbers[i]);
            }
            break;
        case 3:
            for (var i = 0; i < 3; i++) {
                console.log(numbers[i]);
            }
            break;
        case 4:
            for (var i = 0; i < 4; i++) {
                console.log(numbers[i]);
            }
            break;
        case 5:
            for (var i = 0; i < 5; i++) {
                console.log(numbers[i]);
            }
            break;
        case 6:
            for (var i = 0; i < 6; i++) {
                console.log(numbers[i]);
            }
            break;
    }
}

//2 3 5 = 5 * 2 - 3

var setSerie = function(indice){
    var n;
    var numbers = [2,3,5];


        for (var i = 0; i < indice -3 ; i++) {

            var number = numbers[numbers.length - 1] * numbers[numbers.length - 3] - numbers[numbers.length - 2];
            numbers.push(number);

        }

    return numbers;
}

//
