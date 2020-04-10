export default function getIndex(target: number, array: Array<number>, startIndex=0, endIndex=0){
  if(endIndex === 0) endIndex = array.length - 1;

  while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if(array[middleIndex] === target) {
      return middleIndex;
    }

    array[middleIndex] < target 
      ? startIndex = middleIndex + 1
      : endIndex = middleIndex - 1;
  }
  return -1
}