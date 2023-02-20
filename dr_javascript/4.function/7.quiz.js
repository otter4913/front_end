// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// ex) 5를 전달, 순회하는 숫자를 다 출력하고 싶음
// ex) 최대값 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action) {}

// const log = function (a) {
//   for (let i = 0; i <= a; i++) {
//     console.log(i);
//   }
// };

// const doubleAndLog = function (a) {
//   for (let i = 0; i <= a; i++) {
//     console.log(i * 2);
//   }
// };

// function iterate(max, action) {
//   let result = action(max);
//   return result;
// }

// iterate(5, log);
// iterate(5, doubleAndLog);

// function iterate(max, action) {
//   for (let i = 0; i <= max; i++) {
//     if (action === 'log') {
//       console.log(i);
//     } else if (action === 'doubleAndLog') {
//       console.log(i * 2);
//     }
//   }
// }
// iterate(5, 'print');
// iterate(5, 'doubleAndLog');

const log = (num) => console.log(num);
const doubleAndLog = (num) => console.log(num * 2);

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

iterate(3, log);
iterate(3, doubleAndLog);

iterate(3, (num) => console.log(num));
iterate(3, (num) => console.log(num * 2));

setTimeout(() => {
  console.log('3초뒤 이함수가 실행될거에요');
}, 3000);
