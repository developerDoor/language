/**
 * Property Attribute
 *
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된  실질적 값을 갖고있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 * 					 설정할 때 호출되는 함수로 구성된 프로퍼티 ex) getter, setter
 */

const yuJin = {
	name: '안유진',
	year: 2003.
}
/**
 * { value: '안유진', writable: true, enumerable: true, configurable: true }
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는지 여부. false로 설정하면 프로퍼티 값을
 * 				 수정할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부. for... in loop 등을 사용할 수 있으면 true를 반환
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 * 					 false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다.
 * 					 단, writable이 true인 경우 값 변경과 writable을 변경하는건 가능하다.
 */

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptors(yuJin));
/**
 * { value: 2003, writable: true, enumerable: true, configurable: true }
 */
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));

const yuJin2 = {
	name: '안유진',
	year: 2003,

	get age() {
		return new Date().getFullYear() - this.year;
	},

	set age(age) {
		this.year = new Date().getFullYear() - age;
	}
}
console.log(yuJin2);
console.log(yuJin2.age);
yuJin2.age = 32
console.log(yuJin2.age);
console.log(yuJin2.year);

/**
 * 엑세서 프로퍼티에는 value라는 프로퍼티 애트리뷰트가 존재하지 않는다.
 *  대신 get, set이라는 프로퍼티 애트리뷰트가 존재한다.
 * {
 *   get: [Function: get age],
 *   set: [Function: set age],
 *   enumerable: true,
 *   configurable: true
 * }
 */
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

Object.defineProperty(yuJin2, 'height', {
	value: 172,
	writable: true,
	configurable: true,
	enumerable: true,
})

console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
