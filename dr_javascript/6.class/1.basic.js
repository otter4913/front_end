// 객체를 손쉽게 만둘수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적ㅇ니 방법)
// 2. 클래스!!

// 클래스 class
class Fruit {
  // 생성자 : new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 함수는 constructor 밖에서 선언
  // display() {} 로도 가능
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple은 Fruit 클래스의 인스턴스(객체)이다.
const apple = new Fruit('apple', '🍎');
// orange은 Fruit 클래스의 인스턴스(객체)이다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.name);
console.log(apple.emoji);
console.log(orange.emoji);
apple.display();
orange.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'ellie' };
