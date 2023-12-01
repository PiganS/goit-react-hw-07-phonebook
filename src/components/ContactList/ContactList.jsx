import { useDispatch, useSelector } from 'react-redux';
import { ButtonDel, Contact, ContactText } from './ContactList.styled';

import { selectShowContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectShowContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteProduct = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact key={contact.id}>
          <ContactText>
            {contact.name}
            <br />
            {contact.phone}
          </ContactText>
          <ButtonDel
            onClick={() => handleDeleteProduct(contact.id)}
            type="button"
          >
            Delete
          </ButtonDel>
        </Contact>
      ))}
    </ul>
  );
};
