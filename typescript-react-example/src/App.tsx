import React from 'react';
import "./App.css"
import { TextField } from './TextField';
import { Counter } from './Counter';

const App: React.FC = () => {
  return (
    <div>
      <h1>Simple Typescript - React Counter</h1>
      <Counter>
        {({ count, setCount }) => (
          <div>
            <button onClick={() => setCount(count -1)}>-</button>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;
