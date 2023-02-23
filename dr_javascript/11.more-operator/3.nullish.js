// Nullish Coalescing Operator
// ES11 (EcmaScript 2020)
// ?? null, undefined
// || 값이 falshy한 경우 설정(할당) 0, -0, ''
let num = 0;
console.log(num || '-1'); // 0은 falshy하기에....... -1 이나옴..
console.log(num ?? '-1');
