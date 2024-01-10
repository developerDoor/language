/**
 * Using function to create objects
 */
function IdolModel(name, year) {
	// 생성자 함수를 new 키워드 없이 사용했을 경우를 대비
	if (!new.target) {
		return new IdolModel(name, year)
	}

	this.name = name;
	this.year = year;

	this.dance = function () {
		return `${this.name}이 춤을 춥니다.`;
	}
}

// 생성자 함수의 경우에는 꼭 new 키워드가 필요하다.
// new 키워드가 없을 경우 return 값이 존재하지 않음으로 의도한대로 object가 만들어지지 않는다.
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.dance());

function IdolModel2(name, year) {
	this.name = name;
	this.year = year;

	this.sing = function () {
		return `${this.name}이 노래를 부릅니다.`;
	}
}

// new 키워드를 사용하지 않고 생성자 함수를 실행하면
// this가 global에 붙어버린다.
const yuJin2 = IdolModel2('안유진', 2003);
console.log(yuJin2);
console.log(global.name);

// Arrow Function
const IdolModelArrow = (name, year) => {
	this.name = name;
	this.year = year;
}

// 화살표 함수는 생성자 함수를 만들 수 없다.
// 화살표 함수는 new 키워드를 사용할 수 없다.
// TypeError: IdolModelArrow is not a constructor
const yuJin3 = new IdolModelArrow('안유진', 2003); // 에러발생!

