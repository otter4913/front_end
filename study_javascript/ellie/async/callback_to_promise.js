'use strict';

// 원본은 callback.js에 있음
// Callback Hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
        
    }

    getRoles(user) {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({name : 'ellie', role: 'admin'});
                } else {
                    reject(new Error('not access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

// 프로미스로 간편하게 만들기
userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);



// async,await사용하여 위에 내용 축약하기
async function userInfo(id, password){
    try {
        const user = await userStorage.loginUser(id, password);
        const role = await userStorage.getRoles(user);
        return alert(`Hello ${role.name}, you have a ${role.role} role`);
    } catch(error) {
        return console.log(error);
    }
}
userInfo(id, password);



async function userInfo2(id, password){
    const user = await userStorage.loginUser(id, password);
    const role = await userStorage.getRoles(user);
    return alert(`Hello ${role.name}, you have a ${role.role} role`);
}
userInfo2(id, password).catch(console.log);