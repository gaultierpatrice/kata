const users = [
  { name: "Lina", age: 22, active: true },
  { name: "Sarah", age: 17, active: true },
  { name: "Emma", age: 30, active: false },
];

// function isUserActiveAdult(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].age >= 18 && array[i].active) {
//       result.push(array[i]);
//     }
//   }

//   return result;
// }

// console.log("Users Adult and Active: ", isUserActiveAdult(users));

// function isUserActiveAdultWithoutForLoop(array) {
//   const result = array.filter((element) => element.age >= 18 && element.active);
//   return result;
// }

// console.log(
//   "No for loop - Users Adult and Active: ",
//   isUserActiveAdultWithoutForLoop(users),
// );

const AdultsActive = users.filter((user) => user.age >= 18 && user.active);

console.log(AdultsActive);
