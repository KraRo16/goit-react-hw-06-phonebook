import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteClick }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name + ':' + contact.number}
        {
          <button
            type="button"
            name="delte"
            onClick={() => onDeleteClick(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
