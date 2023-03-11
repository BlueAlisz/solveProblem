function defaultBinarySearch(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && target < nums[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        else {
            if (nums[mid] < target && target <= nums[end]) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }
    console.log("hello");
    return -1;
}
function improveBinarySearch(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    return recursiveFunc(nums, target, start, end);
}
function recursiveFunc(nums, target, start, end) {
    var mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
        return mid;
    }
    if (start > end) {
        return -1;
    }
    if (nums[mid] > target) {
        return recursiveFunc(nums, target, start, mid + 1);
    }
    else {
        return recursiveFunc(nums, target, mid + 1, end);
    }
}
console.log(improveBinarySearch([1, 5, 10, 25, 30], 25));
