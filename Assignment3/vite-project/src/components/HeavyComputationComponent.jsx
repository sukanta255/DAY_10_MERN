import React, { useState, useMemo } from 'react';

const HeavyComputationComponent = ({ items }) => {
  const [filterTerm, setFilterTerm] = useState('');
  
  const filteredItems = useMemo(() => {
    console.log('Performing expensive computation using usememo...');
    return items.filter(item => item.includes(filterTerm));
  }, [items, filterTerm]);

  return (
    <div>
      <h2>Heavy Computation Component</h2>
      <input
        type="text"
        value={filterTerm}
        onChange={(e) => setFilterTerm(e.target.value)}
        placeholder="Enter filter term"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeavyComputationComponent;
