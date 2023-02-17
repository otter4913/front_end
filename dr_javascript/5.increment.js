// 증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a);

// a = a + 1;
console.log(a);
a++;
console.log(a);

// a = a - 1;
console.log(a);
a--;
console.log(a);

console.clear();
// 주의!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고 필요한 연산을 함

a = 0;
let b = a++;
console.log(b);
console.log(a);

a = 0;
let c = ++a;
console.log(c);
console.log(a);

let d = 0;
console.log(d++);

let e = 0;
console.log(++e);
