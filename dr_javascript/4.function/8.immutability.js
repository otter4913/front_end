// Immutability(불변성) == unchangable

// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 X
// 상태 변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반화해야 함!!
// 윈시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리 주소)
function display(num) {
  // let num = 4;
  num = 5; // X
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

// 객채일때 예시
function displayObj(obj) {
  obj.name = 'Bob'; // XXXXXX 외부로부터 주어진 인자(오브젝트)를 내부에서 변경 X
  console.log(obj);
}
const ellie = { name: 'Ellie' };
const ellie2 = { name: 'Ellie' };
displayObj(ellie);
console.log(ellie);

// 내부에서 변경해야할 경우
// 함수이름부터 변경하는 느낌을 주도록!
function changeName(obj) {
  return { ...obj, name: 'Bob' }; // 반환할때는 새로운 오브젝트 만들기!
}
displayObj(changeName(ellie2));
console.log(ellie2);
