// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
const array1 = ['🍌', '🍓', '🍇', '🍓'];
let change = (arr, deleteItem, changeItem) => {
  const changeArr = Array.from(arr);
  while (changeArr.includes(deleteItem)) {
    const changeIndex = changeArr.indexOf(deleteItem);
    changeArr.splice(changeIndex, 1, changeItem);
  }
  return changeArr;
};
const changeArray = change(array1, '🍓', '🥝');
console.log(array1);
console.log(changeArray);

// ellie
function elReplace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
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
let count = (arr, searchItem) => {
  let searchArr = Array.from(arr);
  let conutNum = 0;
  while (searchArr.includes(searchItem)) {
    const itemIndex = searchArr.indexOf(searchItem);
    searchArr.splice(itemIndex, 1);
    conutNum++;
  }
  return conutNum;
};

const arrayNum = count(array2, '🥝');
console.log(arrayNum);

// ellie
function elCount(array, item) {
  const replaced = Array.from(array);
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}
console.log(elCount(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
const array3 = ['🍌', '🥝', '🍇'];
const array4 = ['🍌', '🍓', '🍇', '🍓'];

let includeArry = (arr1, arr2) => {
  const matched = [];
  for (let i = 0; i < arr1.length; i++) {
    while (arr2.includes(arr1[i])) {
      const item = arr2.indexOf(arr1[i]);
      matched.push(arr1[i]);
      arr2.splice(item, 1);
    }
  }
  return matched;
};

const array = includeArry(array3, array4);
console.log(array);

// ellie
function elMatch(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}
console.log(elMatch(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));
