// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    return array.slice(0, 2);
}
const returnLastTwoDrivers = function (array) {
    return array.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(multi) {
    const multiplier = fare => fare * multi
    return multiplier
}
const fareDoubler = function (fare) {
    let result = createFareMultiplier(2)
    return result(fare)
}
const fareTripler = function (fare) {
    let result = createFareMultiplier(3)
    return result(fare)
}
const selectDifferentDrivers = function (array, func) {
    let result = func(array)
    return result
}