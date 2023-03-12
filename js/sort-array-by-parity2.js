function sortArrayByParity2(nums) {
    const temp = [];
    let e = 0;
    let o = 1;
    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] % 2)) {
            temp[e] = nums[i];
            e += 2;
        }
        else {
            temp[o] = nums[i];
            o += 2;
        }
    }
    return temp;
}
console.log(sortArrayByParity2([3, 1, 2, 4]));
