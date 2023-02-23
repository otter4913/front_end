// 옵셔널 체이닝 연산자 Optilanl Chanining Operator
// ES11 (EcmaScript 2020)
// ?.

// null 또는 undefined.인 경우를 확인할때
let item = { price: 1 };
// const price = item && item.price;
const price = item?.price;
console.log(price);

let obj = { name: '🐶', owner: { name: '엘리' } };
function printName(obj) {
  // const ownerName = obj && obj.owner && obj.owner.name;
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(obj);
printName();
