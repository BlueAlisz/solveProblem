function reverseStr(s, k) {
    const split = s.split("");
    for (let i = 0; i < split.length; i += 2 * k) {
        // let start = i;
        // let end = Math.min(i + k - 1, split.length - 1);
        [split[i], split[i + 1]] = [split[i + 1], split[i]];
    }
    console.log(split.join(""));
    return split.join("");
}
reverseStr("abcd", 2);
