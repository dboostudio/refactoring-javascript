// 예시: 함수 이름 바꾸기 (마이그레이션)

/* - 실습목표
1. circum함수 본문 전체를 circumference 함수로 추출
2. 테스트 후
3. 예전 함수를 인라인
4. 호출부분에 새 함수를 호출하도록 변경
5. 변경시마다 테스트
*/

const assert = require("assert");

function circum(radius){ return 2 * Math.PI * radius}

function exampleA(){
    return circum(3);
}

/** 테스트 코드 **/

function test(){
    let radius = 3;
    assert.equal(exampleA(radius), 2*Math.PI * radius);
}

test();

