// 동결! Object.freeze 추가 X, 삭제 X, 쓰기 X, 속성 재정의 X
// (단, 얕은 꽁꽁 얼림)
const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '🐶', owner: ellie };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
ellie.name = '엘리얌';
console.log(dog);

// 밀봉! Object.seal 값의 수정 가능, 추가 X , 삭제 X , 속성 재정의 X
const cat = { ...dog };
// Object.assign(cat, dog);
console.log(cat);
Object.seal(cat);
cat.name = '냐옹';
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog)); // 동결되었는지
console.log(Object.isSealed(cat)); // 밀봉되었는지

// 확장 금지 preventExtensions
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = ' 어흐흥';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
