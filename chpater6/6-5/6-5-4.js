// 예시: 매개변수 추가하기

/*
예약시 우선순위 큐를 지원하라는 요구가 추가
addReservation()을 호출시, 예약정보를 일반큐/우선순위큐 에 넣을지 판단하는 매개변수 추가
*/

/* - 실습목표
1. addReservation() 본문을 새 함수로 추출
2. 새 함수에 원하는 매개변수 추가
3. 기존 함수 인라인 후 새 함수 호출하도록 변경
4. 새함수의 이름을 기존 함수로 변경
+. 호출문 변경하기 전에 Assertion을 추가하여 새로 추가한 매개변수를 실제로 사용하는지 체크
*/

const assert = require("assert");

class Book{
    constructor() {
        this._reservation = [];
    }

    get reservation(){
        return this._reservation;
    }

    addReservation(customer, isPriority){
        this._reservation.push(customer);
    }
}

/** 테스트 코드 **/

function test(){

    let book = new Book();
    let customer1 = "대환";
    let customer2 = "민재";
    let customerList = [customer1, customer2];

    book.addReservation("대환");
    book.addReservation("민재");

    assert.deepEqual(book.reservation, customerList);

}

test();
