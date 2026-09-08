import React from 'react';

const EmptyState = ({ message = "No employees found", subMessage = "Try changing your search or filter." }) => {
  return (
    <div className="text-center py-5">
      <i className="bi bi-search text-muted" style={{ fontSize: '3rem' }}></i>
      <h4 className="mt-3 text-body-emphasis">{message}</h4>
      <p className="text-muted">{subMessage}</p>
    </div>
  );
};

export default EmptyState;
