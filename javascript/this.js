/**
 * this
 *
 * JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가 정의 시점에 평가된다.
 * !!!하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.!!!
 */

const testFunction = function() {
	return this;
}

console.log(testFunction());
console.log(testFunction() === global);

const yuJin = {
	name: '안유진',
	year: 2003,
	sayHello: function () {
		return `안녕하세요 저는 ${this.name}입니다.`
	}
}

console.log(yuJin.sayHello()); // this는 yuJin객체에 매핑이됐다.

function Person(name, year) {
	this.name = name;
	this.year = year;

	this.sayHello = function () {
		return `안녕하세요 저는 ${this.name}입니다.`
	}
}

const yuJin2 = new Person('안유진', 2003)
console.log(yuJin2.sayHello());


// 객체의 method로 가장 상위 레벨에 함수를 선언하면
// this가 자동으로 실행하는 대상 객체로 매핑이 된다.
// 하지만 그외 위치에 함수를 선언하면 함수의 this는 무조건 global 객체에 매핑된다.
Person.prototype.dance = function () {
	function dance2 () {
		return `${this.name}이 춤을 춥니다.`
	}

	return dance2();

}
console.log(yuJin2.dance());

/**
 *	this 키워드가 어떤 걸 가리키냐는 세가지만 기억하자.
 *  1) 일반 함수를 호출할 땐 this가 최상위 객체(global, window)를 가리킨다.
 *  2) 메서드로 호출할 땐 호출된 객체를 가리킨다.
 *  3) new 키위드를 사용해서 객체를 생성했을때는 객체를 가리킨다.
 */

/**
 * 1) apply() -> 인자를 리스트로 입력해야한다.
 * 2) call() -> 콤마를 기반으로 인자를 순서대로 넘겨줘야한다.
 * 3) bind() -> this를 바인딩만 해놓고 나중에 실행할 수 있다.
 */
function returnName() {
	return this.name;
}

console.log(returnName());

const yuJin3 = {
	name: '안유진'
}

console.log(returnName.call(yuJin3));

function multiply(x, y, z) {
	return `${this.name} / 결과값 : ${x * y * z}`;
}

console.log(multiply.call(yuJin3, 3, 4, 5));
console.log(multiply.apply(yuJin3, [3, 4, 5]));

const laterFunc = multiply.bind(yuJin3, 3,4,5)
console.log(laterFunc);
console.log(laterFunc())
