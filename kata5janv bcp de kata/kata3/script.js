const items = [
  { name: "Café", price: 5, qty: 2 },
  { name: "Croissant", price: 3, qty: 3 },
];

function generateInvoice(items) {
  let invoiceTotal = 0;
  let invoice = `================
    FACTURE
================`;
  // À compléter : utilise une boucle (for, while ou forEach)
  items.forEach((item) => {
    const lineTotal = item.price * item.qty;
    invoice += `\n${item.name.padEnd(16)} X${String(
      item.qty
    )} ${lineTotal.toFixed(2)}€`;
    invoiceTotal += lineTotal;
  });
  // pour générer la facture au format texte
  invoice += `
================  
Total           :   ${invoiceTotal.toFixed(2)}€
================`;

  // TODO: implement
  console.log(invoice);
}

generateInvoice(items);

/* Résultat attendu :
================
    FACTURE
================
Café              x2   10.00€
Croissant         x3    9.00€
================
Total           :   19.00€
================
*/
