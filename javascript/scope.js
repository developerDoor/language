/**
 * JS -> Lexical Scope
 *
 * Lexical Scope : 선언된 위치가 상위 스코프를 정한다.
 *
 * <-> Dynamic Scope
 *
 * Dynamic Scope : 실행한 위치가 상위 스코프를 정한다.
 */
var numberThree = 3;

function functionOne() {
	var numberThree = 100;

	functionTwo();
}

function functionTwo() {
	console.log(numberThree); // 3
}
functionOne()


/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 *
 * let, const는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */
