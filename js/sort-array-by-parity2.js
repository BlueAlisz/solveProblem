function sortArrayByParity2(nums) {
    var temp = [];
    var e = 0;
    var o = 1;
    for (var i = 0; i < nums.length; i++) {
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
