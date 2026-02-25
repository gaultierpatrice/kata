const orders = [
  { user: "Lina", amount: 20 },
  { user: "Lina", amount: 15 },
  { user: "Sarah", amount: 30 },
];

function totalByUser(array) {
  let result = {};
  for (const { user, amount } of array) {
    result[user] = (result[user] ?? 0) + amount;
  }
  return result;
}

console.log("totalByUser: ", totalByUser(orders));

function totalByUserReduce(array) {
  return array.reduce((acc, { user, amount }) => {
    acc[user] = (acc[user] ?? 0) + amount;
    return acc;
  }, {});
}

console.log("totalByUserReduce: ", totalByUserReduce(orders));
