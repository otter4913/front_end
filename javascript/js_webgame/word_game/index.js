let seletBody = document.body;
    // wordBox = document.querySelector('.ward_bod');
    // form = document.querySelector('.form');
    // answer = document.querySelector('.answer');
    // btn = document.querySelector('.btn');
    // result = document.querySelector('.result');
    wordBox = document.createElement('div');
    form = document.createElement('form');
    answer = document.createElement('input');
    btn = document.createElement('button');
    result = document.createElement('div');
wordBox.textContent = 'apple';
btn.textContent = '입력';
seletBody.append(wordBox);
seletBody.append(form);
form.append(answer);
form.append(btn);
seletBody.append(result);

// 클릭
// btn.addEventListener('click', () => {
//     if (wordBox.textContent[wordBox.textContent.length - 1] === answer.value[0]){
//         result.textContent = '딩동댕!';
//         wordBox.textContent = answer.value;
//         answer.value = '';
//         answer.focus();
//     }else {
//         result.textContent = '땡!';
//         answer.value = '';
//         answer.focus();
//     }
// });


// 엔터
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (wordBox.textContent[wordBox.textContent.length - 1] === answer.value[0]){
        result.textContent = '딩동댕!';
        wordBox.textContent = answer.value;
        answer.value = '';
    }else {
        result.textContent = '땡!';
        answer.value = '';
    }
});

