import React, { useState } from 'react';

const ContactList = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Sukanta Pramanik', email: 'sukanta@gmail.com' },
    { id: 2, name: 'Ritesh Deshmukh', email: 'riteshdeshmukh1@gmail.com' },
  ]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = contacts.length + 1;
    setContacts([...contacts, { id, name, email }]);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Add Contact</button>
      </form>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <div>Name: {contact.name}</div>
            <div>Email: {contact.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
