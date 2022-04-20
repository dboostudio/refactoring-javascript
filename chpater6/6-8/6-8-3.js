// 진정한 값 객체로 거듭나기

/* - 실습목표
1. NumberRange에 contain메소드 선언 및 적용하기
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

class NumberRange{
    constructor(min, max) {
        this._data = {min: min, max:max}
    }

    get min() {return this._data.min}
    get max() {return this._data.max}
}

function readingOutsideRange(station, range){
    return station.readings.filter(r=> r.temp < range.min || r.temp > range.max);
}

const operatingPlan = {
    temperatureFloor: 50,
    temperatureCeiling: 60
}

const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);

/** 테스트 코드 **/

function test(){
    let outsideRangeStation = readingOutsideRange(station, range);
    assert.deepEqual(outsideRangeStation, [{temp: 47, time: "2016-11-10 09:10"}])
    console.log("테스트 성공");
}

test();
