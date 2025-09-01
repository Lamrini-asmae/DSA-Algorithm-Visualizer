export function selectionSort(arr) {
  const steps = [];
  const array = [...arr];

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      steps.push({ array: [...array], highlighted: [minIndex, j] }); // compare
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      steps.push({ array: [...array], highlighted: [i, minIndex] }); // swap
    }
  }
  return steps;
}
