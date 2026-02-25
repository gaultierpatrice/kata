const currentStock = [
  { name: "Stylo", stock: 10 },
  { name: "Livre", stock: 3 },
  { name: "Clavier", stock: 0 },
];

function stockStatus(array) {
  return array.map((obj) => {
    if (obj.stock > 5) {
      return { ...obj, status: "ok" };
    } else if (obj.stock === 0) {
      return { ...obj, status: "out" };
    } else {
      return { ...obj, status: "low" };
    }
  });
}

const newStock = stockStatus(currentStock);

console.log("Original array:", currentStock);
console.log("Transformed array:", newStock);
