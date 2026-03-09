"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventList = [
    { id: 1, title: "Workshop JS", capacity: 5, booked: 3 },
    { id: 2, title: "React Intro", capacity: 10, booked: 10 },
    { id: 3, title: "SQL Basics", capacity: 8, booked: 0 },
];
function bookSeats(events, eventId, seats) {
    let result = { success: false, message: "" };
    if (seats <= 0) {
        result.success = false;
        result.message = "Seats must be a positive number";
        return result;
    }
    const found = events.find((event) => event.id === eventId);
    if (found) {
        if (found.capacity < seats + found.booked) {
            result.success = false;
            result.message = "Sold out";
        }
        else {
            result.success = true;
            result.newRemainingSeats = found.capacity - (found.booked + seats);
        }
    }
    else {
        result.success = false;
        result.message = "Event doesn't exist";
        return result;
    }
    return result;
}
console.log("bookSeats(eventList, 1, 2) :", bookSeats(eventList, 1, 2));
console.log("bookSeats(eventList, 2, 1) :", bookSeats(eventList, 2, 1));
console.log("bookSeats(eventList, 99, 1) :", bookSeats(eventList, 99, 1));
console.log("bookSeats(eventList, 3, 1) :", bookSeats(eventList, 3, 1));
console.log("bookSeats(eventList, 3, -1) :", bookSeats(eventList, 3, -1));
console.log("bookSeats(eventList, 99, -1) :", bookSeats(eventList, 99, -1));
//# sourceMappingURL=script.js.map