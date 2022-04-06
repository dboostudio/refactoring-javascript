module.exports = {
    statement: function (i, p) {
        return statement(i, p);
    }
}

function statement(invoice, plays){
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구 내역 (고객명: ${invoice.customer})\n`

    const format = new Intl.NumberFormat("en-US", {
        style: "currency", currency: "USD", minimumFractionDigits: 2
    }).format

    for(let perf of invoice.performances){
        const play = plays[perf.playID];
        let thisAmount = 0;

        switch (play.type) {
            case "tragedy":
                break;
            case "comedy":
                break;
            default:
                break;
        }

        // 포인트 적립
        volumeCredits += Math.max(perf.audiences-30, 0)
        if("comedy" === play.type) volumeCredits += Math.floor(perf.audiences /5)

        // 청구내역 출력
        result += `  ${play.name}: ${format(thisAmount/100)} (${perf.audiences}석)\n`
        totalAmount += thisAmount
    }

    result += `총액: ${format(totalAmount/100)}\n`
    result += `적립 포인트: ${volumeCredits}점\n`

    return result;
}