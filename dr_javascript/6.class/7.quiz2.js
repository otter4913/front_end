// 정직원과 파트타임직원을 나태낼 수 있는 클래스를 만들어 보자
// 직원들의 정보 : 이름, 부서이름, 한달 근무시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, department, hoursPerMonth) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
  }

  calculatePay(pay) {
    console.log(pay * this.hoursPerMonth);
  }
}

class FullTime extends Employee {
  #pay_rate = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth);
  }
  calculatePay() {
    super.calculatePay(this.#pay_rate);
  }
}

class PartTime extends Employee {
  #pay_rate = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth);
  }
  calculatePay() {
    super.calculatePay(this.#pay_rate);
  }
}

const member1 = new FullTime('수지', '홀', 10);
console.log(member1);
console.log(member1.calculatePay());

const member2 = new PartTime('지수', '주방', 10);
console.log(member2);
console.log(member2.calculatePay());

class Employee1 {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  get calculatePay() {}
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee1 {
  static #PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.#PAY_RATE);
  }
}
class PartTimeEmployee extends Employee1 {
  static #PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.#PAY_RATE);
  }
}
const ellie = new FullTimeEmployee('엘리', 's/w', 30);
const bob = new FullTimeEmployee('밥', 's/w', 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());
