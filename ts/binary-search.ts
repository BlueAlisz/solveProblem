function defaultBinarySearch(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

function improveBinarySearch(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  return recursiveFunc(nums, target, start, end);
}

function recursiveFunc(
  nums: number[],
  target: number,
  start: number,
  end: number
): number {
  let mid = Math.floor((start + end) / 2);
  if (nums[mid] === target) {
    return mid;
  }

  if (start > end) {
    return -1;
  }

  if (nums[mid] > target) {
    return recursiveFunc(nums, target, start, mid - 1);
  } else {
    return recursiveFunc(nums, target, mid + 1, end);
  }
}

console.log(improveBinarySearch([1,5,10,25,30], 5))
