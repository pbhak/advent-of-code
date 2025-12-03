function getLargestInArray(arr: number[], upperBound: number): number {
  let cur = 0;
  let curIndex = 0;
  for (let i = 0; i < upperBound; i++) {
    const num = arr[i]!;
    if (num > cur) {
      cur = num;
      curIndex = i;
    }
  }
  return curIndex;
}

let totalJoltage = 0;
const inputFile = await Bun.file("input.txt").text();

for (const line of inputFile.split("\n")) {
  let lineNum = line.split("").map((num) => parseInt(num));
  if (lineNum.length === 0) continue;

  let joltage = "";
  for (let i = 11; i != -1; i--) {
    const largestIndex = getLargestInArray(lineNum, lineNum.length - i);

    joltage += lineNum[largestIndex];
    lineNum.splice(largestIndex, 1);
    lineNum = lineNum.slice(largestIndex);
  }
  totalJoltage += parseInt(joltage);
}

console.log(totalJoltage);
