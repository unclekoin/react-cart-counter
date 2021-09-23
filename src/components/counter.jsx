import React from 'react';

const Counter = ({ id, name, value, onIncrement, onDecrement, onDelete }) => {
  const formatValue = () => {
    return value ? value : 'Empty';
  };

  const getBadgeClasses = () => {
    let classes = 'badge me-5 bg-';
    return (classes += value ? 'primary' : 'warning');
  };

  const handleIncrement = () => {
    onIncrement(id, value);
  };

  return (
    <div className="d-flex align-items-center justify-content-between bg-light ps-3 pe-2 mb-2">
      <span>{name}</span>
      <div>
        <span className={getBadgeClasses()}>{formatValue()}</span>
        <div className="btn-group me-3" role="group">
          {/* <button
        onClick={() => props.onIncrement(props.id, props.value)}
        className="btn btn-secondary me-2"
      >
        Increment
      </button> */}
          <button onClick={handleIncrement} className="btn btn-primary">
            +
          </button>
          <button
            onClick={() => onDecrement(id)}
            className="btn btn-primary me-2"
            disabled={!value}
          >
            -
          </button>
        </div>
        <button onClick={() => onDelete(id)} className="btn btn-secondary">
        <i className="bi bi-trash fs-5"></i>
        </button>
      </div>
    </div>
  );
};

export default Counter;
