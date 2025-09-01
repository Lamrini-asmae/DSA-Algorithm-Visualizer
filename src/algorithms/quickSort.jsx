export function quickSort(arr) {
  const steps = [];
  const array = [...arr];

  function partition(low, high) {
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      steps.push({ array: [...array], highlighted: [j, high] }); // compare pivot
      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
        steps.push({ array: [...array], highlighted: [i, j] }); // swap
      }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    steps.push({ array: [...array], highlighted: [i + 1, high] }); // pivot swap
    return i + 1;
  }

  function quickSort(low, high) {
    if (low < high) {
      let pi = partition(low, high);
      quickSort(low, pi - 1);
      quickSort(pi + 1, high);
    }
  }

  quickSort(0, array.length - 1);
  return steps;
}
