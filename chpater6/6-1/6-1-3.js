// 예시: 지역변수를 사용할 때

/* - 실습목표
1. printDetails(invoice, outstanding) 매개변수를 통해 중복함수가 아니도록 선언 L24:29
2. recodeDueDate(invoice) 추출 L19:20
3. 앞의 예와 달리 지역변수를 매개변수로 전달하여 중복함수로 선언하지 않는다.
*/

function printOwing(invoice) {
    let outstanding = 0;

    printBanner();

    // 미해결 채무(outstanding)를 계산한다.
    for(const o of invoice.orders){
        outstanding += o.amount;
    }

    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

    printDetails();

    function printDetails() {
        // 세부 사항을 출력한다.
        console.log(`고객명 : ${invoice.customer}`);
        console.log(`채무액 : ${outstanding}`);
        console.log(`마감일 : ${invoice.dueDate.toLocaleDateString()}`);
    }
}

function printBanner() {
    console.log("*************");
    console.log("**** 고객 채무 ****");
    console.log("*************");
}

