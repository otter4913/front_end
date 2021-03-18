'use strict';

const obj = {
    name: 'aa',
    age: 2,
};
console.log(obj);

let obj2 = obj;
console.log(obj.name);
console.log(obj2.name);

obj2.name = 'bb';
console.log(obj.name);
console.log(obj2.name);
obj.job = 'x';
console.log(obj.job);

let test = 5;
let test2 = 3;
if(test < 0 || test2 !== 3){
    console.log(test);
}
test < 0 || test2 !== 3 || console.log(test);

class Counter {
    constructor() {
        this.b = 0;
        this.a = 'a';
    }
}
const aa = new Counter();
console.log(aa);

console.log(aa.b);
console.log(aa.a);