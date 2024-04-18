function findFloor(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let floor = -1; // Initialize floor to -1 to handle cases where x is less than all elements.
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === x) {
        return arr[mid]; // Exact match found.
      } else if (arr[mid] > x) {
        high = mid - 1; // Look in the left half.
      } else {
        floor = arr[mid]; // Update floor to the last known value less than x.
        low = mid + 1;   // Continue to look in the right half.
      }
    }
  
    return floor; // Return floor which could also be -1 if no element is less than x.
  }
  
  
  module.exports = findFloor;