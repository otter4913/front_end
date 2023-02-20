// static 정적 프로퍼티, 메서드

class Fruit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에스는 this를 참조할 수 없음
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// console.log(Fruit.makeRandomFruit());
// Fruit.makeRandomFruit();

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(banana.name);
console.log(banana.emoji);
banana.display();

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

// 사용예제
Math.pow();
Number.isFinite(1);
