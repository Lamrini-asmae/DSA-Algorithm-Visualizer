export function mergeSort(arr) {
  const steps = [];
  const array = [...arr];

  function mergeSort(arr, start, end) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }

  function merge(arr, start, mid, end) {
    let left = arr.slice(start, mid + 1);
    let right = arr.slice(mid + 1, end + 1);

    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
      steps.push({ array: [...arr], highlighted: [k] }); // compare slot
      if (left[i] <= right[j]) {
        arr[k++] = left[i++];
      } else {
        arr[k++] = right[j++];
      }
      steps.push({ array: [...arr], highlighted: [k - 1] });
    }

    while (i < left.length) {
      arr[k] = left[i++];
      steps.push({ array: [...arr], highlighted: [k++] });
    }

    while (j < right.length) {
      arr[k] = right[j++];
      steps.push({ array: [...arr], highlighted: [k++] });
    }
  }

  mergeSort(array, 0, array.length - 1);
  return steps;
}
