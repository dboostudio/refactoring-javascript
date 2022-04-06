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

console.log(statementResult);


