// 6-2 함수 인라인하기

/*
인라인 대상 : 잘못추출된 함수, 과도한 간접호출
- 상황이 복잡할때는 인라인적용하기가 답이 아닐때가 많다.

1. 다형 메서드인지 확인한다.
2. 인라인할 함수를 호출하는 곳을 모두 찾는다.
3. 각 호출문을 함수 본문으로 교체한다.
4. 하나씩 교체할때마다 테스트한다.
5. 함수정의를 삭제한다.
* */

function getRating(driver){
    return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
    return driver.numberOfLateDeliveries > 5;
}
