const meetings1 = [
  { start: "09:00", end: "09:30" },
  { start: "10:00", end: "11:00" },
];
const meetings2 = [
  { start: "09:00", end: "10:00" },
  { start: "09:45", end: "10:15" },
];
const meetings3 = [
  { start: "13:00", end: "13:30" },
  { start: "13:30", end: "14:00" },
];

function hasConflict(meetings) {
  // Convert "HH:MM" to minutes
  function hoursToMinutes(meeting) {
    let start = meeting.start.split(":");
    start = parseInt(start[0]) * 60 + parseInt(start[1]);
    let end = meeting.end.split(":");
    end = parseInt(end[0]) * 60 + parseInt(end[1]);
    return { start, end };
  }
  //  Declare variables in minutes for start and end of each meeting
  const { start: startA, end: endA } = hoursToMinutes(meetings[0]);
  const { start: startB, end: endB } = hoursToMinutes(meetings[1]);
  // Check if meeting A start after meeting B and if there's overlapse
  return startA < endB && startB < endA;
}

console.log("hasConflict(meetings1)", hasConflict(meetings1));
console.log("hasConflict(meetings2)", hasConflict(meetings2));
console.log("hasConflict(meetings3)", hasConflict(meetings3));
