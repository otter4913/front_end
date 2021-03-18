'use strict';

// let numArray = Array(45),
//     fill = numArray.fill();
// fill.forEach((a,index) => {
//     fill[index] == index + 1;
// });

let num = Array(45)
          .fill().map((a,index) => {
            return index + 1;
          });
console.log(num);

let shuffle = [];
// 사용법 구분
// for문 = 기준점(i< 기준점)이 확실할때
// while문 = 몇번 반복할지 확실하지 않을때, 기준점이 변할때
while(num.length > 0) {
    let shNum = num.splice(Math.floor(Math.random() * num.length),1)[0];
    shuffle.push(shNum);
}
console.log(shuffle);

let bonus = shuffle[shuffle.length -1];
let lotto = shuffle.slice(0,6).sort((a,b) => a - b);
console.log(`당첨번호: ${lotto} , 보너스: ${bonus}`);

// let result = document.getElementById('result');
// let bonusResult = document.getElementsByClassName('bonus')[0];

let result = document.querySelector('#result');
let bonusResult = document.querySelector('.bonus');

//클로저 문제로 이렇게 하면 안됨!
// for (let i = 0; i < lotto.length; i++) {
//     setTimeout(() => {
//         let ball = document.createElement('p');
//         ball.textContent = lotto[i];
//         result.appendChild(ball);
//     }, 1000);
// }

function ballStyle(num, el) {
    let ball = document.createElement('p');
    ball.textContent = num;
    ball.style.width = '30px';
    ball.style.heigth = '30px';
    ball.style.borderRadius = '100%';
    ball.style.border = '1px solid #999';
    ball.id = 'id' + num;
    ball.className = 'ball'
    let background = null;
    if(num <= 10) {
        background = 'red'
    }else if(num <= 20) {
        background = 'orange'
    }
    else if(num <= 30) {
        background = 'yellow'
    }
    else if(num <= 40) {
        background = 'blue'
    }else {
        background = 'green'
    }
    ball.style.background = background;
    el.appendChild(ball);
}

setTimeout(() => {
    ballStyle(lotto[0],result);
}, 1000);
setTimeout(() => {
    ballStyle(lotto[1],result);
}, 2000);
setTimeout(() => {
    ballStyle(lotto[2],result);
}, 3000);
setTimeout(() => {
    ballStyle(lotto[3],result);
}, 4000);
setTimeout(() => {
    ballStyle(lotto[4],result);
}, 5000);
setTimeout(() => {
    ballStyle(lotto[5],result);
}, 6000);
setTimeout(() => {
    ballStyle(bonus, bonusResult);
}, 7000);
    

