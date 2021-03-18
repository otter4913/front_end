'use strick';

// 함수 선언
// 1. 타입1 - 기능을 수행하고 끝나는 아이
function funcitonAame(add) {
    console.log(add);
    const result = add(1,2);
    console.log(result);
};
// 2. 타입2 - 계산을 끝내고 특정 값을 전달하는 아이
function add(a, b) {
    //console.log('add');
    const sum = a + b;
    return sum; // return을 통해 값을 전달한다.
};

// 함수 호출
// funcitonAame();
// add(1 ,2);
// const result = add(1,2);
// console.log(result);

funcitonAame(add);

const addFun = add;
console.log(addFun);
addFun(2,3);
const result = addFun(2,3);
console.log(result);
