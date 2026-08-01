import { useState } from "react";


function App() {

  const [count, setCount] = useState(0);

  // Decide color based on count value
  const countColor = count > 0      // Positive = green
    ? 'text-emerald-600'  
    : count < 0
      ? 'text-red-500'        // Negative = red
      : 'text-amber-600';    // Zero = amber

  const countBg = count > 0
    ? 'bg-emerald-200'          // Positive = light green bg
    : count < 0
      ? 'bg-red-200'           // Negative = light red bg
      : 'bg-amber-200';

  return (
    // Full screen, gray background, centers content
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">

      {/* White card with soft shadow */}
      <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
        
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-amber-600 mb-2">Counter App</h1>
        <p className="text-gray-400 mb-8">Click buttons to change the count</p>
      
        {/* Count display - color changes*/}
        <div className={`${countBg} rounded-2xl py-8 mb-8 transition-colors`}>
          <p className={`text-7xl font-black ${countColor} transition-colors`}>{count}</p>
        </div>

        {/* Buttons — 3 in a row */}
        <div className="flex gap-4 justify-center">

          {/* Decrease button */}
          <button 
            onClick={() => setCount(count - 1)}
            className="bg-red-400 text-white w-16 h-16 rounded-xl text-2xl font-bold
                       hover:bg-red-500 transition-colors"   
          >
            -
          </button>

          {/* Reset button */}
          <button
            onClick={() => setCount(0)}
            className="bg-gray-300 text-gray-600 w-16 h-16 rounded-xl text-lg font-bold
                      hover:bg-gray-400 transition-colors"
          >
            ↺
          </button>

          {/* Increase button */}
          <button
            onClick={() => setCount(count + 1)}
            className="bg-emerald-400 text-white w-16 h-16 rounded-xl text-2xl font-bold
                      hover:bg-emerald-500 transition-colors"
          >
            +
          </button>

        </div>

        {/* Placeholder */}
        <p className="text-gray-400">Coming soon</p>
      
      </div>
    </div>
  );
}

export default App;
