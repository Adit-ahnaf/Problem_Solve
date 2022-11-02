// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

let arr = [2, 4, 5, 6, 7];

let start = 0;
let end = arr.length - 1;
let target = 3;

while (start <= end) {
  let mid = Math.floor(start + (end - start) / 2);
  if (arr[mid] == target) return mid;
  else if (arr[mid] < target) start = mid + 1;
  else end = mid - 1;
}

console.log(start);
