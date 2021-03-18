'use strict';

let body = document.body;
let table = document.querySelector('.game');
let block = document.querySelector('.game li');
let blockBox = [];

// 3x3 필드 생성
for(let i = 0; i < 3; i++) {
    let rowBlock = document.querySelector(`.game li:nth-child:${3*i +1}`);
    console.log(rowBlock);
    blockBox.push(rowBlock);
}
console.log(blockBox);
// 칸을 선택한다 (X or O)
// 빈칸 여부 확인
// 빈칸 - 턴 표시
// 비칸 X- 다시 선택

// 1줄이 되었는지 확인
// O -> 승리
// X -> 턴변경 