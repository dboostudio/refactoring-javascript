// 예시: 매개변수를 속성으로 바꾸기

/*
1. inNewEngland() : 고객이 거주하는 주가 뉴잉글랜드에 속하는지 판단
2. 이 함수가 aCustomer가 아니라, 주 식별코드를 받도록 변경
*/

/* - 실습목표
1. 매개변수로 사용할 주 식별코드가 aCustomer안에 있기 때문에, 함수내 변수를 먼저 추출한다.
2. 함수 추출하기로 새 함수를 만든다. (변경할 함수의 형태로)
3. 함수인라인
4. 새 함수를 호출하도록 변경

*/

const assert = require("assert");

function inNewEngland(aCustomer){
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}

const newEnglanders = someCustomer.filter(c=>inNewEngland(c));

/** 테스트 코드 **/

function test(){

}

test();
