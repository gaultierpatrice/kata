const commands = [
  "add title=LearnJS priority=high",
  "add title=WriteDocs priority=low",
  "remove id=42",
  "add title=FixBug",
  "remove",
  "add title=Hello priority=medium",
  "fake",
  "",
];

function parseCommand(commands) {
  return commands.map((command) => {
    const [action, ...rest] = command.split(" ");
    // On verifie si tokens[0] existe ou si add ou remove est le premier mot de la commande sinon l'action est definie comme "unknown"
    if (action !== "add" && action != "remove") {
      return { action: "unknown", params: {} };
    }
    // On applique reduce pour créer un objet vide et y inclure les valeurs avant et apres le "="
    const params = rest.reduce((acc, token) => {
      const [key, value] = token.split("=");
      // si key ou value est undefined, on le skip (vérifié avec if (key && value)) sinon l'objet a pour clé ce qui est contenu dans [key] et value sa valeur
      if (key && value) acc[key] = value;
      return acc;
    }, {});
    return { action, params };
  });
}

console.log("parseCommand(commands): ", parseCommand(commands));
