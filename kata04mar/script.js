const events = [
  { id: 1, title: "Workshop JS", capacity: 5, booked: 3 },
  { id: 2, title: "React Intro", capacity: 10, booked: 10 },
  { id: 3, title: "SQL Basics", capacity: 8, booked: 0 },
];

function bookSeats(events, eventId, seats) {
  let result = {};
  if (seats <= 0) {
    result.success = false;
    result.message = "Seats must be a positive number";
    return result;
  }
  const found = events.find((event) => event.id === eventId);
  if (found) {
    if (found.capacity < seats + found.booked) {
      result.sucess = false;
      result.message = "Sold out";
    } else {
      result.sucess = true;
      result.message = `Reservation accepted for the event: ${found.title}!`;
      result.newRemainingSeats = found.capacity - (found.booked + seats);
    }
  } else {
    result.success = false;
    result.message = "Event doesn't exist";
    return result;
  }
  return result;
}

console.log("bookSeats(events, 1, 2) :", bookSeats(events, 1, 2));
console.log("bookSeats(events, 2, 1) :", bookSeats(events, 2, 1));
console.log("bookSeats(events, 99, 1) :", bookSeats(events, 99, 1));
console.log("bookSeats(events, 3, 1) :", bookSeats(events, 3, 1));
console.log("bookSeats(events, 3, -1) :", bookSeats(events, 3, -1));
console.log("bookSeats(events, 99, -1)) :", bookSeats(events, 99, -1));

// if (found) {
//   for (const event of events) {
//     if (event.capacity < seats + event.booked) {
//       result.sucess = false;
//       result.message = "Sold out";
//     } else if (seats <= 0) {
//       result.sucess = false;
//       result.message = "Seats must be a positive number";
//     } else {
//       result.sucess = true;
//       result.message = `Reservation accepted for the event: ${event.title}!`;
//       result.remainingSeats = event.capacity - (event.booked + seats);
//     }
//   }
//   return result;
// } else {
//   console.log("event doesn't exist");
// }
