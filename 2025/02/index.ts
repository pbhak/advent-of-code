// eg: "1-3" -> [1, 2, 3]
function convertStrRangeToArr(range: string): number[] {
  const rangeStart = parseInt(range.split("-")[0]!);
  const rangeEnd = parseInt(range.split("-")[1]!);
  let arr = [];

  for (let i = rangeStart; i <= rangeEnd; i++) arr.push(i);
  return arr;
}

function containsRepeatingSequence(num: string): boolean {
  let sequence = "";
  for (const char of num) {
    sequence += char;
    if (sequence === num) return false;

    if (num.split(sequence).every((item) => item === "")) {
      // repeating sequence found
      if (num.split(sequence).length >= 2) return true;
    }
  }
  return false;
}

const input = await Bun.file("input.txt").text();
let sumOfInvalidIds = 0;

for (const str of input.trim().split(",")) {
  for (const num of convertStrRangeToArr(str)) {
    if (containsRepeatingSequence(num.toString())) sumOfInvalidIds += num;
  }
}

console.log(sumOfInvalidIds);
