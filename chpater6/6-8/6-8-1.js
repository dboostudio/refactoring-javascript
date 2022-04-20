// 매개변수 객체 만들기

/*

데이터 무리 -> 데이터 구조 하나로 모아주는 것이 좋다
매개변수 객체를 만드는 것은 이 데이터 구조를 활용하는 형태로 프로그램의 형태를 재구성하면서
코드를 근본적으로 바꿔준다는 것에 강점이 있다.

절차
1. 적당한 데이터 구조가 아직 마련되어 있지 않다면 새로 만든다.
2. 테스트한다.
3. 함수 선언 바꾸기로 새 데이터 구조를 매개변수로 추가한다.
4. 테스트한다.
5. 함수 호출 시 새로우 ㄴ데이터 구조 인스턴스를 넘기도록 수정한다. + 테스트
6. 기존 매개변수를 사용하던 코드를 새 데이터 구조의 원소를 사용하도록 변경
7. 다 바꿨다면 기존 매겨변수 제고하고 테스트한다.
 */

function amountInvoiced(startDate, endDate){}
function amountReceived(startDate, endDate){}
function amountOverdue(startDate, endDate){}

function amountInvoiced(aDateRange){}
function amountReceived(aDateRange){}
function amountOverdue(aDateRange){}

/** 테스트 코드 **/

function test(){
    console.log("테스트 성공");
}

test();
