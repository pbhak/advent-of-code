function getLargestInArray(arr: number[], restrict: boolean): number {
  let cur = 0;
  let curIndex = 0;
  const upperBound = restrict ? arr.length - 1 : arr.length;
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

  const num1 = lineNum[getLargestInArray(lineNum, true)];
  lineNum = lineNum.slice(getLargestInArray(lineNum, true) + 1);
  const num2 = lineNum[getLargestInArray(lineNum, false)];

  console.log(lineNum, num1, num2, "\n")

  totalJoltage += parseInt(num1!.toString() + num2!.toString());
}

console.log(totalJoltage);
