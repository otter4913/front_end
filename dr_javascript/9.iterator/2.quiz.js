// [Symbol.iterator](): Iterator{ next(): {value}, done}};
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
// 0,1,2,3,....,9
// 0,2,4,6,....,18

const mulitple = {
  [Symbol.iterator]() {
    let current = 0;
    return {
      next() {
        if (current < 10) {
          return { done: false, value: current++ * 2 };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const num of mulitple) {
  console.log(num);
}

const el_mulitple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};

for (const num of el_mulitple) {
  console.log(num);
}
