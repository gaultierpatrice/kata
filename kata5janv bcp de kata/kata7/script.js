function formatName(lastname, name) {
  return (
    lastname.trim().slice(0, 1).toUpperCase() +
    lastname.trim().slice(1).toLowerCase() +
    " " +
    name.trim().toUpperCase()
  );
}

console.log(formatName("  marie  ", "  DURAND  "));

console.log(formatName("jEaN", "mArTiN"));
