'use strict';

// async & await
// clear style of using promise :)


// 1. async - 함수 앞에 async 붙이면됨 = 코드블록이 프로미스로 변함

// 프로미스를 사용할때
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         // do network reqeust in 10 secs...
//         resolve('ellie');
//     });
// }

async function fetchUser() {
    // do network reqeust in 10 secs...
    return('ellie');
}

const user = fetchUser();
user.then(console.log);
console.log(user);



// 2. await = async가 붙은 함수 안에서만 사용 가능
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    //throw 'error';
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}
// async function getBanana() { 위의 내용을 프로미스로이용해서 쓴다면
//     return delay(1000)
//     .then(() => '🍌');
// }



// 프로미스를 너무 중첩해서 사용해도 콜백지옥이 생성된다 따라서 아래와 같이 바꿀수 있다
// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`)
//     })
// }
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);


//에러 처리방법 - try()에 실행 함수 넣고, catch()에 에러 핸들링
// async function pickFruits() {
//     try {
//         const apple = await getApple();
//         const banana = await getBanana();
//         return `${apple} + ${banana}`;
//     } catch() {
        
//     }
// }



// 사과와 바나나가 1초씩 딜레이되는것이 서로 관련이 없어서, 기존에 쓰면 총 2초가 걸려 개선이 가능하다
// 프로미스를 생성하면 바로 실행 가능한 점을 이용하여 사과와 바나나를 각각 프로미스로 만들어 사용하면 병열적으로 시작된다
// 그렇지만 이렇게 사용하지 않음
async function pickFruits() { 
    
    const applePromise = getApple();
    const bananaPromise = getBanana()
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    // 프로미스의 배열을 전달하게 되면 모든 프로미스들이 병렬적으로 다 받을 때까지 모아주는아이!
    return Promise.all([getApple(), getBanana()])
    .then( fruits => fruits.join('+'));
}
pickFruits().then(console.log);

function pickOnlyOne() {
    // 전달된 배열 중에서 가장 먼저 값을 리턴하는 아이만 전달됨
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);





// homework