/**
 * Created by AnaPinto on 1/27/2016.
 */

var date1 = new Date();

var day = date1.getDay();

switch (day){
    case 1:
        console.log("Today is: Monday !");
        break;
    case 2:
        console.log("Today is: Tuesday !");
        break;
    case 3:
        console.log("Today is: Wednesday !");
        break;
    case 4:
        console.log("Today is: Thursday !");
        break;
    case 5:
        console.log("Today is: Friday !");
        break;
    case 6:
        console.log("Today is: Saturday !");
        break;
    case 7:
        console.log("Today is: Sunday !");
        break;
}


var time = date1.getHours();

if(time >= 12 && time < 24){

    console.log("Current time is: " + date1.getHours() + " PM " + date1.getMinutes() + " " + date1.getSeconds());
}
else{

    console.log("Current time is: " + date1.getHours() + " AM " + date1.getMinutes() + " " + date1.getSeconds());

};