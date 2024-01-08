/**
 * Getter and Setter
 */

class IdolModel {
	name;
	year;

	constructor (name, year) {
		this.name = name;
		this.year = year;
	}

	/**
	 *  1) 데이터를 가공해서 새로운 데이터를 반환할 때
	 *  2) private한 값을 반환할 때
	 *  함수지만 get, set 키워드를 입력하면 하나의 object key값처럼 사용할 수 있다.
	 */
	get nameAndYear () {
		return `${this.name}-${this.year}`;
	}

	// setter는 무조건 파라미터 1개를 받아야한다.
	// setter는 많이 사용하진 않는다.
	set setName (name) {
		this.name = name;
	}
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);

yuJin.setName = '장원영';
console.log(yuJin);

class IdolModel2 {
	// javascript에서 #을 붙이면 private 키워드가 된다.
	#name;
	year

	constructor (name, year) {
		this.#name = name;
		this.year = year;
	}

	// getter를 통해서 private 프로퍼티에 접근할 수 있다.
	get name() {
		return this.#name;
	}

	set name(name) {
		this.#name = name;
	}
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2); // IdolModel2 { year: 2003 }
console.log(yuJin2.name); // 안유진

yuJin2.name = '문장혁';
console.log(yuJin2.name); // 문장혁
