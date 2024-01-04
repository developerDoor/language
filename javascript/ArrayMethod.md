## 원본 배열을 수정하는 Method
- Array.prototype.push()
  - 원본 Array 마지막에 원소 추가
  - 상수(O(1)) 시간 복잡도

- Array.prototype.pop()

- Array.prototype.shift()

- Array.prototype.unshift()
  - 원본 Array 시작에 원소 추가
  - O(n) 시간 복잡도

- Array.prototype.splice(start, deleteCount, item1, item2, ...)
  - 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경 

- Array.prototype.sort(compareFunction)
  - a, b를 비교했을 때
  1. a를 b 보다 나중에 정렬하려면 (뒤에 두려면) 0보다  큰 숫자를 반환
  2. a를 b 보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환 
  3. 원래 순서를 그대로 두려면 0을 반환

- Array.prototype.reverse()
  - 내림차순 정렬

## 사본을 만들어 처리하는 Method
- Array.prototype.concat(valueN..)
  - 두 개 이상의 배열을 병합하는데 사용

- Array.prototype.slice(begin, end)
  - 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환

- Array.prototype.map()

- Array.prototype.filter()

- Array.prototype.find()
  - filter는 조건을 만족하는 모든 요소를 반환
  - find는 조건을 만족하는 첫번째 값만 반환

- Array.prototype.findIndex()
  - find와 동일하지만 Index를 반환한다.

- Array.prototype.reduce()

- Array.prototype.join()
    - 배열의 모든 요소를 연결해 하나의 문자열로 만든다.

## spread operator
Spread Operator로 복사한 배열은 1depth의 값에서만 깊은 복사를 실행한다. 




