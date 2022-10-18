// My solution
function replaceElements(arr) {
  let resultArray = new Array(arr.length);

  let greatestSoFar = -1;
  for (let i = resultArray.length; i > 0; i--) {
    if (arr[i] > greatestSoFar) {
      greatestSoFar = arr[i];
    }

    resultArray[i - 1] = greatestSoFar;
  }

  return resultArray;
}

// Neetcode Solution

function replaceElements(arr) {
  // We know that every element in the array is positive

  let rightMax = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let newMax = Math.max(arr[i], rightMax);
    arr[i] = rightMax;
    rightMax = newMax;
  }

  return arr;
}


