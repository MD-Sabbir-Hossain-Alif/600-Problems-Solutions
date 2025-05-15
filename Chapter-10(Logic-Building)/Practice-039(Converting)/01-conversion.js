
//TODO: using function
/* ------------------------------- Problem 01 ------------------------------- */

function millToGoz(mill) {
    const goz = mill * 1760;
    return goz;
};
const goz = millToGoz(13);
console.log(goz);

// Output: 22880


//TODO: using function
/* ------------------------------- Problem 02 ------------------------------- */

function kiloWattToKiloCal(kiloWatt) {           //Kilo Watt per hour
    const kiloCal = kiloWatt * 860;
    return kiloCal;
};
const kiloWatt = kiloWattToKiloCal(14);
console.log(kiloWatt);

// Output: 12040


//TODO: using function
/* ------------------------------- Problem 03 ------------------------------- */

function hourToSecond(hour) {
    const sec = hour * 60 * 60;
    return sec;
};
const sec = hourToSecond(1);
console.log(sec);

// Output: 3600 


//TODO: using function
/* ------------------------------- Problem 04 ------------------------------- */

function cmToMeter(cm) {
    let meters = [];
    for (const num of cm) {
        const meter = num / 100;
        meters.push(meter);
    };
    console.log(meters);
};
const cm = [120, 200, 340, 550];
cmToMeter(cm);

// Output: [ 1.2, 2, 3.4, 5.5 ]


//TODO: using function
/* ------------------------------- Problem 05 ------------------------------- */

function inchToCm(inch) {
    const cm = inch * 2.54;
    return cm;
};
const inch = inchToCm(20);
console.log(inch);

// Output: 50.8


//TODO: using function
/* ------------------------------- Problem 06 ------------------------------- */

function poundToKilogram(pound) {
    const kg = pound * 0.453;
    return kg;
};
const pound = poundToKilogram(10);
console.log(pound);

// Output: 4.53


//TODO: using function
/* ------------------------------- Problem 07 ------------------------------- */

function goxToMeter(goz) {
    const meter = goz * 0.91;
    return meter;
}
const gozs = goxToMeter(50);
console.log(gozs);


// Output: 45.5