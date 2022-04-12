function printOwing() {
    let outstanding = 0;

    console.log("*************");
    console.log("**** 고객 채무 ****");
    console.log("*************");

    // 미해결 채무(outstanding)를 계산한다.
    for(const o of invoice.orders){
        outstanding += o.amount;
    }

    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

    // 세부 사항을 출력한다.
    console.log(`고객명 : ${invoice.customer}`);
    console.log(`채무액 : ${outstanding}`);
    console.log(`마감일 : ${invoice.dueDate.toLocaleDateString()}`);
}

// 예시: 지역변수의 값을 변경할 때

/* - 실습목표
1. printBanner() 추출 L4:6
2. printDetails() 추출 L17:19
*/

/*
const today = Clock.today;

마틴 파울러 : 코드에서 현재 날짜 또는 시간을 가져와야 하는 경우 해당 데이터에 대한 시스템 루틴에 직접 액세스하지 마십시오.
"현재 날짜/시간"을 특정 값으로 설정하여 덮어쓸 수 있는 래퍼 형태를 그 주위에 두십시오.
이것은 테스트를 단순화하는 데 중요합니다... 라고 합니다.
*/



