// console.log(count);
// import increase1 from './counter.js'; // default 로 하나만 가져올댄 이름변경가능
// import { increase as increase1 } from './counter.js'; // 이름 바꾸고싶을때
// import { increase, getCount } from './counter.js';
import * as counter from './counter.js'; // 그룹화해서 가져옴
counter.increase();
counter.increase();
counter.increase();
const count = counter.getCount();
console.log(count);
// count = -10;
// console.log(count);
