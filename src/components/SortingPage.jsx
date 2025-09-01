import { useState, useEffect } from "react";
import ArrayBars from "./ArrayVisualizer";
import { bubbleSort} from "../algorithms/bubbleSort";
import { insertionSort } from "../algorithms/insertionSort";
import { mergeSort } from "../algorithms/mergeSort.jsx";
import { selectionSort } from "../algorithms/selectionSort";
import { quickSort} from "../algorithms/quickSort";


export default function App() {
  const [array, setArray] = useState([]);
  const [steps, setSteps] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [algo, setAlgo] = useState("bubble");
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [finished, setFinished] = useState(false);
  const [inputList, setInputList] = useState(""); // for user’s numbers
  const [inputLength, setInputLength] = useState(10); // for random length

  // Generate random array with chosen length
  const generateArray = (len = 10) => {
    const newArr = Array.from({ length: len }, () =>
      Math.floor(Math.random() * 50) + 5
    );
    setArray(newArr);
    setSteps([]);
    setStepIndex(0);
    setPlaying(false);
    setFinished(false);

  };

  // User submits custom list
  const handleCustomList = () => {
    const newArr = inputList
      .split(",")
      .map((n) => parseInt(n.trim(), 10))
      .filter((n) => !isNaN(n));

    if (newArr.length > 0) {
      setArray(newArr);
      setSteps([]);
      setStepIndex(0);
      setPlaying(false);
    setFinished(false);
    }
  };

  // Generate steps based on chosen algorithm
  const generateSteps = () => {
    let result = [];
    if (algo === "bubble") result = bubbleSort(array);
    else if (algo === "insertion") result = insertionSort(array);
    else if (algo === "merge") result = mergeSort(array);
    else if (algo === "selection") result = selectionSort(array);
    else if (algo === "quick") result = quickSort(array);

    setSteps(result);
    setStepIndex(0);
    setPlaying(false);
    setFinished(false);

  };

  // Auto play
  useEffect(() => {
    let timer;
    if (playing && stepIndex < steps.length - 1) {
      timer = setTimeout(() => setStepIndex(stepIndex + 1), speed);
    } else if (playing && stepIndex === steps.length - 1) {
      // sorting done
      setPlaying(false);
      setFinished(true);
    }
    return () => clearTimeout(timer);
  }, [playing, stepIndex, steps, speed]);

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-sky-50">
      <h1 className="text-3xl font-bold mb-6">Sorting Visualizer</h1>

      {/* Input Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Custom List Input */}
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={inputList}
            onChange={(e) => setInputList(e.target.value)}
            placeholder="Enter numbers e.g. 10,5,8,3"
            className="p-2 border rounded w-64"
          />
          <button
            onClick={handleCustomList}
            className="px-3 py-2 bg-purple-500 text-white rounded"
          >
            Set List
          </button>
        </div>

        {/* Random Array Length Input */}
        <div className="flex gap-2 items-center">
          <input
            type="number"
            min="5"
            max="50"
            value={inputLength}
            onChange={(e) => setInputLength(Number(e.target.value))}
            className="p-2 border rounded w-24"
          />
          <button
            onClick={() => generateArray(inputLength)}
            className="px-3 py-2 bg-green-600 text-white rounded"
          >
            Random List
          </button>
        </div>
      </div>

      {/* Sorting Controls */}
      <div className="mb-6 flex flex-wrap gap-3 items-center">
        <select
          value={algo}
          onChange={(e) => setAlgo(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="bubble">Bubble Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="quick">Quick Sort</option>
        </select>

        <button
          onClick={generateSteps}
          className="px-3 py-2 bg-green-500 text-white rounded"
        >
          Generate Steps
        </button>

        <button
          onClick={() => setPlaying(!playing)}
          disabled={steps.length === 0}
          className={`px-3 py-2 rounded text-white ${
            playing ? "bg-red-500" : "bg-blue-500"
          }`}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>

      {/* Speed Control */}
      <div className="flex items-center gap-2 mb-6">
        <label className="text-sm">Speed:</label>
        <input
          type="range"
          min="50"
          max="1000"
          step="50"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
        <span className="text-sm">{speed} ms</span>
      </div>

      {/* Array Visualization */}
      <ArrayBars
        array={steps[stepIndex]?.array || array}
        highlighted={steps[stepIndex]?.highlighted || []}
        finished={finished}
     />
     {finished && (
      <div className="mt-4 text-lg font-semibold text-green-600">
        Sorting Finished!
      </div>
    )}
    </div>
  );
}
