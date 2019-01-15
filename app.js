const fs = require('fs');
const textByLine = fs.readFileSync('input.txt').toString().split("\n");
const rowCount = textByLine[0][0];
const columnCount = textByLine[0][2];
const hooverX = textByLine[1][0];
const hooverY = textByLine[1][2];

function initialiseRoom() {
  const columnArray = [];
  for (i = 0; i < columnCount; i++) {
    columnArray[i] = [];
  };
  columnArray.forEach((element) => {
    for (i = 0; i < rowCount; i++) {
      element.push([]);
    };
  });
  columnArray[4][0] = "CUNT"
  console.log(columnArray);
}

initialiseRoom();


