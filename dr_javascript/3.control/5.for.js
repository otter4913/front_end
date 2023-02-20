// 반복문 Loop Statement
// for (변수선언문; 조건식; 증감식) {}
// 실행순서:
// 1. 변수선언문 (초기화)
// 2. 조건식이 값이 참이면 코드 블럭을 수행
// 3. 증감식을 수행 (값을 증감)
// 4. 조건식이 거짓일 될때까지 2번과 3번을 반복함

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 중첩
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 무한루프 X
// for(;;) {
//   console.log('😛');
// }

// 반복문 제어: continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue;
    console.log('i 가 드디어 10이되었다');
    break;
  }
  console.log(i);
}
