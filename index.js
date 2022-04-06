const {statement} = require("./statement");

let plays = {
    "hamlet": {"name": "Hamlet", "type": "tragedy"},
    "as-like": {"name": "As You Like It", "type": "comedy"},
    "othello": {"name": "Othello", "type": "tragedy"},
}

let invoices =
{
    "customer": "BigCo",
    "performances": [
        {
            "playID": "hamlet",
            "audiences": 55
        },
        {
            "playID": "as-like",
            "audiences": 35
        }
    ]
}

let statementResult = statement(invoices, plays);

let forTestResult = "청구 내역 (고객명: BigCo)\n" +
    "  Hamlet: $0.00 (55석)\n" +
    "  As You Like It: $0.00 (35석)\n" +
    "총액: $0.00\n" +
    "적립 포인트: 37점\n";

console.log(statementResult);

if(statementResult != forTestResult){
    console.log("------------")
    console.log("테스트 실패")
    throw "테스트 실패";
} else {
    console.log("------------")
    console.log("테스트 성공")
}


