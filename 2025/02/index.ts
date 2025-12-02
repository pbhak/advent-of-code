// eg: "1-3" -> [1, 2, 3]
function convertStrRangeToArr(range: string): number[] {
  const rangeStart = parseInt(range.split("-")[0]!);
  const rangeEnd = parseInt(range.split("-")[1]!);
  let arr = [];

  for (let i = rangeStart; i <= rangeEnd; i++) arr.push(i);
  return arr;
}

function containsRepeatingSequence(num: number): boolean {
  let sequence = '';
  for (const char of num.toString()) {
    sequence += char;
    if (sequence === num.toString()) return false;

    if (num.toString().split(sequence).every(item => item === '')) {
      // repeating sequence found
      if (num.toString().split(sequence).length >= 2) return true;
    }
  }
  return false;
}

const input = await Bun.file("input.txt").text();
let sumOfInvalidIds = 0;

for (const str of input.trim().split(",")) {
  const range = convertStrRangeToArr(str);
  for (const num of range)
    if (containsRepeatingSequence(num)) sumOfInvalidIds += num;
}

console.log(sumOfInvalidIds);
