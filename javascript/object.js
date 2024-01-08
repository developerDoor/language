/**
 * All about Object
 * 객체를 선언할 때 사용할 수 있는 방법들
 *  1) object를 생성해서 객체 생성 - 기본방식 {}
 *  2) class를 인스턴스화해서 생성 - class와 OOP
 *  3) function을 사용해서 객체 생성
 */

const yujin = {
	name: '안유진',
	year: 2003
}

class IdolModel {
	name;
	year;

	constructor (name, year) {
		this.name = name;
		this.year = year;
	}
}

const yuJin2 = new IdolModel('안유진', 2003);

// 생성자 함수
function IdolFunction(name, year) {
	this.name = name;
	this.year = year;
}

// this 키워드를 사용해서 프로퍼티를 함수안에서 정의해줘야지 new 키워드 사용이 가능하다.
const gaEul = new IdolFunction('가을', 2002);
console.log(gaEul);
