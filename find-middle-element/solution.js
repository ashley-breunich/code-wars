var gimme = function (inputArray) {
  let origArray = [];
  inputArray.forEach(function(element) {
    origArray.push(element);
  });
  let sortedArray = inputArray.sort(function(a,b) {
    return a - b;
  });
  let middleNum = sortedArray[1];
  return origArray.indexOf(middleNum);
};