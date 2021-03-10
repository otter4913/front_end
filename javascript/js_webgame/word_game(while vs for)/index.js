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
