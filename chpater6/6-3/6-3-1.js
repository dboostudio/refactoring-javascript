// 6-3 변수 추출하기

/*
표현식이 너무 복잡할 때, 변수로 추출하여 의미있는 변수를 통해 의도를 잘 드러내도록 한다.

1. 추출하려는 표현식에 부작용은 없는지 확인한다.
2. 불변 변수를 하나 선언하고 이름을 붙일 표현식의 복제본을 대입한다.
3. 원본 표현식을 새로 만든 변수로 교체한다.
4. 테스트
5. 표현식을 여러곳에서 사용한다면 각각을 새로 만든 변수로 교체한다. 교체시마다 테스트한다.

Intellj 에서 변수 추출하기
 * Intellij 에서 제공하는 Extract Variable 을 활용한다. (2,3을 동시에 진행할 수 있다)
 * Mac : ⌥ + ⌘ + v
 * Window : Ctrl + Alt + v

* */

function example1(order){
    return order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100);
}

function example2(order){
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(basePrice * 0.1, 100);
    return basePrice - quantityDiscount + shipping;
}