let seletBody = document.body;
    quizBox = document.querySelector('.quiz_box');
    form = document.querySelector('.form');
    answer = document.querySelector('.answer');
    btn = document.querySelector('.btn');
    resultBox = document.querySelector('.resultBox');
    num1 = Math.ceil(Math.random() * 9) + 1;
    num2 = Math.ceil(Math.random() * 9) + 1;
    quiz = num1 * num2;
    quizBox.append(`${num1} x ${num2} = ?`);

    // btn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     if(quiz === Number(answer.value)) {
    //         resultBox.textContent = '딩동댕';
    //         num1 = Math.ceil(Math.random() * 9) + 1;
    //         num2 = Math.ceil(Math.random() * 9) + 1;
    //         quiz = num1 * num2;
    //         quizBox.textContent = `${num1} x ${num2} = ?`;
    //         answer.value = '';
    //         answer.focus();
    //     } else {
    //         resultBox.textContent = '땡';
    //         answer.value = '';
    //         answer.focus();
    //     }
    // });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(quiz === Number(answer.value)) {
            resultBox.textContent = '딩동댕';
            num1 = Math.ceil(Math.random() * 9) + 1;
            num2 = Math.ceil(Math.random() * 9) + 1;
            quiz = num1 * num2;
            quizBox.textContent = `${num1} x ${num2} = ?`;
            answer.value = '';
        } else {
            resultBox.textContent = '땡';
            answer.value = '';
        }
    });