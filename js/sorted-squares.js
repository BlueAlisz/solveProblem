function sortedSquares(nums) {
    const result = nums.map((res) => {
        return res * res;
    });
    result.sort((a, b) => {
        return Math.abs(a) - Math.abs(b);
    });
    console.log(result);
    return result;
}
sortedSquares([-4, -1, 0, 3, 10]);
