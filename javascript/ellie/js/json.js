'user strict';

// JSON - ajax(서버와 연동)
// JavaScript Object Notation
// - simplest data interchange format - 데이터를 주고 받을 때 쓸 수있는 가장  간단한 파일 포맷
// - lightweight text-based structure - 텍스트 기반으로한 가볍다
// - easy to read - 읽기 쉽고
// - key-value pairs - 키와 값으로 이루어진 포멧
// - used for serializaion adn transmission of data between the network the network connection - 데이터를 서버와 주고 받을 때 serializaion(직렬화)을 위해 쓴다
// - independent programiing language and platform - 프로그램언어와 플랫폼에 상관없이 쓸 수 있다.


// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    //symbol: Symbol("id"), // json에 포함되지 않음 = 자바스크립트에만 있는 특별한 데이터이기 때문에 제외
    jump: () => { // json에 포함되지 않음 = 함수는 오브젝트에 있는 데이터가 아니기때문에 제외
        console.log(`${this.name} can jump!`);
    },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']); // 원하는 요소만 만들 수 있음
console.log(json);


json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);


// 2. JSON to Object
// parse(json)
//console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(json);
console.log(obj);
rabbit.jump();
// obj.jump(); - json에 함수가 포함되지 않았기 때문에 불러올수 없음

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); - json의 birthDate가 스트링으로 저장되었기 때문에  API안됨

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2);
console.log(obj2.birthDate.getDate()); 


