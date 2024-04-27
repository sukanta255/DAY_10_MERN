import './App.css';
import React from 'react';
import HeavyComputationComponent from './components/HeavyComputationComponent'

function App() {
  const items = ['apple', 'banana', 'orange', 'grape', 'melon', 'peach'];

  return (
    <div>
      <h1>Optimizing Component Using useMemo</h1>
      <HeavyComputationComponent items={items} />
    </div>
  )
}

export default App
