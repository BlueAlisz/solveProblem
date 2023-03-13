function reverseStr(s: string, k: number): string {
  const split = s.split("");
  for (let i = 0; i < split.length; i += 2 * k) {
    let start = i;
    let end = Math.min(i + k - 1, split.length - 1);
    while (start < end) {
      [split[start], split[end]] = [split[end], split[start]];
      start++;
      end--;
    }
  }
  console.log(split.join(""))
  return split.join("");
}

reverseStr("abcdefg", 2);
