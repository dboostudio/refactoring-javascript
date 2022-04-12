function printOwing() {
    printBanner();
    let outstanding = calculateOutstanding();

    console.log(`고객명 : ${invoice.customer}`);
    console.log(`채무액 : ${outstanding}`);
}

// printDetails(outstanding) 추출하기

/*
 * 함수 추출하기
 * Intellij 에서 제공하는 Extract Method 를 활용한다. (1,2,3,5 를 동시에 진행할 수 있다)
 * Mac : ⌥ + ⌘ + m
 * Window : Ctrl + Alt + m
 *
 * 1. 함수를 새로 만들고 목적을 잘 드러내는 이름을 붙인다.
 * 2. 추출할 코드를 원본함수에서 복하사여 새 함수에 붙여넣는다.
 * 3. 추출한 코드 중 원본 함수의 지역변수를 참조하거나, 추출한 함수의 유효범위를 벗어나는 변수는 없는지 검사한다.
 *    있다면, 매개변수로 전달한다.
 * 4. 변수를 다 처리했다면 컴파일한다.
 * 5. 원본함수에서 추출한 코드 부분을 새로만든 함수를 호출하는 문장으로 바꾼다.
 * 6. 테스트
 * 7. 다른 코드에 추출한 함수와 중복되는 곳이 있는지 확인하고 있다면 추출한 함수를 호출할지 검토
 */