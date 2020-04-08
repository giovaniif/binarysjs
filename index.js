module.exports = binarySearch = (target, array) => {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if(array[middleIndex] === target) {
      console.log('Value found at index ' + middleIndex);
      return middleIndex;
    }

    if(array[middleIndex] < target) {
      startIndex = middleIndex + 1;
    }
  
    if(array[middleIndex] > target) {
      startIndex = middleIndex - 1;
    }else {
      console.log("Not found yet, searching again")
    }
  }
  console.log("Value not found in array");
}