const morse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
};
function uniqueMorseRepresentations(words) {
    const tranforms = new Set();
    for (let i = 0; i < words.length; i++) {
        let tranform = "";
        for (let j = 0; j < words[i].length; j++) {
            tranform += morse[words[i][j]];
        }
        tranforms.add(tranform);
    }
    console.log(tranforms.size);
    return tranforms.size;
}
uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
