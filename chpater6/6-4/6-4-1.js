// 6-4 변수 인라인하기

/*
변수가 주변 코드를 리팩터링하는 데 방해가 될 때는
인라인 해준다.

1. 대입문의 우변에서 부작용이 없는지 확인한다.
2. 변수가 불변으로 선언되지 않았다면 불변으로 만든 후 테스트한다. (js)
3. 이 변수를 가장 처음 사용하는 코드를 찾아서 대입문 우변의 코드로 바꾼다.
4. 테스트
5. 변수를 사용하는 부분을 모두 교체
6. 변수 선언문과 대입문을 지운다.
7. 테스트한다.


*/
function example1(){
    let basePrice = anOrder.basePrice;
    return (basePrice > 1000)
}

function example2(){
    return anOrder.basePrice > 1000;
}