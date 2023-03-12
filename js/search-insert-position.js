//use binary search
function insertBinarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    return insertBinarySearchRecursiveFunc(nums, target, start, end);
}
function insertBinarySearchRecursiveFunc(nums, target, start, end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
        return mid;
    }
    if (start >= end) {
        return nums[mid] > target ? mid : mid + 1;
    }
    if (nums[mid] > target) {
        return insertBinarySearchRecursiveFunc(nums, target, start, mid - 1);
    }
    else {
        return insertBinarySearchRecursiveFunc(nums, target, mid + 1, end);
    }
}
console.log(insertBinarySearch([1, 3, 5, 6], 2));
