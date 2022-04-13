// 예시 3

// gatherCustomerData 내 문장을 하나씩 reportLines으로 옮긴다.

function reportLines(aCustomer){
    const lines = [];
    gatherCustomerData(lines, aCustomer);
}

function gatherCustomerData(out, aCustomer) {
    out.push(["name", aCustomer.name]);
    out.push(["location", aCustomer.location]);
}