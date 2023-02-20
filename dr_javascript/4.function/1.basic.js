// 함수 = 특정한 일을 수행하는 코드이 집합 / 유지보수성, 재사용 가능, 높은 가독성
// return = 함수에서 값을 외부로 반환할 경우 필요

// 사용예제 1
function sum(a, b) {
  // const result = num1 + unm2; // 함수 내에서 result를 사용할 경우 변수에 담는다.
  console.log('function');
  return a + b;
}

const result = sum(1, 2);
console.log(result);

// 사용예제 2
// let lastName = '김';
// let firstName = '지수';
// let fullName = `${firstName} ${lastName} `;
// console.log(fullName);

// let lastName2 = '박';
// let firstName2 = '철수';
// let fullName2 = `${firstName2} ${lastName2} `;
// console.log(fullName2);

function fullName(firstName, lastName) {
  return `${firstName} ${lastName} 😀`;
}

let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));

let lastName2 = '박';
let firstName2 = '철수';
console.log(fullName(firstName2, lastName2));
