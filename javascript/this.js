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
P
