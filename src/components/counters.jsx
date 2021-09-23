import React from 'react';
import Counter from './counter';

const Counters = ({ counters, onReset, ...rest }) => {
  return (
    <div className="d-flex flex-column">
      {counters.map((counter) => (
        <Counter key={counter.id} {...counter} {...rest} />
      ))}
      <button
        className="btn btn-primary align-self-end  mt-2 me-2"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Counters;
