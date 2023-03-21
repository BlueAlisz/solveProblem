function reversePrefix(word: string, ch: string): string {
  let num = 0
  let result = "";
  for (let i = 0; i < word.length; i++) {
    result += word[i];
    if (word[i] == ch && num <= 0) {
      result = result.split("").reverse().join("");
      num++
    }
  }
  return result;
}

reversePrefix("abcdefd", "d");
