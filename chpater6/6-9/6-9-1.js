// 여러 함수를 클래스로 묶기

/* 배경
클래스는 데이터와 함수를 하나의 공유환경으로 묶은 후, 일부를 외부에 제공한다.
클래스를 지원하지 않는 언어의 경우, 같은 기느을 '함수를 객체처럼'패턴을 이용해 구현한다.
(martinfowler.com/bliki/FunctionAsObject.html)

- 절차
1. 함수들이 공유하는 공통 데이터 레코드를 캡슐화한다.
2. 공통 레코드를 사용하는 함수 각각을 새 클래스로 옮긴다.
3. 데이터를 조작하는 로직들은 함수로 추출해서 새 클래스로 옮긴다.
 */

function base(aReading){}
function taxableCharge(aReading){}
function calculateBaseCharge(aReading){}

class Reading{
    base() {}
    taxableCharge(){}
    calculateBaseCharge(){}
}

/** 테스트 코드 **/

function test(){
    console.log("테스트 성공");
}

test();
