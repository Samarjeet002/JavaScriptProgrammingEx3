/*
    JavaScript Programing Exercise 3
    Dates
    Samarjeet
*/

let registration = new Date(2020, 0 ,7 ,8, 25);
console.log(registration);

console.log(`Year: ${registration.getFullYear()}`);
console.log(`Month: ${registration.getMonth()}`);
console.log(`Day of Week: ${registration.getDay()}`);
console.log(`Date: ${registration.getDate()}`);
console.log(`hours: ${registration.getHours()}`);
console.log(`Minutes: ${registration.getMinutes()}`);
console.log(`Seconds: ${registration.getSeconds()}`);

let now = new Date();
console.log(now);

console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()}`);
console.log(`Day of Week: ${now.getDay()}`);
console.log(`Date: ${now.getDate()}`);
console.log(`hours: ${now.getHours()}`);
console.log(`Minutes: ${now.getMinutes()}`);
console.log(`Seconds: ${now.getSeconds()}`);
console.log(`Millisecond: ${now.getUTCMilliseconds()}`);

now.setFullYear(1999);
console.log(`${now.toDateString()} ${now.toDateString()}`);

console.group('~~~~~~~~~~~~~~~');
console.log('Exercise 3');