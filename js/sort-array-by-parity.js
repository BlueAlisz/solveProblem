function sortArrayByParity(nums) {
    let left = 0;
    let right = 0;
    for (; right < nums.length; right++) {
        if (!(nums[right] % 2)) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
    }
    return nums;
}
console.log(sortArrayByParity([3, 1, 2, 4]));
