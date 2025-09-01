export function insertionSort(arr) {
  const steps = [];
  const array = [...arr];

  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      steps.push({ array: [...array], highlighted: [j, j + 1] }); // compare
      array[j + 1] = array[j];
      j--;
      steps.push({ array: [...array], highlighted: [j + 1] }); // shift
    }
    array[j + 1] = key;
    steps.push({ array: [...array], highlighted: [j + 1] }); // place key
  }

  return steps;
}
