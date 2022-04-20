// 예시

/*
온도 측정값 배열에서 정상 작동 범위를 벗어난 것이 있는지 검사하는 코드
 */

/* - 실습목표
1. numberRange 데이터 클래스 생성
2. readingOutsideRange()의 range 매개변수에 추가, 기존 호출문에 매개변수 null 추가
3. readingOutsideRange()본문을 새 매개변수 사용하도록 변경
4. numberRange객체를 하나 생성하고, readingOutsideRange()호출하는 함수에 매개변수를 사용하도록 변경
 */

const assert = require("assert");

const station = {
    name: "ZB1",
    readings: [
        {temp: 47, time: "2016-11-10 09:10"},
        {temp: 53, time: "2016-11-10 09:20"},
        {temp: 58, time: "2016-11-10 09:30"},
        {temp: 53, time: "2016-11-10 09:40"},
        {temp: 51, time: "2016-11-10 09:50"},
    ]
}


function readingOutsideRange(station, min, max){
    return station.readings.filter(r=> r.temp < min || r.temp > max);
}

const operatingPlan = {
    temperatureFloor: 50,
    temperatureCeiling: 60
}

/** 테스트 코드 **/

function test(){
    let outsideRangeStation = readingOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);
    assert.deepEqual(outsideRangeStation, [{temp: 47, time: "2016-11-10 09:10"}])
    console.log("테스트 성공");
}

test();
