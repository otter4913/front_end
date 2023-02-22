// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
const change = (arr, deleteItem, changeItem) => {
  return arr.map((item) => (item === deleteItem ? changeItem : item));
};
const array1 = ['🍌', '🍓', '🍇', '🍓'];
const changeArray = change(array1, '🍓', '🥝');
console.log(array1);
console.log(changeArray);

// ellie
function elReplace(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}
const el_array = ['🍌', '🍓', '🍇', '🍓'];
const el_result = elReplace(el_array, '🍓', '🥝');
console.log(el_result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
const array2 = ['🍌', '🥝', '🍇', '🥝'];
const count = (arr, searchItem) => {
  return arr.filter((item) => item === searchItem).length;
};
console.log(count(array2, '🥝'));

// ellie
function elCount(array, item) {
  return array.filter((value) => value === item).length;
  // return array.reduce((countNum, value) => {
  //   if (value === item) {
  //     countNum++;
  //   }
  //   return countNum;
  // }, 0);
}
console.log(elCount(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
const array3 = ['🍌', '🥝', '🍇'];
const array4 = ['🍌', '🍓', '🍇', '🍓'];
const includeArry = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};
console.log(includeArry(array3, array4));

// ellie
function elMatch(input, search) {
  return input.filter((item) => search.includes(item));
}
console.log(elMatch(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균
function average(arr) {
  const arrSort = arr.filter((item) => item > 5);
  const result = arrSort.reduce((sum, value) => (sum += value), 0);
  return result / arrSort.length;
}
const nums = [3, 16, 5, 25, 4, 34, 21];
console.log(average(nums));

// ellie
const result2 = nums
  .filter((num) => num > 5) // [16, 25, 34, 21];
  .reduce((avg, num, _, array) => {
    return avg + num / array.length;
  }, 0);
console.log(result2);
