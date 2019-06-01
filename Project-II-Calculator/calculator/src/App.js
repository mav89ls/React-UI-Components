import React from 'react';
import './App.css';

import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>
      <h3>Welcome to Marco's Calculator</h3>
      <p>
        Marco Vargas built this calculator!
      </p>
      <p>
        <strong>
          Does it actually work? Not yet, but will soon! haha
          it looks great though right?
        </strong>
      </p>
      <CalcDisplay />
    </div>
  );
};

export default App;
