function validatePassword(password) {
  // À compléter : vérifie chaque critère et retourne
  if (password.length < 8) {
    return `${password} : Erreur , minimum 8 caractères`;
  }
  if (!/[A-Z]/.test(password)) {
    return `${password} : Erreur , doit contenir une majuscule`;
  }
  if (!/[0-9]/.test(password)) {
    return `${password} : Erreur , doit contenir un chiffre`;
  }
  if (password.includes(" ")) {
    return `${password} : Erreur , ne doit pas contenir d'espaces`;
  }
  {
    return `${password} : mot de passe valide `;
  }
  // "valide" ou un message d'erreur explicite
  // TODO: implement
}

validatePassword("Abc12345");

validatePassword("abc12345");

validatePassword("Abc1234 ");

validatePassword("Abc");

validatePassword("Abcdefghi");
