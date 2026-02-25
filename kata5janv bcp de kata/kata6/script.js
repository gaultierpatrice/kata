const products = [
  { name: "Clavier", quantity: 5 },
  { name: "Souris", quantity: 0 },
  { name: "Écran", quantity: 2 },
  { name: "Webcam", quantity: 0 },
];

function filterProductStock(products) {
  // À compléter
  let inStock = products.filter((product) => product.quantity > 0);
  return inStock;
}

console.log(filterProductStock(products));
