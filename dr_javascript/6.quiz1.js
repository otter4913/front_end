// 카운터를 만들기
// 0 이상의 값으로 초기화 한뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// counter 클래스 만들기

class Counter {
  #num = 0;
  constructor(num) {
    if (num > 0) {
      this.#num = num;
    }
    // this.#num = num > 0 ? num : 0;
  }
  get add() {
    console.log(`${this.#num++}`);
  }
}
const counter = new Counter(3);
counter.add;
counter.add;
counter.add;
counter.add;
counter.add;
counter.add;

class Counter2 {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  get value() {
    return this.#value;
  }

  increment = () => {
    return this.#value++;
  };
}

const counter2 = new Counter2(0);
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
console.log(counter2.value);
