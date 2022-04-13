// 예시: 지역 변수의 값을 변경할 때

/* - 실습목표
1. let outstanding 선언부 + for문을 함수로 추출
*/

function printOwing(invoice) {
    let outstanding = 0;

    printBanner();

    // 미해결 채무(outstanding)를 계산한다.
    for(const o of invoice.orders){
        outstanding += o.amount;
    }

    recordDueDate(invoice);

    printDetails(invoice, outstanding);
}

function printBanner() {
    console.log("*************");
    console.log("**** 고객 채무 ****");
    console.log("*************");
}

function printDetails(invoice, outstading) {
    // 세부 사항을 출력한다.
    console.log(`고객명 : ${invoice.customer}`);
    console.log(`채무액 : ${outstanding}`);
    console.log(`마감일 : ${invoice.dueDate.toLocaleDateString()}`);
}

function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}
