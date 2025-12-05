function valueInRange(value: number, rangeList: string[]): boolean {
  for (const range of rangeList) {
    const rangeStart = parseInt(range.split("-")[0]!);
    const rangeEnd = parseInt(range.split("-")[1]!);

    if (value >= rangeStart && value <= rangeEnd) return true;
  }
  return false;
}

const input = await Bun.file("input.txt").text();

let freshRanges: string[] = [];
let availableIngredients: string[] = [];

for (const line of input.split("\n")) {
  if (line === "") continue;
  line.split("-").length > 1
    ? freshRanges.push(line)
    : availableIngredients.push(line);
}

let numFresh = 0;
for (const id of availableIngredients) {
  if (valueInRange(parseInt(id), freshRanges)) numFresh++;
}
console.log(numFresh);
