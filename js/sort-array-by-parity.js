function sortArrayByParity(nums) {
    var _a;
    var left = 0;
    var right = 0;
    console.log((2 % 2));
    for (; right < nums.length; right++) {
        if (!(nums[right] % 2)) {
            _a = [nums[right], nums[left]], nums[left] = _a[0], nums[right] = _a[1];
            left++;
        }
    }
    return nums;
}
console.log(sortArrayByParity([3, 1, 2, 4]));
