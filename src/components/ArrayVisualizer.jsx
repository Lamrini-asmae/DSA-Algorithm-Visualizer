export default function ArrayBars({ array, highlighted, finished }) {
  // Calculate width per bar depending on array size
  const barWidth = Math.max(6, Math.floor(400 / array.length)); 
  // ensures bars shrink as array grows but not smaller than 6px

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-end justify-center gap-1 h-72 min-w-full">
        {array.map((value, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Bar */}
            <div
              className={`rounded-t ${
                finished
                  ? "bg-green-500"
                  : highlighted.includes(i)
                  ? "bg-red-400"
                  : "bg-blue-500"
              }`}
              style={{
                height: `${value * 3}px`,
                width: `${barWidth}px`,
              }}
            />
            {/* Number */}
            <span
              className={`mt-1 text-xs sm:text-sm ${
                highlighted.includes(i) ? "text-red-500 font-bold" : "text-gray-700"
              }`}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
