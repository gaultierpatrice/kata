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

function sanitizeWord(word) {
  return (
    word
      ?.toLowerCase()
      .trim()
      .replace(/[.,!?]+$/, "") || null
  );
}

function accumulate(occurence, element) {
  return { ...occurence, [element]: (occurence[element] ?? 0) + 1 };
}

function countWord(wordsGiven) {
  return wordsGiven
    .map(sanitizeWord)
    .filter((word) => word != null)
    .reduce(accumulate, {});
}

console.log("countWord(words) :", countWord(words));
