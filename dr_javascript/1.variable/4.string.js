// 문자열 타입
let string = '안녕하세요';
string = `안녕`;
console.log(string);

// 특수 문자 출력하는법 (이스케이프 표현)
string = "'안녕'";
console.log(string);

string = '안녕\n엘리야!\t\t 내 이름은\\ \u09AC';
console.log(string);

// 템플리 리터럴 (Template Literal)
let id = '엘리';
let greetings = "'안녕!," + id + '\n 즐거운 하루';
console.log(greetings);

greetings = `'안녕, ${id} 
즐거운 하루`;
console.log(greetings);
