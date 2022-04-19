import React from 'react';
import { Counter } from './features/counter/Counter';
import Logged from './features/logged/Logged';

function App() {
  return (
    <div>
      <Counter />
      <br />
      <Logged />
    </div>
  );
}

export default App;
