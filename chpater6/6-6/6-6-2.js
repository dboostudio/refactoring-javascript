// 예시

/* - 실습목표
1. 캡슐화를 위해 데이터 접근 함수 정의
2. defaultOwner참조 코드를 getter함수호출로 변경 // 대입문은 setter
3. 변경시마다 테스트
4. 모든 참조 수정 후, 변수의 범위 제한
    - 발견못한 참조 확인가능
 */

const assert = require("assert");
let defaultOwner = {firstName: "마틴", lastName: "파울러"};

// 데이터 참조 코드
let spaceship;
spaceship.owner = defaultOwner;

// 데이터 갱신 코드
defaultOwner = {firstName: "레베카", lastName: "파슨스"};

/** 테스트 코드 **/

function test(){
    assert.equals(spaceship.owner, {firstName: "마틴", lastName: "파울러"});
    assert.equals(defaultOwner, {firstName: "레베카", lastName: "파슨스"});
}

test();
