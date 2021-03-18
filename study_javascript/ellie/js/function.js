'use strict';
// Function
// - fundamental buliding block in the program = 프로그램 구성하는 기본적인 블록
// - subprogram can be used multiple times = 여러면 가능
// - performs a task or calculates a value = 한가지의 태스크나 값계산

// 1. Function declaration
// function name(param1, param2) { body... return; } = 정의 방법

// on founciont === one thing = 하나의 함수는 한가지일만 가능하게!
// naming: doSomthing, command, verb = 커멘드형태로 동사형태
// e.g. createCardAndPoint -> createCard, createPoint = 두개로 함수 나누기

// function is object in JS = 오브젝트로 간주되어지기때문에 변수할당 가능, 파라미터로 전달가능, 함수로 리턴 가능
function PrintHello() {
    console.log('Hello');
}
PrintHello();

function log(message) {
    console.log(message);
}
log('aa');


// 2. Paramters
// premitive parameters : passed by value
// object parameters : passed by reference 
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    // 예전엔 직접 작성해줌
    // if (from === undefined) {
    //     form = 'unknown';
    // }
    console.log(`${message} by ${from}`);
}
showMessage('hi');


// 4. Rest parameters (added in ES6) = ...으로 사용하며 배열형태로 전달됨
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    // 간단하게표현방법
    for (const arg of args) {
        console.log(arg);
    }
    //더 간단하게
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');


// 5. Local scope = 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다!!
let globalMessage = 'global'; // global variable 전역변수
function priintMessage() {
    let message = 'hello';
    console.log(message); // lacal variable 지역변수
    console.log(globalMessage);
    function printAnother() {
        console.log(message); // closer(클로저) = 중첩된 함수에서 자식의 함수가 부모 함수에 정의된 변수에 접근이가능한 것들 
        let childMessage = 'hello!!';
    }
    //return undefined; = 리턴타입이 없는 함수의 경우는 들어있지만 생략 가능
}
priintMessage();


// 6. ReTurn a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1,2)}`);


// 7. Early return, early exit *실무팁!!
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}
// good
// 조건이 맞지 않는 경우, 값이 undefined인 경우, 값이 -1인 경우 빨리 리턴을 하고 진행하는게 더 효율적
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}






// First-class function
// functions are treated like any other variable = 변수와 동일
// can be assigned as a value to variable = 변수에 할당가능
// can be passed as an argument to other functions. = 함수의 파라미터값으로 전달이됨
// can be returned by another function = 리턴값으로도 받을 수 있다


// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it. = function expression은 할당된 다음 부터 호출 가능
// 함수 선언함과 동시에 변수에 할당함
const print = function () { // anonymous function 이름이 없는 함수
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes(); // call back function
    } else {
        printNo();
    }
}
// anonymous funtion
const printYes = function () {
    console.log('yes!!');
};
// named function
// better debugging in debugger's stack traces = 디버깅할때 표시되도록
// recursions = 함수안에서 자기 스스로 또다른 함수를 호출할 때 사용
const printNo = function pint() {
    console.log('no!!');
    //print();
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous function

// const simplePrint = function () {
//     console.log('simplePrint!');
// };
const simplePrint = () => console.log('simplePrint!');

// const add = function(a, b) { 
//     return a + b;
// };
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    //do someting more
    return a * b;
};



// IIFE: Immediately Invoked Function Expression = 바로바로 실행하고 싶을 때
function hello() {
    console.log('IIFE');
}
hello();
// 선언 후 호출은 해줘야한다.
// 괄호로 묶고 ();로 호출하면 바로 호출이 가능하다
(function hello() {
    console.log('IIFE');
})();



// Fun Quiz Time
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder

const calculate = (command, a, b) => {
    if(command === 'add'){
        console.log(a + b);
    } else if (command === 'subtract') {
        console.log(a - b);
    } else if (command === 'divide') {
        console.log(a / b);
    } else if (command === 'multiply') {
        console.log(a * b);
    } else if (command === 'remainder') {
        console.log(a % b);
    } else {
        console.log('잘못된 사용방법입니다.');
    }
}
calculate('add', 6, 3);
calculate('subtract', 6, 3);
calculate('divide', 6, 3);
calculate('multiply', 6, 3);
calculate('remainder', 6, 3);
calculate('aa', 6, 3);


// 풀이!

function calculate2(command, a, b) { // 정해진 데이터를 처리하는 경우에는 if문 보다는 switch문이 더 낫다
    switch (command) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error ('unknown command');
    }
}
calculate2('add', 6, 3);
calculate2('subtract', 6, 3);
calculate2('divide', 6, 3);
calculate2('multiply', 6, 3);
calculate2('remainder', 6, 3);
calculate2('aa', 6, 3);
