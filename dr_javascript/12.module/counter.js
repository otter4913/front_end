let count = 0;
// default 는 한개만 여러개일때는 X
export function increase() {
  count++;
  console.log(count);
}

export function getCount() {
  return count;
}
