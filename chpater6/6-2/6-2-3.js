// 예시 2

// 거의 비슷하지만 전달 인수 이름이 다르다. 인라인하면서 살짝 고쳐야함

function getRating(aDriver){
    return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(dvr) {
    return dvr.numberOfLateDeliveries > 5;
}
