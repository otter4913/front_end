'use strict';
// 1. String concatenation = +
console.log('my' + 'cat'); //mycat
console.log('1' + 2); // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`); // string literals: 1+2 = 3


// 2. Numeric operatiors
console.log(1 + 1); // add 더하기 = 2
console.log(1 - 1); // substract 빼기 = 0
console.log(1 / 1); // divide 나누기 = 1
console.log(1 * 1); // multiply 곱하기 = 1
console.log(5 % 2); // remainder 나머지 값 = 1
console.log(2 ** 3); // exponentiation 제곱 2의3승 = 8


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // 하나를 증가한 다음에 다시 변수에 넣어줌 
// counter = counter + 1 
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // 3 3

const PostIncrement = counter++; // 먼저 변수에 할당한 뒤에 값을 증가시킴
// postIncrement = counter
// counter = counter + 1
console.log(`PostIncrement: ${PostIncrement}, counter: ${counter}`); // 3 4

const preDecrement = --counter
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // 3 3

const PostDecrement = counter--
console.log(`PostDecrement: ${PostDecrement}, counter: ${counter}`); // 3 2


//4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
console.log(x); // 9
x -= y; // x = x - y
console.log(x); // 3
x *= y; // x = x * y
console.log(x); // 18
x /= y; // x = x / y
console.log(x); // 3


// 5. Comparison operators
console.log(10 < 6); // less than 작거나
console.log(10 <= 6); // less than or equal 작거나 같다
console.log(10 > 6); // greater than 크거나
console.log(10 >= 6); // greater than equal 크거나 같다


// 6. Logical operators: ||(or), &&(end), !(not)
const value1 = false;
const value2 = 4 < 2;

// 6-1 ||(or) 3개중 1개만 트루이면 됨!!* 첫번째가 트루이면 거기서 로직을 빠져나옴
console.log(`or: ${value1 || value2 || check()}`); // 심플한 코드부터 앞으로 함수를 맨뒤로

// 6-2 &&(end) 3개다 트루여야 트루를 리턴함!!* 첫번째가 false이면 뒤에 로직 안함
console.log(`end: ${value1 && value2 && check()}`);
// &&는 null체크할 때 유용하게 쓰임
// nullableObject && nullableObect.sometihing = nullableObject가 null이면 2번째 실행이 안되므로  null이 아니여야 2번째가 실행됨
// if(nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('--');
    }
    return true;
}

// 6-3 !(not)
console.log(!value1)//true


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equaliy, with type conversion = 타입 비교 안함
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false
// === loose equaliy, no type conversion = 타입까지 비교 **이거더 중요
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const ellie1 = { name : 'ellie' };
const ellie2 = { name : 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false - 레퍼런스를 담고있기 때문에 안에 내용이 같아도 다른 레퍼런스이다
console.log(ellie1 === ellie2); // false - 레퍼런스를 담고있기 때문에 안에 내용이 같아도 다른 레퍼런스이다
console.log(ellie1 === ellie3); // true - 레퍼런스를 그대로 받고있기때문에 같은 레퍼런스이다



// equalilty - puzzler
console.log( 0 == false ); // true
console.log( 0 === false ); // false - 타입이 다름
console.log( '' == false ); // true
console.log( '' === false ); // false - 타입 다름
console.log( null == undefined ); // true
console.log( null === undefined ); // false - 타입 다름


// 8. Conditional operators : if
// if, else if, else
const name = 'coder';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('Ypu are amazing coder'); // 이걸로 출력됨!
} else {
    console.log('unkwnon');
}


// 9. Ternary operator : ?  삼항함수
// condition ? value1 : value2;
console.log(name === 'ellie'?'yes' : 'no'); // no


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!'); // 이거 나옴
        break;
    case 'Chorme':
    case 'Firefox': // 노출 값이 동일하기 때문에 이렇게 써도 무관
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first, do 내용을 먼저 실행하고 체크sss
// then check the condition,
do {
    console.log(`while: ${i}`);
    i--;
} while (i > 0)

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i++) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }



//Quiz
//1. iterate from 0 to 10 and print only even numbers (use continue)
// 나
for(i = 0; i < 1 ; i++){
    if(i % 2 === 0) {
        console.log(`Q1 : ${i}`);
    }
}
// 정답 컨티뉴!
for(i = 0; i < 1 ; i++){
    if(i % 2 !== 0) {
        continue;
    }
    console.log(`Q1 : ${i}`);
}

//2. iterate form 0 to 10 and print numbers until reaching 8 (use break)
for(i = 0; i < 11 ; i++){
    if(i > 8) {
        break;
    }
    onsole.log(`Q2 : ${i}`);
}
