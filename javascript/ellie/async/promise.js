'use strict';


// Promise is a JavaScript object for asynchronmous operaion.
// - State : pending(수행중) -> fulfilled(성공해서 완료) of rejected(파일 찾지 못하거나 서버에 문제발생)
// - producer(데이터 만들어내는 것) vs Consumer(데이터 소비)


// 1.Producer
// when new Promise is created, the executor runs automatically.
// 만드는 순간 함수가 실행됨. 따라서 주의가 필요함 (예 - 버튼클릭시 실행)
const promise = new Promise((resolve, reject) => { 
    // doing some heavy work (network, read flies)
    console.log(`doing someting...`);
    setTimeout(() => {
        //resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});



// 2. Consumers : then, catch, finally
// value = 완료된 후 받아온 것 여기서는 'ellie'
promise //
.then((value) => { // then = 성공했을때 처리
    console.log(value);
})
.catch(error => { // catch = 실패했을때 처리
    console.log(error);
})
.finally(() => { // finallly = 성공하든 실패하든 무조건 나오는 아이
    console.log('finally');
});


// 3. Promise chaining
const fetchNumer = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 100);
});

fetchNumer
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    })
})
.then(num => console.log(num));



// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('chicken'), 1000);
});
const getEgg = hen =>
    new Promise((resolve, reject) => {
    setTimeout(() => reject(`error!${hen} => egg`), 1000);
});
const cook = egg =>
    new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => fry egg `), 1000);
});

getHen()
.then(getEgg) //(hen => getEgg(hen)) - 콜백함수를 전달할때 받아오는 값을 바로 하나를 호출하는 경우 생략가능
.catch(error => { // 위에것에 바로아래에 처리 가능
    return 'bread'
})
.then(cook) //(egg => cook(egg))
.then(console.log) //(meal => console.log(meal));
.catch(console.log);




