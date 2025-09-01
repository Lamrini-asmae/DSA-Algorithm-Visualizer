const algorithms = [
  {
    name: 'Bubble Sort',
    color: 'bg-blue-100',
    description: `Bubble Sort is a simple comparison-based algorithm where adjacent elements are repeatedly compared and swapped if they are in the wrong order. This causes the largest (or smallest) elements to "bubble" to the end of the list after each pass. While it is intuitive and easy to implement, Bubble Sort performs poorly on large datasets with a time complexity of O(n²), making it inefficient compared to more advanced algorithms. It is best suited for small or nearly sorted lists and for educational purposes.`
  },
  {
    name: 'Insertion Sort',
    color: 'bg-orange-100',
    description: `Insertion Sort builds the sorted array one element at a time by taking each element and inserting it into its correct position within the already sorted portion of the array. It performs very efficiently on small or nearly sorted datasets, with a best-case time complexity of O(n) when the input is mostly sorted. However, in the worst case, its time complexity is O(n²). It is stable and in-place, making it useful for online sorting or scenarios where data arrives incrementally.`
  },
  {
    name: 'Selection Sort',
    color: 'bg-yellow-100',
    description: `Selection Sort divides the array into sorted and unsorted parts and repeatedly selects the minimum (or maximum) element from the unsorted portion, swapping it with the first unsorted element. This algorithm always performs O(n²) comparisons regardless of the initial data order. While simple to implement and with a fixed number of swaps, Selection Sort is inefficient for large lists and is generally outperformed by other algorithms. It is not stable but is in-place.`
  },
  {
    name: 'Quick Sort',
    color: 'bg-red-100',
    description: `Quick Sort is a highly efficient divide-and-conquer algorithm that selects a pivot element and partitions the array into two halves: elements less than the pivot and elements greater than the pivot. It then recursively sorts each half. With an average time complexity of O(n log n), Quick Sort is often the fastest sorting algorithm for large datasets. However, poor pivot selection can lead to a worst-case time complexity of O(n²). It is typically implemented as an in-place sort but is not stable by default.`
  },
  {
    name: 'Merge Sort',
    color: 'bg-green-100',
    description: `Merge Sort is a stable, divide-and-conquer algorithm that splits the array into halves recursively until each sub-array contains a single element. It then merges these sub-arrays in sorted order to produce larger sorted arrays. Merge Sort consistently performs at O(n log n) time complexity regardless of the initial order of elements. Though it requires extra memory proportional to the input size, its stable sorting and predictable performance make it ideal for large datasets and external sorting scenarios.`
  },
];


const AlgorithmPage = () => {
  return (
  <div className="bg-sky-50 min-h-screen">
    <div className="max-w-4xl mx-auto p-6 w-full space-y-6">
      <h1 className="text-3xl font-bold text-center mb-4 text-sky-900">Sorting Algorithms</h1>

      <p className="text-center text-sky-900 mb-8">
        Understanding sorting algorithms is important to see how data can be organized efficiently. Different methods like
        insertion, selection, bubble, merge, and quick sort work in unique ways, each suited for different situations.
      </p>

      {algorithms.map((algo, idx) => (
        <div
          key={idx}
          className={`rounded-md shadow-md p-6 ${algo.color} transition hover:scale-[1.02]`}
        >
          <h2 className="text-xl font-semibold mb-2">{algo.name}</h2>
          <p className="text-gray-700">{algo.description}</p>
        </div>
      ))}
    </div>
  </div>
);

};

export default AlgorithmPage;
