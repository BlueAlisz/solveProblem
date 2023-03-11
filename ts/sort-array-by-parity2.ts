function sortArrayByParity2(nums: number[]): number[] {
  const temp: number[] = [];
  let e: number = 0;
  let o: number = 1;

  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] % 2)) {
      temp[e] = nums[i];
      e += 2;
    } else {
      temp[o] = nums[i];
      o += 2;
    }
  }
  return temp;
}

console.log(sortArrayByParity2([3, 1, 2, 4]));
