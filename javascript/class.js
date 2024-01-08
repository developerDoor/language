/**
 * Class keyword
 */
class IdolModel {
	// 프로퍼티를 직접 기입하지 않고 생성자에서 초기화해도 된다.
	name
	year

	constructor (name, year) {
		this.name = name;
		this.year = year;
	}

	sayName() {
		return `Hi I'm ${this.name}`
	}
}

const wonYoung = new IdolModel('장원영', 2004)
console.log(wonYoung);


console.log(typeof IdolModel); // function, 클래스는 실제로 함수로 인식된다.
console.log(typeof wonYoung); // object
