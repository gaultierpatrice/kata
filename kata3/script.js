const calendrierDuCrayon = {
  septembre: 10,
  octobre: 9,
  novembre: 8,
  decembre: 7,
  janvier: 6,
  fevrier: 5,
  mars: 4,
  avril: 3,
  mai: 2,
  juin: 1,
};

function drawMyPen(month) {
  const penTop = " /\\\n/__\\";
  const penRow = "||||\n";
  const penBot = "|__|";
  const eraserTop = "|  |";
  const eraserBot = "|__|";

  const rowNumber = calendrierDuCrayon[month] || 1;

  let drawing = "";

  if (calendrierDuCrayon[month] <= 4) {
    drawing = `${penTop}\n${penRow.repeat(rowNumber)}${penBot}\n${eraserBot}`;
  } else {
    drawing = `${penTop}\n${penRow.repeat(
      rowNumber
    )}${penBot}\n${eraserTop}\n${eraserBot}`;
  }

  return drawing;
}

console.log(drawMyPen("septembre"));
console.log(drawMyPen("fevrier"));
console.log(drawMyPen("mars"));
console.log(drawMyPen("juin"));
