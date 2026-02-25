function diviser(a, b) {
  if (b == 0) {
    throw new Error(`erreur: "division par zero impossible" `);
  }
  if (isNaN(a) || isNaN(b)) {
    throw new Error(`erreur: "Parametres invalides" `);
  }

  return a / b;
}

try {
  console.log(diviser(10, 2));
} catch (error) {
  console.error(error);
}
try {
  console.log(diviser(10, 0));
} catch (error) {
  console.error(error);
}
try {
  console.log(diviser("dix", 2));
} catch (error) {
  console.error(error);
}
