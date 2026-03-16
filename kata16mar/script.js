console.log("coucou");

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
  for (let i = 0; i < words.length; i++) {
    if (!words[i] || words[i].length === 0) {
      console.log("error");
    } else {
      console.log(words[i].toLowerCase().trim());
    }
  }

  return {};
}

countWord(words);
