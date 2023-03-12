function binaryGap(n) {
    const binary = n.toString(2);
    let max = 0;
    let start = null;
    let end = null;
    console.log(binary);
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == "1") {
            if (start == null) {
                start = i;
            }
            if (i != start && end == null) {
                end = i;
            }
            if (end != null) {
                const distance = end - start;
                if (distance > max) {
                    max = distance;
                }
                start = i;
                end = null;
            }
        }
    }
    console.log(max);
    return max;
}
binaryGap(1000);
