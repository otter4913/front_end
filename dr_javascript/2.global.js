console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num);'); // javscript 코드 실행
console.log(isFinite(1)); // 수가 유한한지 아닌지
console.log(isFinite(Infinity));

console.log(parseFloat('12.43')); // 문자열에 소수점 > 숫자로
console.log(parseInt('12.43')); // 문자열 > 정수로
console.log(parseInt('11'));

// URL (URI, Uniform Resource Identifier 하위개념)
// 아스키 문자로만 구성되어야 함
//  한글이나 특수문자는 이스케이프 처리 해야한다.
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(URL);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
console.log(decodeURIComponent(part));
