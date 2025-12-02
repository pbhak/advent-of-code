// eg: "1-3" -> [1, 2, 3]
function convertStrRangeToArr(range: string): number[] {
  const rangeStart = parseInt(range.split("-")[0]!);
  const rangeEnd = parseInt(range.split("-")[1]!);
  let arr = [];

  for (let i = rangeStart; i <= rangeEnd; i++) arr.push(i);
  return arr;
}

function containsRepeatingSequence(num: number): boolean {
  return (
    num.toString().substring(0, num.toString().length / 2) ===
    num.toString().substring(num.toString().length / 2)
  );
}

const input = await Bun.file("input.txt").text();
let sumOfInvalidIds = 0;

for (const str of input.trim().split(",")) {
  const range = convertStrRangeToArr(str);
  for (const num of range)
    if (containsRepeatingSequence(num)) sumOfInvalidIds += num;
}

console.log(sumOfInvalidIds);
