/**
 * Created by AnaPinto on 2/11/2016.
 */
/*NOTE: You should apply Google Javascript coding conventions in all your exercises.
For every mistake that you have 1 point is going to be subtract from your total grade.

 Create a JSTest class (using prototype) which has the following methods:

 1. getPrimeNumbers: Which prints the first N ‘prime’ numbers (N is a value provided by the user)

 2. getFactorial: Which calculates the factorial of a given number (number provided by the user).

 3. countVowels: Which counts the number of vowels ‘a’, ‘e’, ‘i’, ‘o’ and ‘u’ that a given paragraph has (paragraph provided by the user).

 4. evalParagraph: Which, given a long paragraph and a letter/char provided by the user, print the count and all the words that contain the specified char.

 Example. var paragraph = ‘hello world’; var letter = ‘h’; ? Count is: 1

 ? Words: hello

 5. Create a separate file which has an auto-executable function in order to run all methods (all 4 above exercises) from JSTest class*/

/*1
*
* function: getPrimeNumbers
* @param: firstPrimeNumbers
*
* */


var JSTest=function()
{};

JSTest.prototype.getPrimeNumbers = function(firtsPrimeNumbers){

    var top = firtsPrimeNumbers;

    var numbers = [4,5,6,7,8,9];

    var primeNumbers = [];

    var y = 0;

    for(var i = 0; i < numbers.length; i++){
    if(numbers[i]%2 == 0){

    }
    else if(numbers[i]%3 == 0){

    }
    else{
        primeNumbers[y] = numbers[i];
        y++;
    }
    };

    for(var z = 0; z < top; z++){
        console.log(primeNumbers[z]);
    }


};

/*2
* function: getFactorial
* @param: number
* */

JSTest.prototype.getFactorial = function (number) {
    var total = 1;
    for (i=1; i<=number; i++) {
        total = total * i;
    }
    return total;
}

/*3
* function: countVowels
* @param: p - is paragraph
*
* */

JSTest.prototype.countVowels = function(p){

    var paragraph = p;

    var arrayParagraph = paragraph.split('');
    var counterA = 0;
    var counterE = 0;
    var counterI = 0;
    var counterO = 0;
    var counterU = 0;
    for(var i = 0; i < arrayParagraph.length; i++){

        if(arrayParagraph[i] === 'a' ){
            counterA += 1;
            if(arrayParagraph[i] === 'e'){
                counterE += 1;
                if(arrayParagraph[i] === 'i'){
                    counterI += 1;
                    if(arrayParagraph[i] === 'o'){
                        counterO += 1;
                        if(arrayParagraph[i] === 'u'){
                            counterU += 1;

                        }
                    }
                }
            }
        }
    }

    return counterA;
    return counterE;
    return counterI;
    return counterO;
    return counterU;

}


/*4
* function: evalParagraph
* @param: p - is paragraph
* @param: l - is letter
* */


JSTest.prototype.evalParagraph = function(p, l){

    var paragraph = p;
    var letter = l;

    var arrayParagraph = paragraph.split('');
    var counter = 0;

    for(var i = 0; i < arrayParagraph.length; i++){

        if(arrayParagraph[i] === letter ){
            counter += 1;
        }
    }

    return counter;

}








































