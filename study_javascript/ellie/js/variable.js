// 바닐라 자바스크립트로 작성시 모던하게 하기위해
'use strict'

// 2. variable, rw(read/write)
let
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
// var를 쓰면 안되는 이유!
// var hoisting (어디에 선언하던 항상 젤위로 선언을 끌여올려주는것)
// var no block scope

// 3.Contant, r(read only)
// immutable data type (변경 X)
const

// Note!! 데이터 타입!
// Immutable data types : primitive types, frozen objects (i.e. object.freeze()) - 데이터 자체 변경 불가
// Mutable data types : all objects by default are mutable in JS
// const를 사용하면 좋은점!
// - 보안상으로 안전 
// - thread sfety 동시에 이용될때 변경안되기때문
// - 실수 방지


// 4.Variable types
// - primitive (한가지 아이템)type = number, string, boolean, null, undifined, symbol = 메모리 저장법 - value
// - object 한가지아이템들을 박스형식으로 묶음으로 관리 = 메모리 저장법 - 레퍼런스가 메모리에 저장됨
// function , first-class function - 변수에 할당 가능하고 , 인자로도 가능, 리턴타입도 가능

// 4-1 number
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// 4-2 bigInt
//원래는 -2^53부터 2^53 자리까지만 표기 가능하지만 맨뒤에 n을 붙이면 새로운 타입이된다.
const bigInt = 1231231241212312124123124124124124124124124n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// 4-3 string
const char = 'c'; // 한가지
const brendan = 'brendan'; // 여러가지
const greeting = 'hello' + brendan; // 스트링 합치기 가능
console.log(`value: ${greeting}, type: ${typeof greeting}`);
//`${}`template literals(string)
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// 4-4 boolean
// false : 0, null, undefined, Nana, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// 4-5 null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// 4-6 undifined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// 4-7 symbol 우선순위를 주기위해 고유한 식별자가 필요한 경우에 쓴다
const symbol1 = symbol('id');
const symbol2 = symbol('id');
console.log(symbol1 === symbol2); // false
//동일한 심볼을 만들고싶을때
const gsymbol1 = symbol.for('id');
const gsymbol2 = symbol.for('id');
console.log(gsymbol1 === gsymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // 그냥 출력시 에러떠서 description사용하여 string 으로 변환 후 출력

// 4-8 object, data
const ellie = { name : 'ellie', age: 20 }; // const라 변경이 불가능하지만
// age. name 의 값은 변경 가능
ellie.age = 21;


// 5.Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h 
console.log(`value: ${text}, type: ${typeof text}`); // string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // number
console.log(text.charAt(0)); // error - 숫자로 변경되었기때문

