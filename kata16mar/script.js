const words = [
  " Java ",
  "java",
  "JAVA",
  "java!",
  "java,",
  "Java.",
  " JavaScript ",
  "javascript",
  "JAVASCRIPT",
  "javascript?",
  " javascript! ",
  " SQL",
  "sql",
  "Sql",
  "SQL!",
  " sql? ",
  "sql,",
  "sql.",
  "Docker",
  "docker",
  "DOCKER!",
  " Git ",
  "git",
  "GIT",
  "git?",
  "git!",
  "React",
  "react",
  "REACT!",
  "react?",
  "Spring",
  "spring",
  "",
  "   ",
  null,
  "   sql   ",
  "JavaScript,",
  "React.",
  "Git,",
  "??",
  "!",
  ".",
];

function countWord(words) {
  let result = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (typeof word !== "string" || word.trim().length === 0) {
      console.log("error", word);
    } else {
      let cleaned = word
        .toLowerCase()
        .trim()
        .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");

      if (cleaned.length === 0) {
        console.log("error", word);
        continue;
      }

      result[cleaned] = (result[cleaned] || 0) + 1;
    }
  }

  return result;
}

console.log("countWord(words) :", countWord(words));
