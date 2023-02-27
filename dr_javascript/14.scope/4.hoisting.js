// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함
print();

function print() {
  console.log('Hello');
}

// 변수(let, const)와 클래스는 선어만 호이스팅이되고,
// 초기화는 안됨!
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생함
//console.log('이전', hi); // 초기화가 안되었다???
let hi = 'hi';
console.log('나중', hi);
let func1 = function () {};
class Cat {}
const cat = new Cat();

let x = 1;
{
  console.log(x);
  let x = 2; // 초기화.....안됨..
}
