# Problem Solving - Divide and Conquer

This repository contains solutions to various problems using the divide and conquer strategy. The problems are solved with a time complexity of O(log N).

## Problems

1. **countZeroes**: Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

2. **sortedFrequency**: Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array.

3. **findRotatedIndex**: Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

4. **findRotationCount**: Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

5. **findFloor**: Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

## Usage

Each function is implemented in its own JavaScript file and can be imported as needed.

```javascript
const countZeroes = require('./countZeroes');
const sortedFrequency = require('./sortedFrequency');
const findRotatedIndex = require('./findRotatedIndex');
const findRotationCount = require('./findRotationCount');
const findFloor = require('./findFloor');
```

## Testing

To run tests for these functions, use the following command:

```bash
npm test
```

## Further Study

For more problems related to divide and conquer, visit [LeetCode](https://leetcode.com/tag/divide-and-conquer/).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)