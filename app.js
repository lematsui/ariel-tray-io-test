// Require File System module and use to read data from input.txt file
const fs = require('fs');
const textByLine = fs.readFileSync('input.txt').toString().split("\n");
const columnCount = textByLine[0][0];
const rowCount = textByLine[0][2];
let hooverX = parseInt(textByLine[1][0]);
let hooverY = parseInt(textByLine[1][2]);
// Initialise required variables
const dirtPatches = [];
let patchesCleaned = 0;
const room = [];
let instructions = ''
let hooverLocation = ''
// Push dirt patches into appropriate array elements
for (i = 2; true; i++) {
  const hasNumber = /\d/
  if (hasNumber.test(textByLine[i])) {
    dirtPatches.push(textByLine[i]);
  } else {
    // if it comes across alphabet characters, it must be the instructions
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

// Set current location of hoover
function getHooverLocation() {
  room.forEach((column) => {
    column.forEach((row) => {
      if (row.includes("hoover")) {
        hooverLocation = `${room.indexOf(column)}` + `${column.indexOf(row)}`;
      };
    });
  });
  hooverX = parseInt(hooverLocation[0]);
  hooverY = parseInt(hooverLocation[1]);
};

// Remove the hoover from it's previous position
function removeHoover() {
  room[hooverX][hooverY].splice(room[hooverX][hooverY].indexOf("hoover"));
}

// Check to see if there is dirt on the hoover's current postion and remove if there is
function dirtCheck() {
  if (room[hooverX][hooverY].includes("dirt")) {
    room[hooverX][hooverY].splice(room[hooverX][hooverY].indexOf("dirt"));
    patchesCleaned += 1;
  }
}

// Perform instructions but do not allow hoover to travel in directions it can't
function performInstructions() {
  instructionsArray = instructions.split('');
  instructionsArray.forEach((instruction) => {
    dirtCheck();
    if (instruction === 'N') {
      if (!room[hooverX][hooverY].includes("no-north")) {
        room[hooverX][hooverY + 1].push("hoover");
        removeHoover();
        getHooverLocation();
      };
    };
    if (instruction === 'E') {
      if (!room[hooverX][hooverY].includes("no-east")) {
        room[hooverX + 1][hooverY].push("hoover");
        removeHoover();
        getHooverLocation();
      };
    };
    if (instruction === 'S') {
      if (!room[hooverX][hooverY].includes("no-south")) {
        room[hooverX][hooverY - 1].push("hoover");
        removeHoover();
        getHooverLocation();
      };
    };
    if (instruction === 'W') {
      if (!room[hooverX][hooverY].includes("no-west")) {
        room[hooverX - 1][hooverY].push("hoover");
        removeHoover();
        getHooverLocation();
      }
    }
    dirtCheck();
  });
}

// Run functions and log results
initialiseRoom();
performInstructions();
console.log(`Hoover X coordinate: ${hooverX}`);
console.log(`Hoover Y coordinate: ${hooverY}`);
console.log(`Patches of dirt cleaned: ${patchesCleaned}`);
