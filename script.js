// 'use strict';

let num = 50;

if (num < 49) {
    console.log("no");
} else if (num > 100) {
    console.log("a lot!");
} else {
    console.log("true");
};

(num == 50) ? console.log("yes") : console.log('no');


switch (num) {
    case num < 49:
        console.log("no");
        break;
    case num > 100:
        console.log("a lot!");
        break;
    case num > 80:
        console.log("a lot of");
        break;
    case 50:
        console.log("true");
        break;
    default:
        console.log("problem");
        break;
}