/**
 * Created by AnaPinto on 1/21/2016.
 */

function MathOperations()
{

    var numbers;

    this.doOperations = function () {
        numbers = arguments;
        console.log('MAX is ', getMax(0, numbers.length - 1));
        console.log('MIN is ', getMin(0, numbers.length - 1));
        console.log('AVG is ', getAvg(0, numbers.length - 1));
        console.log('SUM is ', getSum(0, numbers.length - 1));
    };

    this.getMax = function (initialIndex, endIndex) {
        if (initialIndex === endIndex) {
            return numbers[endIndex];
        }
        return Math.max(numbers[initialIndex], getMax(initialIndex + 1, endIndex))
    };

    this.getMin = function (initialIndex, endIndex) {
        if (initialIndex === endIndex) {
            return numbers[endIndex];
        }
        return Math.min(numbers[initialIndex], getMin(initialIndex + 1, endIndex))
    };

    this.getAvg = function (initialIndex, endIndex) {
        if (initialIndex === endIndex) {
            return numbers[endIndex];
        }
        return (numbers[initialIndex] + getSum(initialIndex + 1, endIndex)) / numbers.length;
    };


    this.getSum = function (initialIndex, endIndex) {
        if (initialIndex === endIndex) {
            return numbers[endIndex];
        }
        return numbers[initialIndex] + getSum(initialIndex + 1, endIndex);
    };

};

var doMathOperations = new MathOperations();