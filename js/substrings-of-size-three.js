function countGoodSubstrings(s) {
    let unique = 0;
    for (let i = 0; i < s.length; i++) {
        if (i + 3 <= s.length) {
            const sub = s.substring(i, i + 3);
            console.log(sub);
            if (sub[0] != sub[1] && sub[0] != sub[2] && sub[1] != sub[2]) {
                unique++;
            }
        }
    }
    console.log(unique);
    return unique;
}
countGoodSubstrings("xyzzaz");
