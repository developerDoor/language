/**
 * Inheritance
 *
 * - 클래스의 정의
 * -> 클래스는 OOP에서 특정 객체(인스턴스)를 생성하기 위한 변수와
 *    메소드(함수)를 정의하는 일종의 틀이다.
 *
 * - 상속의 정의
 * -> 상속은 객체들 간의 관계를 구축하는 방법이다.
 *    수퍼클래스, 또는 부모 클래스 등의 기존의 클래스로부터 속성과 동작을 상속받을 수 있다.
 */

class IdolModel {
	name;
	year;

	constructor (name, year) {
		this.name = name;
		this.year = year;
	}
}

class FemaleIdolModel extends IdolModel {
	dance() {
		return `${this.name}이 춤을 춥니다.`
	}
}

class MaleIdolModel extends IdolModel {
	sing() {
		return `${this.name}이 노래를 부릅니다.`
	}
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995)
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.year);

const moon = new IdolModel('문', 1995);
console.log(moon);
// console.log(moon.dance()); // 부모가 자식한테 받을 순 없다.

console.log(yuJin instanceof IdolModel); // true
console.log(yuJin instanceof FemaleIdolModel); // true
console.log(yuJin instanceof MaleIdolModel); // false
