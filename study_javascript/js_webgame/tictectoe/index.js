'use strict';

let body = document.body;
let table = document.querySelector('.game');
let block = document.querySelector('.game td');
let rowBox = [];
let blockBox = [];
let turn = 'X';
let result = document.querySelector('.result');

let clickF = function(e) {
    // 클릭시 위치값 받아오기
    let selectRow = rowBox.indexOf(e.target.parentNode);
    let selectBlock = blockBox[selectRow].indexOf(e.target);
    //console.log(`나는 ${selectRow}번째 ${selectBlock}칸 이야`);
    // 클릭시 빈칸인가?
    if(blockBox[selectRow][selectBlock].textContent === '' ){
        // 클릭한 위치값이 비었으면 넣고
        blockBox[selectRow][selectBlock].textContent = turn;
        let full = false;

       
    }else {
        // 차있으면 다른 칸 클릭 알림
    }

    let full = false;
    // 가로줄 검사
    if(
        blockBox[selectRow][0].textContent === turn &&
        blockBox[selectRow][1].textContent === turn &&
        blockBox[selectRow][2].textContent === turn
    ){
        full = true;
    }
    // 세로줄 검사
    if(
        blockBox[0][selectBlock].textContent === turn &&
        blockBox[1][selectBlock].textContent === turn &&
        blockBox[2][selectBlock].textContent === turn
    ){
        full = true;
    }
    //대각선 검사
    if(selectRow - selectBlock === 0){
        if(
            blockBox[0][0].textContent === turn &&
            blockBox[1][1].textContent === turn && 
            blockBox[2][2].textContent === turn
        ){
            full = true;
        }
        if(
            blockBox[0][2].textContent === turn &&
            blockBox[1][1].textContent === turn && 
            blockBox[2][0].textContent === turn
        ){
            full = true;
        } 

    }
    if(Math.abs(selectRow - selectBlock) === 2){
        if(
            blockBox[0][2].textContent === turn &&
            blockBox[1][1].textContent === turn && 
            blockBox[2][0].textContent === turn
        ){
            full = true;
        } 
    }

    if(full){
        result.textContent = `${turn}님이 승리하였습니다.`;
        turn = 'X';
        blockBox.forEach(function(rowBlock){
            rowBlock.forEach(function(dataBlock){
                dataBlock.textContent = '';
            });
        })
    } else {
        if(turn === 'X'){
            turn = 'O';
        } else {
            turn = 'X';
        }
    }

};
// 3x3 필드 생성
for(let i = 0; i < 3; i++) {
    let rowBlock = document.querySelector(`.game tr:nth-child(${i+1})`);
    rowBox.push(rowBlock);
    blockBox.push([]);
    for (let j = 0; j < 3; j++) {
        let dataBlock = document.querySelector(`.game tr:nth-child(${i+1}) td:nth-child(${j+1})`);
        dataBlock.addEventListener('click', clickF);
        blockBox[i].push(dataBlock);
    }
}

// 칸을 선택한다 (X or O)
// 빈칸 여부 확인
// 빈칸 - 턴 표시
// 비칸 X- 다시 선택

// 1줄이 되었는지 확인
// O -> 승리
// X -> 턴변경 