
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
chocolateBars;

function addElementToBeginningOfArray(array, element) {
return[...chocolateBars, array, element];
}
addElementToBeginningOfArray('foo', 1);
//
function destructivelyAddElementToBeginningOfArray (array, element) {
return newArray = [chocolateBars.unshift(array, element)];
}
