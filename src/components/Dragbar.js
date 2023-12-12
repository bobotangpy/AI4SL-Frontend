// DragBar.js
import React from 'react';
import Draggable from 'react-draggable';

const DragBar = ({ label, value, onChange, minValue, maxValue }) => {
  const handleDrag = (e, data) => {
    let newValue = value + data.deltaX;
    
    // Ensure the newValue stays within the specified range
    if (newValue < minValue) {
      newValue = minValue;
    } else if (newValue > maxValue) {
      newValue = maxValue;
    }

    onChange(newValue);
  };

  return (
    <div className="drag-bar">
      <p>{label}</p>
      <Draggable axis="x" onDrag={handleDrag}>
        <div className="bar" style={{ left: value + 'px' }}></div>
      </Draggable>
    </div>
  );
};

export default DragBar;
