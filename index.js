// Add your functions here
function map(sourceArray, fn) {
  let newArray = [];
  sourceArray.forEach(element => newArray.push(fn(element)));
  return newArray;
}

function reduce(sourceArray, fn, startingPoint) {
  let value;
  if (startingPoint) {
    value = startingPoint;
    for (const element of sourceArray) {
      value = fn(element, value);
    }
    return value;
  } else {
    value = sourceArray[0];
    for (let i = 1; i < sourceArray.length; i++) {
      value = fn(sourceArray[i], value);
    }
    return value;
  }
}
