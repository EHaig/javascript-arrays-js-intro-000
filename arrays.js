
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
chocolateBars;

function addElementToBeginningOfArray(array, element) {
return[array, element, ...chocolateBars];
}
addElementToBeginningOfArray();
//
function destructivelyAddElementToBeginningOfArray (array, element) {
return newArray = chocolateBars.unshift(array, element);
}

function addElementToEndOfArray (){
  return[...chocolateBars, array, element];
}

function destructivelyAddElementToEndOfArray () {
  return newArray = chocolateBars.push(array, element);
}
