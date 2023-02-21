const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text.charAt(0));

console.log(text.indexOf('l')); // 처음부터 찾기
console.log(text.lastIndexOf('l')); // 뒤부터 찾기

console.log(text.includes('tx')); // 유무
console.log(text.includes('h')); // 대소문자 구분
console.log(text.includes('H'));

console.log(text.startsWith('H')); // 시작하는지 찾기
console.log(text.endsWith('H')); // 끝나는지 찾기

console.log(text.toUpperCase()); // 전부 대문자로 변환
console.log(text.toLowerCase()); // 전부 소문자로 변환

console.log(text.substring(0, 2)); // 시작하는 위치(포함O) 부터 끝 위치(포함X) 삭제
console.log(text.slice(2)); // 앞에서 부터 해당 인덱스를 잘라냄
console.log(text.slice(-2)); // 뒤에서 부터 해당 인덱스를 잘라냄

const space = '              space           ';
console.log(space.trim()); // 공백 제거

const longText = 'Get to the point';
console.log(longText.split(' ')); // 원하는 포인트로 잘라내여 배열로 나옴
console.log(longText.split(' ', 2)); // 잘라낸뒤 원하는 수만 받을수 있음(앞부터)
