// Initialise required variables
const fs = require('fs');
const textByLine = fs.readFileSync('input.txt').toString().split("\n");
const rowCount = textByLine[0][0];
const columnCount = textByLine[0][2];
const hooverX = textByLine[1][0];
const hooverY = textByLine[1][2];
const dirtPatches = [];
const room = [];
let instructions = ''
// Push dirt patches into appropriate array elements
for (i = 2; true; i++) {
  const hasNumber = /\d/
  if (hasNumber.test(textByLine[i])) {
    dirtPatches.push(textByLine[i]);
  } else {
    instructions = textByLine[i];
    break;
  }
}

function initialiseRoom() {
  // Create an array to represent columns
  for (i = 0; i < columnCount; i++) {
    room[i] = [];
  };
  // Push arrays to represent rows into column arrays
  room.forEach((column) => {
    for (i = 0; i < rowCount; i++) {
      column.push([]);
    };
  });
  // Push elements into squares telling the hoover which direction
  // it can't travel in from there
  room.forEach((column) => {
    if (room.indexOf(column) === 0) {
      column.forEach((square) => {
        square.push("no-west");
      });
    };
    if (room.indexOf(column) === (columnCount - 1)) {
      column.forEach((square) => {
        square.push("no-east");
      });
    };
    column.forEach((row) => {
      if (column.indexOf(row) === 0) {
        row.push("no-south");
      };
      if (column.indexOf(row) === (rowCount - 1)) {
        row.push("no-north");
      };
    });
  })
  // Push hoover into correct element
  room[hooverX][hooverY].push("hoover");
  // Push dirt patches into correct elements
  dirtPatches.forEach((dirtpatch) => {
    room[dirtpatch[0]][dirtpatch[2]].push("dirt");
  });
};

function performInstructions() {
  instructionsArray = instructions.split('');
  // instructionsArray.forEach(instructionLogic);
}

initialiseRoom();
performInstructions();
