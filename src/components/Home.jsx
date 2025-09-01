const algorithms = [
  {
    name: 'Bubble Sort',
    color: 'bg-blue-100',
    description: `Bubble Sort is a simple comparison-based algorithm where adjacent elements are repeatedly compared and swapped if they are in the wrong order. This process "bubbles" the largest (or smallest) element to the end in each iteration. Though easy to understand, it is inefficient for large datasets with a time complexity of O(n²).`
  },
  {
    name: 'Insertion Sort',
    color: 'bg-orange-100',
    description: `Insertion Sort builds the sorted array one element at a time by repeatedly taking the next element and inserting it into its correct position among the previously sorted elements. It’s efficient for small datasets and nearly sorted arrays, with a best-case time complexity of O(n).`
  },
  {
    name: 'Selection Sort',
    color: 'bg-yellow-100',
    description: `Selection Sort divides the array into a sorted and unsorted part. It repeatedly selects the smallest (or largest) element from the unsorted part and swaps it with the first unsorted element. It has a simple logic but performs poorly on large lists, with a consistent O(n²) time complexity.`
  },
  {
    name: 'Quick Sort',
    color: 'bg-red-100',
    description: `Quick Sort is a divide-and-conquer algorithm that picks a 'pivot' element and partitions the array into two halves: elements less than the pivot and elements greater than the pivot. It then recursively sorts the sub-arrays. Quick Sort is efficient with an average time complexity of O(n log n), but its worst-case is O(n²) if the pivot is poorly chosen.`
  },
  {
    name: 'Merge Sort',
    color: 'bg-green-100',
    description: `Merge Sort is a stable, divide-and-conquer algorithm that splits the array into halves, recursively sorts them, and merges the sorted halves. It consistently performs well with a time complexity of O(n log n), making it ideal for large datasets, though it requires additional space for merging.`
  },
];

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-4">Sorting Algorithms</h1>
      
      {/* ✅ Explanation Paragraph */}
      <p className="text-center text-gray-600 mb-8">
        Understanding sorting algorithms is important. In this web app, you will find visualizers
        that help you learn how different sorting techniques work step by step.
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
  );
};

export default Home;
