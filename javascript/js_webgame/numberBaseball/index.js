//'use strict';

let selectBody = document.body;
    resultBox = document.querySelector('.resultBox');
    form = document.querySelector('.form');
    user = document.querySelector('.user');
    btn = document.querySelector('.btn');
let numArray;
let quiz;
// 컴퓨터가 임의 숫자 4자리 생선
function numBaseball() {
    numArray = [1,2,3,4,5,6,7,8,9];
    quiz = [];
    for(let i = 0; i < 4; i++){
        let quizNum = numArray.splice(Math.floor(Math.random() * (9 - i)),1)[0];
        quiz.push(quizNum);
    }
    console.log(quiz);
};
numBaseball();

// 결과 도출
let gameover = 0;// 틀린횟수
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // 답입력
    let answer = user.value;
    if (answer === quiz.join('')){
        resultBox.textContent = '홈런!!';
        user.value = '';
        user.focus();
        numBaseball();
        gameover = 0; // 초기화
        // console.log(`홈런 ${gameover}`);
    } else {
        let answerArray = answer.split('');
            strilke = 0;
            ball = 0;
            out = 0
            // 10회 제한
            gameover++;
        if(gameover < 10){    
            for(i = 0; i < 4; i++){
                if(Number(answerArray[i]) === quiz[i]){ // 자리와 숫자가 같은지 확인
                    strilke++;
                } else if(quiz.indexOf(Number(answerArray[i])) > -1) { // 자리는 다르지만 숫자가 있는지 확인
                    ball++;
                } else {
                    out++;
                }
            }
            resultBox.textContent = `스트라이크: ${strilke}, 볼: ${ball}, 아웃: ${out} (남은 기회 ${10 - gameover})`;
            user.value = '';
            user.focus();
            // console.log(`땡 ${gameover}`);
        } else {
            resultBox.textContent = `GAME OVER!!! 답 = ${quiz.join('')} | 다음문제 START!`;
            user.value = '';
            user.focus();
            numBaseball();
            gameover = 0; // 초기화
            // console.log(`오버 ${gameover}`);
        }
    }
});