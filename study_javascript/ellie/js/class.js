'use strict';
// Object-oriendted programming
// class : template
// object: instance of class
// JavaScript classes = 언어 구현사항 디테일
//  - introduced in ES6
//  - syntacital sugar over prototype-based inheritance


// 1. Class declarations
class Person {
    // constructor 생성자
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2 Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    get age() { // 값 리턴
        return this._age;
    }

    set age(value) { // 값 설정
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment {
    publicField = 2; // 외부에서 접근가능
    #privateField = 0; // #태그 넣기 클래스 내부에서만 값이 보여지고 접근가능 변경가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. Static properties and methods -  오브젝트에 상관없이, 들어오는 데이터와 상관없이 공통적으로 클래스에서 쓸수있는 것일 때 사용하면 메모리 사용을 줄일 수 있다.
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // static을 사용하면 클래스 자체에 있는 것이기 때문에 데이터가 지정되지 않음
console.log(Article.publisher); // 이렇게 해야 값이 나옴
Article.printPublisher();


// 5. Interitance
//  a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw(); // 재정의 하면 기존 내용이 없어지는데 super.로 불러오면 기존의 내용을 불러올 수 있다
        console.log('triangle');
    }
    getArea() { // 수정이 필요한 부분만 불러와서 수정 하면 됨
        return this.width * this.height / 2;
    }

    toString() { // 오브젝트에서 상속 받은 함수이다.
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceOF =  A instanceof Class / A가 Class의 인스턴스인지 아닌지 확인
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); // Triangle.toString()참고 / 자바스크립트의 오브젝트들은 오브젝트를 상속받은 것이다