/**
 * Super and Override
 */

class IdolModel {
	name;
	year;

	constructor (name, year) {
		this.name = name;
		this.year = year;
	}

	sayHello() {
		return `안녕하세요 ${this.name}입니다.`
	}
}

class FemaleIdolModel extends IdolModel {
	// 노래, 춤 등
	part;

	constructor (name, year, part) {
		// 기존 생성자를 그대로 사용하고 싶은 경우 super 키워드를 사용!
		super(name, year);
		this.part = part;
	}

	sayHello() {
		// 부모클래스의 변수(속성)를 가져올 때는 this를 사용해야한다.
		// return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`
		// 함수의 경우에는 super키워드를 통해서 실행 가능하다.
		return `${super.sayHello()} ${this.part}를 맡고있습니다.`
	}
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬')
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());
