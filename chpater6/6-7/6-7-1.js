// 변수 이름 바꾸기

/*
절차
1. 폭넓게 쓰이는 변수라면 변수 캡슐화하기를 고려한다.
2. 이름을 바꿀 변수를 참조하는 곳을 모두 찾아서 하나씩 변경한다.
3. 테스트한다.

Intellij 에서 제공하는 Rename 단축키
Mac : ⇧ + F6
Window : Shift + F6
- 2번을 한번에 해준다.
- 함수이름뿐 아니라, 클래스, 파일이름 등 참조하고 있는 이름들을 바꾸면서 Refactoring 해준다.
 */

let a = height * width;
let area = height * width;

/** 테스트 코드 **/

function test(){

}

test();
