//접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName =`${this.lastName} ${this.firstName}`; // 추후 수정이 있을 경우 업데이트 되지않음
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('수지', '김');
console.log(student.firstName);
// console.log(student.fullName());
console.log(student.fullName); // get이 호출됨
student.fullName = '김철수'; // 할당할때 set이 호출됨
