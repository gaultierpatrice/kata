export type CalendarEvent = {
  id: number;
  title: string;
  capacity: number;
  booked: number;
};
export type BookingResult = {
  success: boolean;
  message: string;
  newRemainingSeats?: number;
};
export const eventList: CalendarEvent[] = [
  { id: 1, title: "Workshop JS", capacity: 5, booked: 3 },
  { id: 2, title: "React Intro", capacity: 10, booked: 10 },
  { id: 3, title: "SQL Basics", capacity: 8, booked: 0 },
];
export function bookSeats(
  events: CalendarEvent[],
  eventId: CalendarEvent["id"],
  seats: number,
): BookingResult {
  let result: BookingResult = { success: false, message: "" };
  if (seats <= 0) {
    result.success = false;
    result.message = "Seats must be a positive number";
    return result;
  }
  const found: CalendarEvent | undefined = events.find(
    (event) => event.id === eventId,
  );
  if (found) {
    if (found.capacity < seats + found.booked) {
      result.success = false;
      result.message = "Sold out";
    } else {
      result.success = true;
      result.newRemainingSeats = found.capacity - (found.booked + seats);
    }
  } else {
    result.success = false;
    result.message = "Event not found";
    return result;
  }
  return result;
}
