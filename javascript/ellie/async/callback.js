'use strict';

// JavaScript is synchronous. -  동기적
// Execute the code block in order after hoisting - 호이스팅된 이후부터 코드가 작성한 순서에 맞춰서 동기적으로 실행됨
// hoisiting: var, function declaration - var와 함수 선언이 맨위로 올라가는 것
console.log('1');
setTimeout(() => console.log('2'), 1000); // 비동기 언제 일어날지 모름
console.log('3');


// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printImmediately(()=>console.log('async callback'), 2000);





// Callback Hell example
// 가독성이 어려움, 비즈니스 로직을 이해하기도 어려움, 디버깅할때도 어려움
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({name : 'ellie', role: 'admin'});
            } else {
                onError(new Error('not access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            (userWithRole) => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            (error) => {
                console.log(error);
            }   
        );
    }, 
    error => {
        console.log(error);
    }
)
