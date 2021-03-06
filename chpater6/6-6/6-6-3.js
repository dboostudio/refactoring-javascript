// 값 캡슐화하기

/* - 실습목표
1. 캡슐화를 위해 데이터 접근 함수 정의
2. defaultOwner참조 코드를 getter함수호출로 변경 // 대입문은 setter
3. 변경시마다 테스트
4. 모든 참조 수정 후, 변수의 범위 제한
    - 발견못한 참조 확인가능
 */

const assert = require("assert");
let defaultOwner = {firstName: "마틴", lastName: "파울러"};
function getDefaultOwner() {return defaultOwner;}
function setDefaultOwner(arg) {defaultOwner = arg};

// 데이터 참조 코드
let spaceship = {};
spaceship.owner = getDefaultOwner();

// 데이터 갱신 코드
setDefaultOwner({firstName: "레베카", lastName: "파슨스"});

// 변수 담긴 내용 변경 가능
const owner1 = getDefaultOwner();
const owner2 = getDefaultOwner();
owner2.lastName = "파슨스";

/** 테스트 코드 **/

function test(){
    assert.equal("파슨스", owner2.lastName);
    console.log("테스트 성공");
}

test();
