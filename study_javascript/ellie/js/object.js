'use strict';
// Objects
// one of the JavaScript's data types.
//  a collection of related data and.or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { kye : value }; 


// 1. Literals and properties
// Object 생성 방법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // class 이용 / 'object constructor' syntax

// 하나의 값만 부여할 수 있다
const name = 'ellie';
const age = 4;
function print(name, age) {
    console.log(name);
    console.log(age);
}
print(name, age);

// 아래와 같이 오브젝트로 만들면 하나로 뭉칠 수 있다.
const ellie = { name: 'elli', age: 4};
function print2(person) {
    console.log(name);
    console.log(age);
}
print2(ellie);

// *runtime 일때 내용을 추가,삭제 할 수 있다 / 단, 유지보수에 힘들 수 있으니 사용을 안하는 방향으로 탕탕!
ellie.hasJob = true; 
console.log(ellie.hasJob); // true
delete ellie.hasJob;
console.log(ellie.hasJob); // undefined


// 2. Computed properties
// key should be always string
console.log(ellie.name); // - 코딩 하는 순간 그 값을 받아오고 싶을 때 주로 사용
console.log(ellie['name']); // - 정확하게 어떤 키가 필요한지 모를 때 즉, 런타임때 결정될 때 사용 (실시간으로 받아올때)
ellie['hasJob'] = true;
console.log(ellie.hasJob); // true

function printValue(obj, key) {
    // console.log(obj.key); 이렇게 쓰면 받아올 수 없음
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');


// 3. Property value shorthand = 키와 값이 동일 할때 생략 가능
// 아래 와 같이 같은 키값을 사용해야할때
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('ellie', 30);
console.log(person4);
function makePerson(name, age) { // 클래스가 없을때 사용했던 방법 
    return {
        name, //name = name
        age //age = age,
    }
}


// 4. Constructor Function
const person5 = new Person('hyelim', 29); // 호출방법
console.log(person5);
function Person(name, age) { // 계산이 없고 순수하게 오브젝트를 생성할땐 시작을 대문자로 , 리턴 사용 안함
    // this = {}; 생략
    this.name = name;
    this.age = age;
    // return this; 생략
}


// 5. in operator: property existence check (kye in obj) = 오브젝트 안에 키가 있는 지 체크
console.log('name' in ellie); // true
console.log('age' in ellie); // ture
console.log('job' in ellie); // false
console.log(ellie.job); // undefined



// 6. for..in vs for..of
// for (key in obj)
//console.clear(); // 기존에 있떤것 지움
for (let key in ellie){
    console.log(key);
}

// for (value of iterable) 배열, 리스트 같은 순차적인 데이터들에서 사용
const array = [1, 2, 4, 5];
// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
for (let value of array){
    console.log(value);
}



// 7. Fun cloning
// object.assing(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' }
const user2 = user;
user2.name = 'coder';
console.log(user); // coder로 변경됨

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);


// another example
const fruit1 = { color: 'red'}
const fruit2 = { color: 'blue', size: 'big'}
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 있는 값이 덮어씌워짐 
console.log(mixed.color);
console.log(mixed.size);