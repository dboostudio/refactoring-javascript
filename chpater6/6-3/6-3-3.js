// 예시: 클래스 내에서

/* - 실습목표
1. 기본 가격, 수량 할인, 배송비 멤버 변수로 추출
*/

class Order{
    constructor(aRecord) {
        this._data = aRecord;
    }

    get quantity() {return this._data.quantity}
    get itemPrice() {return this._data.itemPrice}

    get Price() {
        return this.quantity * this.itemPrice -
            Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
            Math.min(this.quantity * this.itemPrice * 0.1, 100);
    }

}