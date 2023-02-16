// 불리언 타입
let 참 = true;
let 거짓 = false;

console.log(참);
console.log(거짓);

// 활용예 (is + 형용사)
let isFree = true;
let isActiveated = false;
let isEntrolled = true;
console.log(isFree);
console.log(isActiveated);
console.log(isEntrolled);

console.clear();

// Falshy 거짓인 값 (!!  ==> 특수한 값을 boolean값으로 변환해주는 연산자 )
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'test');
console.log(!!{});
console.log(!!Infinity);
