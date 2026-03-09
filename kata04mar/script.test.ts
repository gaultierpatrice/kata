import { test, expect } from "vitest";
import { bookSeats, eventList } from "./script.ts";

test("La reservation est faite et il reste 0 places", () => {
  expect(bookSeats(eventList, 1, 2)).toEqual({
    success: true,
    message: "",
    newRemainingSeats: 0,
  });
});

test("2eme test", () => {
  expect(bookSeats(eventList, 2, 1)).toEqual({
    success: false,
    message: "Sold out",
  });
});

test("3eme test", () => {
  expect(bookSeats(eventList, 99, 1)).toEqual({
    success: false,
    message: "Event not found",
  });
});
