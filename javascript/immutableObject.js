/**
 * Immutable  Object
 */
const yuJin = {
	name: '안유진',
	year: 2003,

	get age() {
		return new Date().getFullYear() - this.year;
	},

	set age(age) {
		this.year = new Date().getFullYear() - age;
	}
}

/**
 * Extensible
 * Extensible이 true이면 값을 추가할 수 있다.
 */
console.log(Object.isExtensible(yuJin)) // true
yuJin['position'] = 'vocal'
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }

Object.preventExtensions(yuJin)
console.log(Object.isExtensible(yuJin)) // false
yuJin['groupName'] = '아이브'
console.log(yuJin); // 에러는 나지 않지만 값이 추가되지 않는다.

delete yuJin['position'];
console.log(yuJin); // 삭제는 가능하다.


/**
 * Seql
 * seal을 하는것은 프로퍼티 어트리뷰트의 configurable을 false로 만드는 것과 같다.
 * 또한 값을 추가하거나 삭제하지 못한다.
 */
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
console.log(Object.isSealed(yuJin2)); // false(기본값)
Object.seal(yuJin2)
console.log(Object.isSealed(yuJin2)); // true
yuJin2['groupName'] = '아이브'
console.log(yuJin2); // 값이 추가가 되지 않는다.

delete yuJin2['name'];
console.log(yuJin2); // 삭제도 되지 않는다.

Object.defineProperty(yuJin2, 'name', {
	value: '문'
})
// seal을 하는것은 프로퍼티 어트리뷰트의 configurable을 false로 만드는 것과 같다.
// 또한 값을 추가하거나 삭제하지 못한다.
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name')); // 값은 변경된다.

/**
 * Freezed
 *
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 * 값 추가, 삭제, 변경 불가
 * 프로퍼티 애트리뷰트도 변경하지 못한다.
 */
const yuJin3 = {
	name: '안유진',
	year: 2003,

	get age() {
		return new Date().getFullYear() - this.year;
	},

	set age(age) {
		this.year = new Date().getFullYear() - age;
	}
}
console.log(Object.isFrozen(yuJin3)); // false(기본 값)

Object.freeze(yuJin3)
console.log(Object.isFrozen(yuJin3)); // true(기본 값)

const yuJin4 = {
	name: '안유진',
	year: 2003,
	wonYoung: {
		name: '장원영',
		year: 2002,
	}
};
Object.freeze(yuJin4)
console.log(Object.isFrozen(yuJin4)); // true

// 상위 Object가 freeze 됐다고 하위 object도 freeze 되는건 아니다.
console.log(Object.isFrozen(yuJin4['wonYoung'])); // false
