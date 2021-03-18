// Math.random() - 0 ~ 1사이의 랜덤한 값을 표현함 ; 순수한 랜덤은 아님
// Math.floor() -  내림으로 소수점 아래의 숫자는 표현 하지 않음
// Math.ceil() - 올림
// String() - ()안의 값을 문자로 변환
// Number() - ()안의 값을 숫자로 변환

// 랜덤한 문제 출제

while(true) { // 무한하게 반복
    let num1 = Math.floor(Math.random() * 9) + 1;
        num2 = Math.floor(Math.random() * 9) + 1;
        result = num1 * num2;
        next = true;
    while(next) {
        // 답 입력
        let answer = prompt(`${num1} X ${num2} = ?`);
        // 맞는지 확인
        // 맞으면 다시 문제 출제
        if(result === Number(answer)) {
            alert('정답입니다');
            next = false;
        } else {
        // 틀리면 다시 답 입력
            alert('땡');
        }
    }
}
