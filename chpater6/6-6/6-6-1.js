// 6-6. 변수 캡슐화하기

/*
- 대채로, 데이터는 함수보다 다루기 까다롭다.
- 유효범위가 넓을수록 더욱 그렇다. (전역 데이터)
- 접근할수 있는 범위가 넓은 데이터를 옯길 때 접근을 독점하는 함수를 통해
    캡슐화 하는것이 좋은 방법이다.
- 객체의 데이터는 항상 private으로 유지하는 것이 좋다.

절차
1. 변수로의 접근과 갱신을 전담하는 캡슐화 함수를 만든다.
2. 정적 검사를 수행한다.
3. 변수 직접참조하던 부분을 모두 캡슐화 함수 호출로 변경한다. 바꿀때마다 테스트
4. 변수의 접근 범위를 제한한다.
5. 테스트
6. 변수값이 레코드라면, 레코드 캡슐화하기(7.1)를 적용할지 고려해본다.
*/

let defaultOwner = {firstName: "마틴", lastName: "파울러"};

let defaultOwnerData = {firstName: "마틴", lastName: "파울러"};
export function defaultOwner() {return defaultOwnerData;}
export function setDefaultOwner(arg) {defaultOwnerData = arg;}
