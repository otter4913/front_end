'use strict';

// Array

// 1. Declaration - 배열 생성 방법
const arr1 =new Array();
const arr2 = [1, 2];


// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]); // apple - 배열의 첫번째 요소 찾을 때
console.log(fruits[1]); // banana
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length -1]); // - 배열의 마지막 요소 찾을 때


// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}
// c. forEach
fruits.forEach((fruit) => console.log(fruit));


// 4. Addtion, deletion, copy
// push: add an item to end
fruits.push('orange', 'kiwi'); 
console.log(fruits); // ['apple', 'banana', 'orange', 'kiwi']

// pop: remove an item from the end
fruits.pop(); // ['apple', 'banana', 'orange']
fruits.pop(); // ['apple', 'banana']
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('lemon','melon');
console.log(fruits); // ['lemon', 'melon', 'apple', 'banana']

// shift: romove an item from the beginning
fruits.shift(); // ['melon', 'apple', 'banana']
fruits.shift(); // [apple', 'banana']
console.log(fruits);

// note!!! shift, unshift are slower than pop, push
// 앞에 추가,삭제하는 건 뒤에서 추가, 삭제 하는 것 보다 느리다.
// 왜냐하면 뒤에서 추가하는 것은 앞의 인덱스의 이동이 없기 때문이다.

// splice : remove an item by index position
fruits.push('orange', 'kiwi', 'lemon');
console.log(fruits); // [apple', 'banana', 'orange', 'kiwi', 'lemon']
fruits.splice(1, 1); // 두번째 인자(지울 개수)를 넣지 않으면 첫번째 인자(시작 인덱스)부터 끝까지 삭제됨
console.log(fruits); // [apple', 'orange', 'kiwi', 'lemon']
fruits.splice(1, 1, 'melon', 'strawberry'); // 1번째 요소 삭제 후 2개 추가
console.log(fruits); // [apple', 'melon', 'strawberry', 'kiwi', 'lemon']

// combine two arrays
const fruits2 = ['grape', 'blueberry']
const newFruits = fruits.concat(fruits2);
console.log(newFruits); //['apple', 'melon', 'strawberry', 'kiwi', 'lemon', 'grape', 'blueberry']
const newFruits2 = fruits.concat(['coconut','pear']); // - 배열로 넣어도 들어가고, 그냥 요소를 써도 넣어짐
console.log(newFruits2); //['apple', 'melon', 'strawberry', 'kiwi', 'lemon', 'coconut', 'pear']


// 5. Sarching
console.log(fruits);
// .indexOf(value) = find the index / (앞에서부터 찾기 시작) value의 인덱스 받아오기
console.log(fruits.indexOf('melon')); // 1 
console.log(fruits.indexOf('kiwi')); // 3
console.log(fruits.indexOf('blueberry')); // -1 => 없을땐 -1로 표시됨

// .includes(value) =  value가 배열에 포함되어 있는지 확인
console.log(fruits.includes('strawberry')); // true
console.log(fruits.includes('blueberry')); // false

// .lastIndexOf =  (뒤에서부터 찾기 시작) value의 인덱스 받아오기
fruits.push('apple'); // [apple', 'melon', 'strawberry', 'kiwi', 'lemon', 'apple']
console.log(fruits.indexOf('apple')); // 0
console.log(fruits.lastIndexOf('apple')); // 5

