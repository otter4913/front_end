// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { } // 함수도 객체여서 가능
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
// add = (a, b) => {
//   return a + b;
// };
add = (a, b) => a + b; // 값만 return 하는 함수면 {}, return 생략가능
console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immedicately-Invoked Function Expressions)  정의하면서 실행 // ()로 묶으면 값으로 되기때문에 ();로 실행
(function runf() {
  console.log('😀');
})();
