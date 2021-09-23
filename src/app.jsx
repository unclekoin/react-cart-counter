import React, { useState } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';

function App() {
  const initialState = [
    { id: 1, value: 0, name: 'Spoon' },
    { id: 2, value: 4, name: 'Fork' },
    { id: 3, value: 0, name: 'Knife' },
    { id: 4, value: 0, name: 'Plate' },
    { id: 5, value: 0, name: 'Cup' },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleIncrement = (counterId, value) => {
    const newCounters = [...counters];
    const elementIndex = newCounters.findIndex((counter) => counter.id === counterId);
    newCounters[elementIndex].value = value + 1;

    setCounters(newCounters);
  }

  const handleDecrement = (counterId) => {
    const newCounters = [...counters];
    const elementIndex = newCounters.findIndex((counter) => counter.id === counterId);
    newCounters[elementIndex].value && newCounters[elementIndex].value--;

    setCounters(newCounters);
  }

  const handleDelete = (counterId) => {
    setCounters((prevState) =>
      prevState.filter((counter) => counter.id !== counterId)
    );
  };

  const handleReset = () => setCounters(initialState);

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((sum, counter) => sum + counter.value, 0)} />
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
          counters={counters}
        />
    </main>
    </div>
  );
}

export default App;
