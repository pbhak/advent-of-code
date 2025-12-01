// number can be from 0 to 99 and overflows if going in either direction
// calculate what number the dial points to, given the number it's currently on and the rotation amount
// (assumes rotation string is of format L|R + number)
function rotateDial(currentNum: number, rotation: string): number {
  // freeze initial value of currentNum
  const initialCurrentNum = currentNum;
  const rotateBy: number = parseInt(rotation.slice(1));
  rotation[0] === "L" ? (currentNum -= rotateBy) : (currentNum += rotateBy);
  currentNum %= 100;
  return currentNum;
}

let dialPosition = 50;
let zeroCount = 0; // count of how many times the dial's hit zero
const inputFile = await Bun.file("input.txt").text();

for (const line of inputFile.split("\n")) {
  dialPosition = rotateDial(dialPosition, line);
  if (dialPosition === 0) zeroCount++;
}

console.log(`Hit zero a total of ${zeroCount} times`);