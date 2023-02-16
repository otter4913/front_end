// let 재할당이 가능
let a = 1;
a = 2;

// const 재할달이 불가능
// 1. 상수
// 2. 상수변수 또는 변수

const test = 'hello';
// test = 'hi'; 불가능. 이렇게 하면 안됨..

// 1. 상수 (대문자로 작성, 단어와 단어사이는 '_'로)
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

// apple = {};
console.log(apple);

apple.name = 'orange';
apple.display = '🍏';
console.log(apple);

/** 중요!!!
 * let 재할당 가능 / 변경가능
 * const 재할당 불가능 / 변경 가능
 */
