function binarySearch(nums, target) {
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
binarySearch([15, 58, 96], 0);
