const emails = [
  "lina@mail.com",
  "sarahmail.com",
  "aline@site",
  "morad @mail.com",
  "lucie@domain.fr",
  "paulette@mail .com",
  "contact@entreprise.org",
];

function verifyEmail(emails) {
  let result = [];
  for (const email of emails) {
    if (
      email.toLowerCase().includes("@") &&
      email.toLowerCase().includes(".")
    ) {
      result.push(email);
    }
    if (email.toLowerCase().includes(" ")) {
      result.pop(email);
    }
  }
  return result;
}

console.log(verifyEmail(emails));

function verifyEmailWithFilter(emails) {
  let result = [];
  result = emails.filter(
    (email) => email.includes("@") && email.includes(".") && !/\s/.test(email),
  );
  return result;
}

console.log(verifyEmailWithFilter(emails));

function verifyEmailWithRegex(emails) {
  let result = [];
  result = emails.filter((email) => /^[^\s]*@[^\s]*\.[^\s]*$/.test(email));
  return result;
}

console.log(verifyEmailWithRegex(emails));
