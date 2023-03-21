function reversePrefix(word, ch) {
    let num = 0;
    let result = "";
    for (let i = 0; i < word.length; i++) {
        result += word[i];
        if (word[i] == ch && num <= 0) {
            console.log(result);
            result = result.split("").reverse().join("");
            num++;
        }
    }
    console.log(result);
    return result;
}
reversePrefix("abcdefd", "d");
