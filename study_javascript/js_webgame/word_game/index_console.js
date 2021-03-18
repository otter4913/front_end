
    // 반복문 비교

    // <!-- while -->
    // 처음
    // while(조건) {
    //     실행
    //     끝
    // }

    // <!-- for -->
    // for(처음; 조건; 끝) {
    //     실행
    // }
    // 끝은 조건을 트루로 만들어주는 내용을 담으면 된다.





let firstWord = 'apple';
//while
while(true) {
    let answer = prompt(firstWord);
    if (firstWord[firstWord.length - 1] === answer[0]){
        firstWord = answer;
    }else {
        alert('끝말잇기란 말이에요!');
    }
}

//for
// for(let word='aaa'; true;) {
//     let answer = prompt(firstWord);
//     if (firstWord[firstWord.length - 1] === answer[0]){
//         firstWord = answer;
//     }else {
//         alert('끝말잇기란 말이에요!');
//     }
// }
