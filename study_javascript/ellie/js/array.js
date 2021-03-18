'use strict';

// Array

// 1. Declaration - 배열 생성 방법
const arr1 = new Array();
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






// array 공부
// .length; = number으로 출력, 배열의 길이를 나타냄
const studyArray = ['a','b','c','d'];
console.log(studyArray.length); // 4

// .toString(); = string으로 출력
console.log(studyArray.toString()); //a,b,c,d

// .toLocaleString(); = string으로 출력 - 로케일 설정을 따름(ex - 시간?!)
console.log(studyArray.toLocaleString()); //a,b,c,d

// .join('원하는 모양'); = string으로 출력 - 모든 배열을 하나의 문자열로 표현하는데 '원하는모양'을 넣어서 출력 가능, 디폴트는 ,이다.
console.log(studyArray.join()); // a,b,c,d
console.log(studyArray.join('-')); // a-b-c-d

// .reverse(); = 배열을 뒤집음 / 인덱스 뒤집기 !!! 원래 배열도 변경됨
const reverseArray2 = studyArray.reverse();
console.log(reverseArray2); //  ["d", "c", "b", "a"]
console.log(reverseArray2[1]); // c

// .slice(); = start(없으면 0)부터 end(미포함)까지 복사하여 새로운 배열로 반환
// .slice(start, end);
console.log(studyArray.slice()); // ["d", "c", "b", "a"]
console.log(studyArray.slice(1,3)); // ["c", "b"]

// .sort(); = 문자열로 반환하여 비교한 후 배열을 새로 정렬함 / 기본은 유니코드 포인트 순서로 비교됨
// .sort(function(a, b) { 배열 로직 }); = 배열 로직 대로 정렬 됨.
// - (a, b의 인덱스 값비교) a < b => 0보다 작을때, a = b => 0일때, a > b => 0보다 클때
const sortTest1 = [1, 100, 32, '22', '44', 'a'];
console.log(sortTest1.sort()); // [1, 100, "22", 32, "44", "a"]
function compareNumbers(a,b) { // 오름차순
    return a - b;
}
console.log(sortTest1.sort(compareNumbers)); // [1, "22", 32, "44", 100 , "a"] - 숫자 인덱스 < 문자 인덱스
console.log(sortTest1.sort((a, b) => b - a)); //  내림차순 - [100, "44", 32, "22", 1, "a"]

// .every(함수); = 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트 / 빈 배열은 무조건  true
const everyFunction1 = (vurrentValue) => vurrentValue < 30;
const everyFunction2 = (vurrentValue) => vurrentValue < 50;
const everyTest1 = [1, 13, 32, '22', '44'];
console.log(everyTest1.every(everyFunction1)); // false
console.log(everyTest1.every(everyFunction2)); // true

// .some(함수); = 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트 합니다. / 빈 배열은 무조건 false
const someFunction1 = (vurrentValue) => vurrentValue < 30;
const someFunction2 = (vurrentValue) => vurrentValue < 50;
const someTest1 = [1, 13, 32, '22', '44', 'a'];
console.log(someTest1.some(someFunction1)); // true
console.log(someTest1.some(someFunction2)); // true

// .map(함수); = 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아서 새로운 배열을 반환
const mapTest1 = [1, 13, 32, '22', '44', 'a'];
console.log(mapTest1.map((a) => a * 2 )); // [2, 26, 64, 44, 88] - 숫자의 경우 문자열이여도 숫자로 인식 / 문자열은 nan으로 반환

// .filter(함수); = 주어진 함수를 통과하는 요소들을 모아서 새로운 배열로 반환
const filterTest1 = [1, 13, 32, '22', '44', 'a'];
console.log(filterTest1.filter((a) => a < 40 )); // [1, 13, 32, "22"]

// .reduce(함수); = 배열의 각 요소에 대해 주어진 리듀서함수를 실행하고, 하나의 결과 값을 반환 // 왼쪽부터 시작
const reduceTest1 = [1, 2, 3, '4', 'a'];
const reduceTest2 = [[1, 2], [3, 4], [5]];
const reduce = (a, b) => a + b;
console.log(reduceTest1.reduce(reduce)); // 64a = 1+2+3+'4'+'a'
console.log(reduceTest1.reduce(reduce, 5)); // 114a = 5+1+2+3+'4'+'a'
console.log(reduceTest2.reduce(reduce)); // 1,23,45
console.log(reduceTest2.reduce(reduce, 5)); // 51,23,45

// reduceRight(함수); = .reduce(함수);와 동일하나 오른쪽 부터 시작
console.log(reduceTest1.reduceRight(reduce)); // a4321 = 'a'+'4'+3+2+1
console.log(reduceTest1.reduceRight(reduce, 5)); // 5a4321 = 5+a'+'4'+3+2+1
console.log(reduceTest2.reduceRight(reduce)); // 53,41,2
console.log(reduceTest2.reduceRight(reduce, 5)); // 553,41,2


