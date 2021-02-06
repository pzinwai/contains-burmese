const containsBurmese = require('./index');

console.log(`Is Burmese ('မြန်မာနိုင်ငံ Myanmar Country') = ${containsBurmese('မြန်မာနိုင်ငံ Myanmar Country')}`); // true
console.log(`Is Burmese ('ミャンマー国') = ${containsBurmese('ミャンマー国')}`); // false