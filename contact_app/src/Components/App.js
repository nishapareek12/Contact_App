

import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import EditContact from './EditContact';
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactDetails from './ContactDetails';
import api from "../api/contacts";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
   
  const retriveContacts = async() => {
    const response = await api.get("/contacts");
    if(response.data) setContacts(response.data);
  }
  
  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts",request);
    setContacts([...contacts,response.data]);
   };
   
  const UpdateContactHandler = async (contact)  => { 
    const response  = await api.put(`/contacts/${contact.id}`,contact);
    const {id,name,email} = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? {...response.data} : contact;
      })
    );

  };
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const searchHandler = (searchTerm) => {
      setSearchTerm(searchTerm);
      if (searchTerm !== ""){
        const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join("").toLowerCase().includes(searchTerm.toLowerCase());
        });
        setSearchResults(newContactList);
      } else {
        setSearchResults(contacts);
      }
  };

  useEffect(() => {
   
    const getAllcontacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllcontacts();

  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList contacts={searchTerm.length < 1 ? contacts: searchResults} getContactId={removeContactHandler}
          term= {searchTerm}
            searchKeyword={searchHandler}
          />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/edit" element={<EditContact UpdateContactHandler={UpdateContactHandler} />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

