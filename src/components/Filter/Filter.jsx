import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filter-selectors';

export const Filter = () => {
  const dispatch = useDispatch(getFilter);
  return (
    <div>
      Find contacts by name
      <input
        type="text"
        placeholder="Filter"
        onChange={ev => dispatch(filter(ev.target.value.toLowerCase()))}
      />
    </div>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onFilter: PropTypes.func.isRequired,
// };
