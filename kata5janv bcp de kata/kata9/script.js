function isPalindrome(texte) {
  const str = texte.replace(/\s/g, "").toLowerCase();
  const reverse = texte
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  if (str === reverse) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("radar"));
console.log(isPalindrome("Hello"));
console.log(isPalindrome("A man a plan a canal Panama"));
