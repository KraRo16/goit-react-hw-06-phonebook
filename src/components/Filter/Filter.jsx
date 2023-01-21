import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ value, onFilter }) {
  return (
    <div>
      Find contacts by name
      <input
        type="text"
        value={value}
        placeholder="Filter"
        onChange={onFilter}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
