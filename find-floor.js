function findFloor(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let floor = -1; 
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === x) {
        return arr[mid]; 
      } else if (arr[mid] > x) {
        high = mid - 1; 
      } else {
        floor = arr[mid]; 
        low = mid + 1; 
      }
    }
  
    return floor; 
  }
  
  
  module.exports = findFloor;