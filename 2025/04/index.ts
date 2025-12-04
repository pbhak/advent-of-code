function isAccessible(array: string[], row: number, col: number): boolean {
  // if statement-maxxing (i have gone insane)
  if (row >= array.length) return false;
  if (col >= array[col]!.length) return false;

  if (array[row]![col] !== "@") return false;

  let count = 0;
  if (array[row - 1]) {
    if (array[row - 1]![col - 1] && array[row - 1]![col - 1] === "@") count++;
    if (array[row - 1]![col] && array[row - 1]![col] === "@") count++;
    if (array[row - 1]![col + 1] && array[row - 1]![col + 1] === "@") count++;
  }

  if (array[row]![col - 1] && array[row]![col - 1] === "@") count++;
  if (array[row]![col + 1] && array[row]![col + 1] === "@") count++;

  if (array[row + 1]) {
    if (array[row + 1]![col - 1] && array[row + 1]![col - 1] === "@") count++;
    if (array[row + 1]![col] && array[row + 1]![col] === "@") count++;
    if (array[row + 1]![col + 1] && array[row + 1]![col + 1] === "@") count++;
  }

  return count < 4;
}

let input = (await Bun.file("input.txt").text()).split("\n");

let inputFrozen = [...input];
let numRemoved = 0;

while (true) {
  for (let row = 0; row < input.length; row++) {
    const rowStr = input[row]!;
    for (let col = 0; col < rowStr.length; col++) {
      if (isAccessible(input, row, col)) {
        // remove the roll if accessible
        let rowDup = input[row]!.split("");
        rowDup[col] = ".";
        input[row] = rowDup.join("");
        numRemoved++;
      }
    }
  }

  // if the input remains unchanged, end loop
  if (input.every((val, ind) => val === inputFrozen[ind])) break;
  inputFrozen = [...input];
}

console.log(numRemoved);
